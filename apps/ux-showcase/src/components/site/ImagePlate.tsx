import { motion } from "framer-motion";

interface ImagePlateProps {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  className?: string;
  fit?: "cover" | "contain";
  bg?: string;
  /** When set, renders the image inside a Figma-style frame on a canvas background. */
  frame?: string;
}

export function ImagePlate({
  src,
  alt,
  caption,
  aspect = "aspect-[3/2]",
  className = "",
  fit = "cover",
  bg = "bg-zinc-100",
  frame,
}: ImagePlateProps) {
  if (frame) {
    return (
      <figure className="space-y-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`relative w-full p-6 md:p-10 ${className}`}
          style={{
            backgroundColor: "#f4f5f7",
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        >
          {/* Figma frame label */}
          <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium text-[#0d99ff]">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
              <rect x="1" y="1" width="10" height="10" stroke="currentColor" strokeWidth="1.25" />
            </svg>
            <span>{frame}</span>
          </div>

          {/* Frame */}
          <div
            className={`${aspect} w-full overflow-hidden ${bg} ring-1 ring-[#0d99ff]/60 shadow-[0_1px_0_rgba(0,0,0,0.04),0_18px_40px_-20px_rgba(13,153,255,0.25)]`}
          >
            <img
              src={src}
              alt={alt}
              className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
              loading="lazy"
            />
          </div>

          {/* corner handles */}
          {[
            "top-[18px] left-[18px] md:top-[34px] md:left-[34px]",
            "top-[18px] right-[18px] md:top-[34px] md:right-[34px]",
            "bottom-[18px] left-[18px] md:bottom-[34px] md:left-[34px]",
            "bottom-[18px] right-[18px] md:bottom-[34px] md:right-[34px]",
          ].map((pos) => (
            <span
              key={pos}
              className={`pointer-events-none absolute ${pos} -translate-x-1/2 -translate-y-1/2 block h-2 w-2 border border-[#0d99ff] bg-white`}
              style={{ transform: "translate(-50%, -50%)" }}
            />
          ))}
        </motion.div>
        {caption ? (
          <figcaption className="text-[11px] italic text-lead">{caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className="space-y-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        className={`${aspect} w-full overflow-hidden ${bg} outline outline-1 -outline-offset-1 outline-black/5 ${className}`}
      >
        <img
          src={src}
          alt={alt}
          className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
          loading="lazy"
        />
      </motion.div>
      {caption ? (
        <figcaption className="text-[11px] italic text-lead">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
