import { motion } from 'framer-motion'
import React, { type ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  glow?: 'violet' | 'cyan' | 'none'
  glowColor?: string
  onClick?: () => void
  style?: React.CSSProperties
}

export function GlassCard({ children, className = '', glow = 'violet', glowColor, onClick, style }: GlassCardProps) {
  const glowStyle = glowColor
    ? glowColor
    : glow === 'violet'
    ? 'rgba(124, 58, 237, 0.35)'
    : glow === 'cyan'
    ? 'rgba(34, 211, 238, 0.25)'
    : 'transparent'

  return (
    <motion.div
      className={`glass-card ${className}`}
      onClick={onClick}
      whileHover={{
        borderColor: glowStyle,
        boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 40px ${glowStyle}`,
        y: -4,
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      style={{ cursor: onClick ? 'pointer' : 'default', ...style }}
    >
      {children}
    </motion.div>
  )
}
