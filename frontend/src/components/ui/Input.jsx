
import { useId } from 'react'

export default function Input({
  label,
  icon: Icon,
  error,
  id,
  className = '',
  containerClassName = '',
  ...props
}) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          {label}
        </label>
      )}

      <div
        className={`
          flex h-12 items-center gap-3 rounded-xl border
          bg-[#0d1423] px-3.5 transition
          focus-within:ring-2 focus-within:ring-blue-500/15
          ${
            error
              ? 'border-red-500 focus-within:border-red-500'
              : 'border-slate-700/80 focus-within:border-blue-500'
          }
        `}
      >
        {Icon && (
          <Icon
            size={18}
            aria-hidden="true"
            className="shrink-0 text-slate-500"
          />
        )}

        <input
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`
            h-full w-full min-w-0 border-0 bg-transparent p-0
            text-sm text-slate-100 outline-none
            placeholder:text-slate-600
            focus:border-0 focus:outline-none focus:ring-0
            disabled:cursor-not-allowed disabled:opacity-50
            ${className}
          `}
          {...props}
        />
      </div>

      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-1.5 text-xs text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  )
}
