const variants = {
  primary:
    'border border-transparent bg-blue-600 text-white hover:bg-blue-500',

  disabled:
    'border border-transparent bg-slate-700/80 text-slate-400',

  outline:
    'border-2 border-blue-600 bg-transparent text-blue-500 hover:bg-blue-600/10',

  secondary:
    'border-2 border-slate-800 bg-transparent text-slate-400 hover:border-slate-700',
}

export default function Button({
  children,
  variant = 'primary',
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) {
  const selectedVariant = variants[variant] ?? variants.primary

  return (
    <button
      type={type}
      disabled={disabled || variant === 'disabled'}
      className={`
        flex h-11 w-full items-center justify-center
        rounded-xl px-4
        text-base font-medium
        transition-colors duration-200
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-blue-500
        focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b14]
        disabled:cursor-not-allowed
        ${selectedVariant}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
