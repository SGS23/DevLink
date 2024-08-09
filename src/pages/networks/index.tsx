import { FormEvent, useEffect, useState } from 'react'
import { Header } from "../../components/header";
import { Input } from "../../components/input";

import { database } from '../../services/firebaseConection'
import {
    setDoc, //cria item ´so aue a gene que dá o nome
    doc,//cria elemento com id aleatório
    getDoc,//buscar uma vez o o documento
} from 'firebase/firestore'

export function Networks() {
    const [facebook, setFacebook] = useState("")
    const [instagran, setInstagran] = useState("")
    const [youtube, setYoutube] = useState("")

    useEffect(() => {
        function loadLinks() {
            const docRef = doc(database,
                "social", "link")
            getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot.data() !== undefined) {
                        setFacebook(snapshot.data()?.facebook)
                        setInstagran(snapshot.data()?.instagran)
                        setYoutube(snapshot.data()?.youtube)
                    }
                })
        }

        loadLinks();
    }, [])

    function handleRegister(e: FormEvent) {
        e.preventDefault();

        setDoc(doc(database, 'social', "link"), {
            facebook: facebook,
            instagran: instagran,
            youtube: youtube,
        })
            .then(() => {
                console.log('CADASTRADO COM SUCESSO')
            })
            .catch((error) => {
                console.log('ERRO AO SALVAR' + error)
            })
    }

    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />

            <h1 className="text-white text-2-1 font-medium mt-8 mb-4">Minhas redes sociais</h1>

            <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
                <label className="text-white font-medium mt-2 mb-2">Link do Facebook</label>
                <Input
                    type="url"
                    placeholder="Digite a url do facebook..."
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">Link do Instagran</label>
                <Input
                    type="url"
                    placeholder="Digite a url do instagran..."
                    value={instagran}
                    onChange={(e) => setInstagran(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">Link do Youtube</label>
                <Input
                    type="url"
                    placeholder="Digite a url do youtube..."
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)}
                />

                <button
                    type='submit'
                    className='text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium'
                >
                    Salvar Links
                </button>
            </form>
        </div>

    )
}