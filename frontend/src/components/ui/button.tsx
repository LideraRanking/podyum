import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active", // 1. Botão Azul Sólido
        secondary: "bg-bg-surface text-text-secondary border-border-default hover:bg-bg-hover hover:text-text-primary", // 2. Botão Dark/Muted Sólido
        outline: "border-primary text-primary bg-transparent hover:bg-primary-soft/40", // 3. Botão Outline Azul
        "outline-secondary": "border-border-default text-text-muted bg-transparent hover:border-text-muted hover:text-text-secondary", // 4. Botão Outline Sutil / Muted
        accent: "bg-brand-accent text-white hover:opacity-90", // 5. Botão Roxo / Brand Accent

        // Variantes adicionais comuns mantidas para suporte
        ghost: "hover:bg-bg-hover text-text-secondary hover:text-text-primary",
        destructive: "bg-danger/20 text-danger hover:bg-danger/30",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-7 gap-1 px-3 text-xs",
        sm: "h-9 gap-1.5 px-4 text-xs",
        lg: "h-12 gap-2 px-8 text-base",
        icon: "size-11",
        "icon-xs": "size-7",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }