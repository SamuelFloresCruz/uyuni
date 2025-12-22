export default function Card({ 
  children, 
  hover = false,
  className = '',
  padding = 'p-6',
  ...props 
}) {
  const hoverStyles = hover ? 'card-hover' : ''
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-soft ${hoverStyles} ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}