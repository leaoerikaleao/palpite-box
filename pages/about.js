import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const About = () => {
    return (
        <div className="px-24"> 
            <PageTitle title="Sobre" />
            <h1 className="text-center text-2xl ">Sobre o Estabelecimento</h1>
            <p className="py-8 px-24 text-center">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            </p>

            <div>
                <a><img className="mx-auto" src='https://picsum.photos/400/300' alt="Imagem do Estabelecimento" /></a>
            </div>

        </div>

    )
}

export default About