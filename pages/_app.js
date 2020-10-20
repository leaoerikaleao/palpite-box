import React from 'react'
import Layout from '../components/Layout'
import '../css/styles.css'
import '../css/costum.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp