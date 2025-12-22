export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...props 
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white focus:ring-primary',
    secondary: 'bg-secondary hover:bg-secondary-dark text-white focus:ring-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    ghost: 'text-primary hover:bg-primary hover:bg-opacity-10',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-600',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}