import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

//o elemento children carrega o conteúdo das páginas
const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container mx-auto">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout   