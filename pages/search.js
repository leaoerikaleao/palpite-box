import React from 'react'
import Link from 'next/link'

const Search = () => {
    return (
        <div className="pt-6">
            <h1 className="text-center font-bold my-4 text-4x1">Críticas e sugestões</h1>
            <p className="text-center mb-6">
                O restaurante X sempre busca por atender melhor seus clientes. <br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className="w-1/5 mx-auto">
                <label className="font-bold">Seu nome:</label>
                <input className="p-4 block shadow bg-blue-100 my-2 rounded" type="text" />
            </div>
        </div>
    )
}

export default Search