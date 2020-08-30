import React from 'react'
import Head from 'next/head'

import Navbar from '../navigation/Navbar.component'
import Footer from '../navigation/Footer.component'

const BaseLayout = ({ children, title = "Auto Iordache" }) => {
    return (
        <div className="relative overflow-hidden">
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <div className="base-layout-children-container">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default BaseLayout