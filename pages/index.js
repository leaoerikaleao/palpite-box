import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

// função padrão do navegador 
//const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    /* 
        // URL para buscar os dados e método como ele vai buscar
        const { data, error } = useSWR('/api/get-promo', fetcher)
        //return (<pre>{JSON.stringify(data)}</pre>) */

    return (
        <div>
            <PageTitle title="Seja Bem Vindo/a!" />
            <p className="mt-12 text-center">O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className="text-center my-12">
                <Link href='/search'>
                    <a className="bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow">Dar opinião ou sugestão</a>
                </Link>
            </div>
            {/* 
            {!data && <p>Carregando</p>}

            {!error && data && data.showCoupon &&
                <p className="my-12 text-center">
                    {data.message}
                </p>
            } */}
        </div>
    )
}

export default Index