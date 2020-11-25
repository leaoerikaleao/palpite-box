import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contact = () => {
    return (
        <div className="px-24">
            <PageTitle title="Contato" />
            <h1 className="text-center text-2xl ">Contato</h1>
            <p className="py-8 text-center">
                Entre em contato com nosso estabelecimento para fazer seu pedido.
            </p>

            <div className="py-4 text-center">
                <Link href='https://api.whatsapp.com/send?phone=TELEFONEDAEMPRESA&text=Ol%C3%A1,%20eu%20gostaria%20de%20fazer%20um%20pedido!&fbclid=IwAR0ebNw20hsFnYzfqI1iPDgTlXfZiS1WiM7cAhU2ioJBfbwFGVKfq_dmApI'>
                    <a className=" transition duration-300 text-white bg-blue-500 hover:bg-blue-400 border-b-4 border-blue-700 hover:border-blue-500 px-12 py-4 font-bold rounded-lg shadow-lg">Enviar Mensagem</a>
                </Link>
            </div>
        </div>
    )
}

export default Contact