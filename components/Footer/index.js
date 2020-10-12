import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gray-700 p-4">
            <div className="container mx-auto text-center font-bold text-white">
                Projeto desenvolvido por: {' '}
                <a className="hover:underline" href="#">Erika Leão</a> /
                <a className="hover:underline" href="linkedin.com/in/erika-leão-00969356"> Linkedin</a>/
                <a className="hover:underline" href="https://github.com/leaoerikaleao"> Github</a>/
                <div className="mt-2">
                    <img className="inline p-4" src="/logo_semana_fsm.png" alt="Logo Full Stack Master" />
                    <img className="inline p-4" src="/logo_devpleno.png" alt="Logo Dev Pleno" />
                </div>
            </div>
        </div>
    )
}

export default Footer