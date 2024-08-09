import { Link, useNavigate } from "react-router-dom";
import { Input } from '../../components/input'
import { FormEvent, useState } from "react";

import { auth } from '../../services/firebaseConection'
import { signInWithEmailAndPassword } from 'firebase/auth'//método de login

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e: FormEvent) {//todas do tipo submit disparam um evento
        e.preventDefault();//p não atualizar

        if (email === '' || password === '') {
            alert('Preencha todos os campos!')
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {//caso dê certo
                console.log('Logado com sucesso!')
                navigate("/admin", { replace: true })

            })
            .catch((error) => {//caso falhe a requisição
                console.log('Erro ao fazer login:')
                console.log(error);
            })

    }

    return (
        <div className="flex w-full h-screen items-center justify-center flex-col">
            <Link to="/">
                <h1 className="mt-11 text-white mb-7 font-bold text-5xl">Dev
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">Link</span>
                </h1>
            </Link>

            <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-2">
                <Input
                    placeholder="Digite o seu Email..."
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    placeholder="**********"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white">
                    Acessar
                </button>
            </form>
         {/* sivaldo@teste.com -62323262 */}
        </div>
    )
}