import React from 'react'
import Link from 'next/link'
import useSWR, { SWRConfig } from 'swr'
import PageTitle from '../components/PageTitle'

// função padrão do navegador 
//const fetcher = (...args) => fetch(...args).then(res => res.json())
const fetcher = url => fetch(url).then(r => r.json())

const Index = () => {

    // URL para buscar os dados e método como ele vai buscar
    const { data, error } = useSWR('/api/get-promo', fetcher)
    //return (<pre>{JSON.stringify(data)}</pre>)

    return (
        <div>
            <PageTitle title="Seja Bem Vindo/a!" />
            <h1 className="text-center text-2xl ">Seja Bem Vindo/a!</h1>
            <p className="py-8 text-center">
                Este estabelecimento sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className="py-4 text-center">
                <Link href='/search'>
                    <a className=" transition duration-300 text-white bg-blue-500 hover:bg-blue-400 border-b-4 border-blue-700 hover:border-blue-500 px-12 py-4 font-bold rounded-lg shadow-lg">Dar opinião ou sugestão</a>
                </Link>
            </div>

            {!data && <p className="py-8 text-center">Carregando</p>}

            {!error && data && data.showCoupon &&
                <p className="py-8 text-center">
                    {data.message}
                </p>
            }
        </div >
    )
}

export default Index