interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
}

function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
  return (
    <section id={id} className={`w-full py-16 md:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper