const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.error || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

/**
 * Stream a chat reply from the API as Server-Sent Events.
 * Calls onDelta for each text fragment as it arrives.
 * Falls back to a single onDelta call if the server responds with plain JSON
 * (older API deployments).
 */
export async function streamChat(message: string, onDelta: (text: string) => void): Promise<void> {
  const response = await fetch(`${API_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, stream: true }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.error || `HTTP error! status: ${response.status}`);
  }

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/event-stream') || !response.body) {
    const data = await response.json();
    if (data.reply) onDelta(data.reply);
    return;
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    const events = buffer.split('\n\n');
    buffer = events.pop() ?? '';

    for (const event of events) {
      const dataLine = event.split('\n').find(line => line.startsWith('data: '));
      if (!dataLine) continue;

      let payload: { delta?: string; done?: boolean; error?: string };
      try {
        payload = JSON.parse(dataLine.slice(6));
      } catch {
        continue;
      }
      if (payload.error) throw new Error(payload.error);
      if (payload.delta) onDelta(payload.delta);
      if (payload.done) return;
    }
  }
}
