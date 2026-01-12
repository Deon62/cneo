import { useEffect, useRef, useState } from 'react'

/**
 * AnimatedSection - A component that animates children when they scroll into view
 * @param {string} animation - Animation type: 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'fadeIn', 'scaleIn', 'slideInUp'
 * @param {number} delay - Delay in milliseconds before animation starts
 * @param {number} threshold - Intersection Observer threshold (0-1)
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Child elements to animate
 */
function AnimatedSection({ 
  animation = 'fadeInUp', 
  delay = 0, 
  threshold = 0.1,
  className = '',
  children 
}) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
            // Optionally disconnect after animation to improve performance
            // observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [delay, threshold])

  // Convert camelCase to kebab-case (e.g., fadeInUp -> fade-in-up)
  const kebabAnimation = animation.replace(/([A-Z])/g, '-$1').toLowerCase()
  const animationClass = `animate-${kebabAnimation}`
  const combinedClassName = `animated-section-wrapper ${animationClass} ${isVisible ? 'animated' : ''} ${className}`.trim()

  return (
    <div ref={sectionRef} className={combinedClassName}>
      {children}
    </div>
  )
}

export default AnimatedSection
