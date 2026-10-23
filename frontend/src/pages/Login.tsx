import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
    return (
        <div className="grid min-h-svh lg:grid-cols-[60%_40%]">
            <div className="relative hidden bg-muted lg:block">
                <img src="src/assets/preview1.png" alt="Image" className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"/>
            </div>

            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-md">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
