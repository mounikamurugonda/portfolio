import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface NeonButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  onClick?: () => void
  href?: string
  id?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
}

export function NeonButton({
  children,
  variant = 'primary',
  onClick,
  href,
  id,
  type = 'button',
  disabled = false,
  className = '',
}: NeonButtonProps) {
  const cls =
    variant === 'primary'
      ? `btn-primary ${className}`
      : variant === 'outline'
      ? `btn-outline ${className}`
      : `btn-secondary ${className}`

  if (href) {
    return (
      <motion.a
        id={id}
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      id={id}
      className={cls}
      onClick={onClick}
      type={type}
      disabled={disabled}
      whileTap={{ scale: 0.97 }}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      {children}
    </motion.button>
  )
}
