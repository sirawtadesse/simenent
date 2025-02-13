import { useState, useEffect } from 'react'

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        visible && ( <
            div className = "fixed bottom-6 right-6" >
            <
            button onClick = { scrollToTop }
            className = "p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition transform hover:scale-110" > ↑
            <
            /button> < /
            div >
        )
    )
}

export default ScrollToTop