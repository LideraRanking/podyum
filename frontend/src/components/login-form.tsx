import { cn } from "cn"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({className, ...props}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-left gap-1 text-left">
          <h1 className="text-2xl font-bold">Bem-vindo de volta</h1>
          <p className="text-sm text-muted-foreground"> Entre com suas credenciais para acessar a plataforma. </p>
        </div>

        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input id="email" type="email" placeholder="seu@email.com" required />
        </Field>

        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password" >Senha</FieldLabel>
            <a href="#" className="text-primary ml-auto text-sm underline-offset-4 hover:underline"> Esqueceu sua senha? </a>
          </div>

          <Input id="password" type="password" placeholder="Digite sua senha" required />
        </Field>

        <Field>
          <Button type="submit">Login</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
