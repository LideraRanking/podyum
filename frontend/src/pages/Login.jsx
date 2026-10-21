import { useState } from 'react'
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from 'lucide-react'
import loginIllustration from '../assets/login-illustration.png'
import podiumLogoImg from '../assets/podyum-logo.png'

import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

function PodiumLogo() {
  return (
    <img
      src={podiumLogoImg}
      alt="Podyum Logo"
      className="h-15 w-auto object-contain"
    />
  )
}

function BrandPanel() {
  return (
    <section className="relative hidden h-screen overflow-hidden bg-[#0A1225] lg:flex lg:items-center lg:justify-center">
      <img
        src={loginIllustration}
        alt="Ilustração do Podium"
        className="h-full w-auto max-w-none object-cover"
      />
    </section>
  )
}

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage(
      'Interface pronta! Conecte este formulário à API de autenticação do Django.'
    )
  }

  return (
    <section className="relative flex min-h-screen flex-1 items-center justify-center bg-[#070b14] px-6 py-10 sm:px-10 lg:px-12">
      <div className="w-full max-w-[420px]">
        <div className="mb-12 flex items-center justify-center lg:hidden">
          <PodiumLogo />
        </div>

        <div className="mb-9">
          <h2 className="text-3xl font-bold tracking-tight text-white"> Bem-vindo de volta </h2>
          <p className="mt-2 text-sm leading-6 text-slate-400"> Entre com suas credenciais para acessar a plataforma. </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            id="email"
            label="E-mail"
            icon={Mail}
            type="email"
            autoComplete="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <label htmlFor="password" className="text-sm font-medium text-slate-200">
                Senha
              </label>

              <button
                type="button"
                onClick={() =>
                  setMessage(
                    'Conecte aqui o fluxo de recuperação de senha.'
                  )
                }
                className="text-xs font-medium text-slate-400 transition hover:text-cyan-300 focus:outline-none"
              >
                Esqueceu a senha?
              </button>
            </div>

            <Input
              id="password"
              icon={LockKeyhole}
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword((previous) => !previous)}
              aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              className="mt-2 text-xs font-medium text-slate-400 transition hover:text-slate-200"
            >
              {showPassword ? (
                <>
                  <EyeOff size={14} className="mr-1 inline" />
                  Ocultar senha
                </>
              ) : (
                <>
                  <Eye size={14} className="mr-1 inline" />
                  Mostrar senha
                </>
              )}
            </button>
          </div>

          <label className="flex w-fit cursor-pointer items-center gap-2.5 py-1 text-sm text-slate-400">
            <input
              type="checkbox"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
              className="h-4 w-4 accent-blue-500"
            />
            Manter conectado
          </label>

          <Button
            type="submit"
            className="group h-[50px] gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/15 hover:brightness-110 active:scale-[0.99]"
          >
            Entrar na plataforma
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1"/>
          </Button>

          {message && (
            <p role="status" className="rounded-lg border border-blue-400/20 bg-blue-400/[0.07] p-3 text-sm leading-5 text-blue-200">
              {message}
            </p>
          )}
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-800" />
          <span className="text-xs text-slate-500">ou</span>
          <div className="h-px flex-1 bg-slate-800" />
        </div>

        <Button
          variant="secondary"
          className="h-12 gap-2 border-slate-700 text-sm hover:border-slate-500 hover:bg-white/[0.03]"
          onClick={() =>
            setMessage(
              'O acesso SSO corporativo ainda precisa ser configurado.'
            )
          }
        >
          <ShieldCheck size={17} />
          Entrar com SSO corporativo
        </Button>

        
        <p className="mt-8 text-center text-sm text-slate-500">
          Não tem uma conta?{' '}
          <button
            type="button"
            onClick={() =>
              setMessage(
                'Solicite ao administrador da sua empresa o acesso à plataforma.'
              )
            }
            className="font-medium text-blue-400 transition hover:text-cyan-300"
          >
            Solicitar acesso
          </button>
        </p>

        <p className="mt-12 text-center text-xs text-slate-600 lg:hidden"> © 2026 Podium · Lidera Ranking </p>
      </div>

      <span className="absolute bottom-5 right-6 hidden text-[10px] text-slate-600 lg:block"> Podium · MVP </span>
    </section>
  )
}

export default function Login() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#070b14] font-sans antialiased">
      <div className="grid h-full w-full lg:grid-cols-[auto_1fr]">
        <BrandPanel />
        <LoginForm />
      </div>
    </main>
  )
}
