import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'

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
        const activeMenuItemClasses =  isMobile ? 'text-main border-b-2 border-main' : 'text-white lg:text-main border-b-2 border-white lg:border-main'

        return menuItems.map((menuItem, index) => {
            const menuItemIsActive = router.pathname == menuItem.href

            return <li 
                key={menuItem.href}
                className={`${index == menuItems.length - 1 ? '' : className}`}>
                <Link href={menuItem.href}><a className={`${menuItemIsActive ? activeMenuItemClasses : ''}`}>{menuItem.label}</a></Link>
            </li>
        })
    }

    return (
        <nav className='flex justify-between py-4 lg:py-6 px-4 md:px-24 w-full'>
            <div>
                <Link href="/"><h3 className="text-2xl font-bold cursor-pointer">Auto Iordache</h3></Link>
            </div>
            <ul className='hidden md:flex md:items-center text-xl text-text-color'>
                {getMenuItems("mr-6", false)}
            </ul>
            <div className="md:hidden">
                <p className="text-xl cursor-pointer" onClick={() => setShowMenu(!showMenu)}>Meniu</p>
                <div className="md:hidden relative z-20">
                    <ul
                        className="mt-6 p-6 pt-0 flex flex-col absolute text-text-color bg-white rounded-bl-lg"
                        style={{ right: -26, top: -2, ...showMenu ? {} : { display: 'none' }}}>
                        {getMenuItems("mb-4", true)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar