import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

import Navbar from '../navigation/Navbar.component'
import Footer from '../navigation/Footer.component'

const BaseLayout = ({ children, title = "Auto Iordache" }) => {
    return (
        <motion.div exit={{ opacity: 0 }} className="relative overflow-hidden">
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <div  className="base-layout-children-container">
                {children}
            </div>
            <Footer />
        </motion.div>
    )
}

export default BaseLayout