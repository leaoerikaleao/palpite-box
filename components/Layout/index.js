import React from 'react'
import Footer from '../Footer'
import Header from '../Header'


//o elemento children carrega o conteúdo das páginas
const Layout = ({ children }) => {
    return (
        <div className="body text-lg flex flex-col min-h-screen ">
            <Header />
            <div className="container mx-auto flex-grow p-12">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout   