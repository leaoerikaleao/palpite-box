import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <h1>Olá Full Stack Master</h1>
            <div>
                <Link href='/about'>
                    <a>About</a>
                </Link>
                <Link href='/contact'>
                    <a>Contato</a>
                </Link>
                <Link href='/search'>
                    <a>Pesquisa</a>
                </Link>
            </div>
        </div>
    )
}

export default Index