import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { motion } from 'framer-motion'

import { PulseOnTap } from '../ui'

const mobileMenuVariants = {
    show: () => ({
        y: -18, opacity: 1
    }),
    hidden: () => ({
        y: -200, opacity: 0
    })
}

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const router = useRouter()

    const menuItems = [
        {
            href: '/',
            label: 'Acasa'
        },
        {
            href: '/galerie',
            label: 'Galerie'
        },
        {
            href: '/blog',
            label: 'Blog'
        },
        {
            href: '/contact',
            label: 'Contact'
        },
        {
            href: '/intrebari-frecvente',
            label: 'FAQ'
        }
    ]

    const getMenuItems = (className, isMobile) => {
        const activeMenuItemClasses = isMobile ? 'text-white border-b-4 border-white' : 'text-white lg:text-white border-b-4 border-white lg:border-white'

        return menuItems.map((menuItem, index) => {
            const menuItemIsActive = router.pathname == menuItem.href

            return <PulseOnTap key={menuItem.href}>
                <li className={`${index == menuItems.length - 1 ? '' : className}`}>
                    <Link href={menuItem.href}><a className={`${menuItemIsActive ? activeMenuItemClasses : 'text-white'}`}>{menuItem.label}</a></Link>
                </li>
            </PulseOnTap>
        })
    }

    return (
        <nav className='flex justify-between py-4 lg:py-6 px-4 md:px-24 w-full bg-main'>
            <div className="logo-container">
                <Link href="/"><img src="/assets/images/logo_auto_iordache_white.png" alt="Logo Auto Iordache" className="w-full cursor-pointer"/></Link>
            </div>
            <ul className='hidden md:flex md:items-center text-xl text-text-color'>
                {getMenuItems("mr-6", false)}
            </ul>
            <div className="md:hidden">
                <p className="text-xl cursor-pointer text-white" onClick={() => setShowMenu(!showMenu)}>Meniu</p>
                <div className="md:hidden relative z-20">
                    <motion.ul
                        variants={mobileMenuVariants}
                        initial={showMenu ? 'show' : 'hidden'}
                        animate={showMenu ? 'show' : 'hidden'}
                        className="mt-6 px-8 pt-4 pb-6 flex flex-col absolute text-text-color bg-main rounded-bl-lg"
                        style={{ right: -26, top: -2, ...showMenu ? {} : { display: 'none' } }}>
                        {getMenuItems("mb-6", true)}
                    </motion.ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar