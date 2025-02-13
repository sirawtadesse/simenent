import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

const Header = () => {
    const [open, setOpen] = useState(false)
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const navItems = ['home', 'about', 'services', 'experience', 'education', 'contact']

    return ( <
        motion.header initial = {
            { y: -50, opacity: 0 }
        }
        animate = {
            { y: 0, opacity: 1 }
        }
        transition = {
            { duration: 0.5 }
        }
        className = "fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50" >
        <
        div className = "max-w-7xl mx-auto px-4 py-4 flex justify-between items-center" >
        <
        h1 className = "flex items-center text-xl font-bold text-gray-800 dark:text-white" >
        <
        img src = "/img/logo.png"
        alt = "Logo"
        className = "w-8 h-8 mr-2" / >
        Simeneh Tadesse <
        /h1>

        <
        nav className = "md:block hidden" >
        <
        ul className = "flex space-x-6" > {
            navItems.map((section) => ( <
                li key = { section } >
                <
                Link href = { `#${section}` } >
                <
                a className = "py-2 hover:text-blue-500 transition-colors duration-300 dark:text-gray-300" > { section.charAt(0).toUpperCase() + section.slice(1) } <
                /a> < /
                Link > <
                /li>
            ))
        } <
        /ul> < /
        nav >

        <
        div className = "flex items-center space-x-4" >
        <
        button onClick = {
            () => setTheme(theme === 'dark' ? 'light' : 'dark')
        }
        className = "bg-gray-200 dark:bg-gray-700 p-2 rounded-full focus:outline-none" > {
            theme === 'dark' ? ( <
                svg className = "w-5 h-5 text-yellow-500"
                fill = "currentColor"
                viewBox = "0 0 20 20" >
                <
                path d = "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" / >
                <
                /svg>
            ) : ( <
                svg className = "w-5 h-5 text-gray-800"
                fill = "currentColor"
                viewBox = "0 0 20 20" >
                <
                path d = "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" / >
                <
                /svg>
            )
        } <
        /button>

        <
        button className = "md:hidden focus:outline-none text-gray-800 dark:text-white"
        onClick = {
            () => setOpen(!open)
        } >
        <
        svg className = "w-6 h-6"
        fill = "none"
        stroke = "currentColor" >
        <
        path strokeLinecap = "round"
        strokeLinejoin = "round"
        strokeWidth = { 2 }
        d = { open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16" }
        /> < /
        svg > <
        /button> < /
        div > <
        /div>

        { /* Mobile Menu */ } <
        div className = { `md:hidden ${open ? 'block' : 'hidden'}` } >
        <
        ul className = "bg-white dark:bg-gray-900 px-4 py-2 space-y-4" > {
            navItems.map((section) => ( <
                li key = { section } >
                <
                Link href = { `#${section}` } >
                <
                a className = "block py-2 hover:text-blue-500 transition-colors duration-300 dark:text-gray-300"
                onClick = {
                    () => setOpen(false)
                } > { section.charAt(0).toUpperCase() + section.slice(1) } <
                /a> < /
                Link > <
                /li>
            ))
        } <
        /ul> < /
        div > <
        /motion.header>
    )
}

export default Header