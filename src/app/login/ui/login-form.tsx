"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthService } from "@/services/auth/auth"
import { Login } from "@/services/auth/auth.interface"
import { useRouter } from "next/navigation"
import { useState } from "react"
import useSWRMutation from "swr/mutation"

export const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const { trigger, isMutating } = useSWRMutation(
        'login',
        async (_key, { arg }: { arg: Login }) => AuthService.login(arg),
        {
            onSuccess: () => {
                router.push('/')
            }
        }
    )

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        await trigger({ email, password }).catch(() => {})

    }

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Iniciar sesión</CardTitle>
                <CardDescription>Ingresa tus credenciales para acceder</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Correo</Label>
                            <Input
                                id="email"
                                placeholder="Ingresa tu correo"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Contraseña</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancelar</Button>
                <Button onClick={handleSubmit} disabled={isMutating}>Iniciar sesión</Button>
            </CardFooter>
        </Card>
    )
}
