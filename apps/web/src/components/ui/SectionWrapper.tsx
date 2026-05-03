import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { fadeInUp } from '../../lib/animations'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id={id} className={`section ${className}`} ref={ref}>
      <motion.div
        className="container"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {children}
      </motion.div>
    </section>
  )
}
