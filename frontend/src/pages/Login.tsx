import { cn } from "cn"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const previewImages = [
  { src: "/src/assets/preview1.png", alt: "Apresentação da plataforma 1" },
  { src: "/src/assets/preview2.png", alt: "Apresentação da plataforma 2" },
  { src: "/src/assets/preview3.png", alt: "Apresentação da plataforma 3" },
]

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-[60%_40%]">
      <div className="relative hidden h-full max-h-svh bg-muted lg:block overflow-hidden">
        <Carousel opts={{ loop: true }} className="h-full w-full">
          <CarouselContent className="h-full -ml-0">
            {previewImages.map((image, index) => (
              <CarouselItem key={index} className="h-full pl-0">
                <div className="relative h-full w-full">
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover"/>
                </div>
                
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <form className={cn("flex flex-col gap-6")}>
              <FieldGroup>
                <div className="flex flex-col items-start gap-1 text-left">
                  <h1 className="text-2xl font-bold"> Bem-vindo de volta </h1>
                  <p className="text-sm text-muted-foreground"> Entre com suas credenciais para acessar a plataforma. </p>
                </div>

                <Field>
                  <FieldLabel htmlFor="email"> E-mail </FieldLabel>
                  <Input id="email" name="email" type="email" placeholder="seu@email.com" autoComplete="email" required/>
                </Field>

                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password"> Senha </FieldLabel>
                    <a href="#" className="ml-auto text-sm text-primary underline-offset-4 hover:underline"> Esqueceu sua senha? </a>
                  </div>

                  <Input id="password" name="password" type="password" placeholder="Digite sua senha" autoComplete="current-password" required />
                </Field>

                <Field>
                  <Button type="submit" size="sm" className="bg-gradient-to-r from-primary to-brand-accent hover:opacity-80 transition-opacity duration-300">
                    Acessar Podyum
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}