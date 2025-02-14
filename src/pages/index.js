import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ScrollToTop from '../components/ScrollToTop';
// import '../styles/animations.css'



// Custom hook to detect when an element is in view
function useInView(options) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.unobserve(entry.target); // animate only once
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref, options]);

    return [ref, inView];
}

export default function Home() {
    // Create refs and inView states for each section
    const [homeRef, homeInView] = useInView({ threshold: 0.5 });
    const [aboutRef, aboutInView] = useInView({ threshold: 0.2 });
    const [servicesRef, servicesInView] = useInView({ threshold: 0.5 });
    const [experienceRef, experienceInView] = useInView({ threshold: 0.5 });
    const [educationRef, educationInView] = useInView({ threshold: 0.5 });
    const [contactRef, contactInView] = useInView({ threshold: 0.5 });

    // Inline style function for animation
    const animationStyle = (inView) => ({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
    });

    return (


        <
        div >
        <
        Head >
        <
        title > Simeneh Tadesse Portfolio < /title> <
        meta name = "description"
        content = "Simeneh Tadesse - Business Consultant & Export Manager" / >
        <
        /Head> <SEO 
        title = "Simeneh Tadesse | Business Consultant & Export Manager"
        description = "Simeneh Tadesse - Business Consultant & Export Manager with expertise in business planning, import/export operations, and strategic management."
        image = "https://simeneh.vercel.app/og-image.jpg" // Placeholder image
        /
        >
        <
        Header / >


        <
        section id = "home"
        ref = { homeRef }
        style = { animationStyle(homeInView) }
        className = "flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-400 to-purple-500 dark:from-gray-800 dark:to-gray-900 text-white text-center px-4 py-20" > { /* Left Side - Text and Cards */ } <
        div className = "w-full md:w-1/2" >
        <
        h1 className = "animate-typing text-4xl md:text-5xl font-bold border-r-4 border-white pr-4" >
        I am Simeneh Tadesse, Import - Export Expert <
        /h1>

        <
        div className = "flex flex-col space-y-4 mt-6" > { /* Card 1 */ } <
        div className = "bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-blue-600" >
        <
        p className = "text-lg md:text-2xl" >
        Expert in Business & Import - Export Management, transforming global trade through strategic leadership. <
        /p> < /
        div >

        { /* Card 2 */ } <
        div className = "bg-purple-500 text-white py-2 px-4 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-purple-600" >
        <
        p className = "text-lg md:text-2xl" >
        Seasoned international business consultant &
        export management specialist with 20 + years of experience optimizing cross - border trade operations. <
        /p> < /
        div >

        { /* Card 3 */ } <
        div className = "bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-indigo-600" >
        <
        p className = "text-lg md:text-2xl" >
        Developing market entry strategies and driving sustainable business growth across Africa and global markets. <
        /p> < /
        div > <
        /div>

        { /* Buttons */ } <
        div className = "flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8" >
        <
        a href = "#experience"
        className = "bg-white text-blue-500 py-2 px-4 rounded-full shadow-sm hover:bg-gray-100 transition-transform transform hover:scale-105 font-semibold text-lg" >
        View My Career Journey <
        /a> <
        a href = "#contact"
        className = "bg-white text-blue-500 py-2 px-4 rounded-full shadow-sm hover:bg-gray-100 transition-transform transform hover:scale-105 font-semibold text-lg" >
        Schedule Consultation <
        /a> < /
        div > <
        /div>

        { /* Right Side - Animated Image */ } <
        div className = "w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0" >
        <
        img src = "/img/sss.jpg"
        alt = "Simeneh Tadesse"
        className = "w-72 h-72 md:w-96 md:h-96 object-cover rounded-lg shadow-xl transform transition-all duration-700 ease-in-out hover:scale-110 hover:rotate-3 animate-fade-in" /
        >
        <
        /div> < /
        section >



        <
        section id = "about"
        ref = { aboutRef }
        style = { animationStyle(aboutInView) }
        className = "py-20 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 px-4 text-gray-700 dark:text-gray-300" >
        <
        div className = "max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0" > { /* Image */ } <
        img src = "/img/s.jpg"
        alt = "Simeneh Tadesse"
        className = "w-48 h-48 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8 transform transition-all duration-500 hover:scale-110 hover:shadow-xl" /
        >

        { /* Text Content */ } <
        div className = "flex-1" >
        <
        h2 className = "text-3xl font-bold text-blue-600 dark:text-blue-400 transition duration-300 hover:text-blue-800 dark:hover:text-blue-300 relative" >
        Simeneh Tadesse <
        div className = "absolute left-0 right-0 bottom-0 h-1 bg-blue-500 transform scale-x-0 transition-transform duration-500 origin-left hover:scale-x-100" > < /div> < /
        h2 > <
        p className = "mt-2 text-lg" >
        As a seasoned
        import -
        export manager, I bring a wealth of experience in business management and international trade.With a keen eye
        for strategy and a deep understanding of market dynamics, I craft forward - thinking solutions that streamline global supply chains, enhance operational efficiency, and foster sustainable growth across diverse industries. <
        /p> <
        p className = "mt-4 text-lg" >
        With over 17 years of experience as an
        import -
        export manager and consultant, I have successfully led business operations across diverse industries, specializing in international trade, market expansion, and strategic management. <
        /p>

        { /* Download CV Button */ } <
        div className = "mt-6" >
        <
        a href = "/img/simcv.pdf" // Replace with the actual path to your CV
        download className = "inline-block px-6 py-2 mt-4 text-white bg-blue-600 hover:bg-blue-800 rounded-lg transition duration-300" >
        Download My CV <
        /a> < /
        div > <
        /div> < /
        div >

        { /* Career Highlights */ } <
        div className = "mt-10" >
        <
        h3 className = "text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4 text-center" >
        My Career Highlights:
        <
        /h3> <
        ul className = "grid grid-cols-1 md:grid-cols-2 gap-6" > {
            [
                { text: "17+ Years in Export Leadership", icon: "M3 12l2 2 4-4m10 4l-2-2-4 4M12 4v16" },
                { text: "Over $100 Million in Trade Volume Managed", icon: "M3 12l2 2 4-4m10 4l-2-2-4 4M12 4v16" },
                { text: "Expansive Reach Across African Markets", icon: "M3 12l2 2 4-4m10 4l-2-2-4 4M12 4v16" },
                { text: "Built Strong International Partnerships", icon: "M3 12l2 2 4-4m10 4l-2-2-4 4M12 4v16" },
            ].map((item, index) => ( <
                li key = { index }
                className = "flex items-center bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 cursor-pointer" >
                <
                span className = "text-blue-500 mr-2" >
                <
                svg className = "w-5 h-5 inline-block"
                fill = "none"
                viewBox = "0 0 24 24"
                stroke = "currentColor" >
                <
                path strokeLinecap = "round"
                strokeLinejoin = "round"
                strokeWidth = { 2 }
                d = { item.icon }
                /> < /
                svg > <
                /span> { item.text } < /
                li >
            ))
        } <
        /ul> < /
        div > <
        /section>



        { /* Services Section */ } <
        section id = "services"
        ref = { servicesRef }
        style = { animationStyle(servicesInView) }
        className = "py-20 bg-gray-100 dark:bg-gray-800 px-4 text-gray-700 dark:text-gray-300" >
        <
        div className = "max-w-4xl mx-auto" >
        <
        h2 className = "text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400" >
        Services <
        /h2> <
        div className = "grid md:grid-cols-2 gap-8" >

        { /* Service 1 */ } <
        div className = "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105" >
        <
        h3 className = "text-xl font-semibold text-gray-800 dark:text-white" > ★Business Plan Maker & Consultant <
        /h3> <
        p className = "mt-2 text-gray-600 dark:text-gray-300" >
        Providing expert business planning services to startups and established companies. <
        /p> < /
        div >

        { /* Service 2 */ } <
        div className = "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105" >
        <
        h3 className = "text-xl font-semibold text-gray-800 dark:text-white" > ★Import & Export Operations Consultant <
        /h3> <
        p className = "mt-2 text-gray-600 dark:text-gray-300" >
        Guiding businesses through efficient international trade strategies. <
        /p> < /
        div >

        { /* Service 3 */ } <
        div className = "bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105" >
        <
        h3 className = "text-2xl font-semibold text-gray-800 dark:text-white mb-4" >
        <
        span className = "text-blue-500" > ★ < /span> Comprehensive Trade Solutions < /
        h3 > <
        p className = "text-gray-600 dark:text-gray-300" >
        End - to - end management of international trade operations including:
        <
        /p> <
        ul className = "mt-3 pl-4 space-y-2" >
        <
        li className = "flex items-center" >
        <
        span className = "text-blue-500 mr-2" > › < /span> Customs compliance & documentation < /
        li > <
        li className = "flex items-center" >
        <
        span className = "text-blue-500 mr-2" > › < /span> Logistics optimization < /
        li > <
        li className = "flex items-center" >
        <
        span className = "text-blue-500 mr-2" > › < /span> Risk mitigation strategies < /
        li > <
        /ul> < /
        div >

        { /* Service 4 */ } <
        div className = "bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105" >
        <
        h3 className = "text-2xl font-semibold text-gray-800 dark:text-white mb-4" >
        <
        span className = "text-blue-500" > ★ < /span> Business Development Services < /
        h3 > <
        p className = "text-gray-600 dark:text-gray-300" >
        Strategic growth planning including:
        <
        /p> <
        ul className = "mt-3 pl-4 space-y-2" >
        <
        li className = "flex items-center" >
        <
        span className = "text-blue-500 mr-2" > › < /span> Market feasibility studies < /
        li > <
        li className = "flex items-center" >
        <
        span className = "text-blue-500 mr-2" > › < /span> Competitive analysis < /
        li > <
        li className = "flex items-center" >
        <
        span className = "text-blue-500 mr-2" > › < /span> Investment readiness preparation < /
        li > <
        /ul> < /
        div >

        { /* Service: From Local Fields to Global Trade */ } <
        div className = "bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105" >
        <
        h3 className = "text-2xl font-semibold text-gray-800 dark:text-white mb-4" >
        <
        span className = "text-blue-500" > ★ < /span> From Local Fields to Global Trade < /
        h3 > <
        p className = "text-gray-600 dark:text-gray-300" >
        Expert sourcing of
        export commodities including:
        <
        /p> <
        ul className = "mt-3 pl-4 space-y-2" >
        <
        li className = "flex items-center" >
        <
        span className = "text-blue-500 mr-2" > › < /span> Diverse commodity selection < /
        li > <
        li className = "flex items-center" >
        <
        span className = "text-blue-500 mr-2" > › < /span> Quality assurance processes < /
        li > <
        li className = "flex items-center" >
        <
        span className = "text-blue-500 mr-2" > › < /span> Strong local partnerships < /
        li > <
        li className = "flex items-center" >
        <
        span className = "text-blue-500 mr-2" > › < /span> Streamlined logistics management < /
        li > <
        li className = "flex items-center" >
        <
        span className = "text-blue-500 mr-2" > › < /span> Regulatory compliance expertise < /
        li > <
        li className = "flex items-center" >
        <
        span className = "text-blue-500 mr-2" > › < /span> Customized sourcing solutions < /
        li > <
        /ul> < /
        div >

        <
        /div> < /
        div > <
        /section>



        { /* Experience Section */ } <
        section id = "experience"
        ref = { experienceRef }
        style = { animationStyle(experienceInView) }
        className = "py-20 bg-gray-100 dark:bg-gray-800 px-4 text-gray-700 dark:text-gray-300" >
        <
        div className = "max-w-4xl mx-auto" >
        <
        h2 className = "text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400" >
        Experience <
        /h2>

        <
        div className = "grid grid-cols-1 md:grid-cols-2 gap-8" > {
            [
                { year: '1999 G.C', role: 'Animal Health Assistant, North Shoa' },
                { year: '2003 G.C', role: 'Animal Health Technician, Ministry of Agriculture TEVT College' },
                { year: '2005 G.C', role: 'Veterinary Drugs Store Manager, Agricultural Inputs Supply Enterprise' },
                { year: '2007 G.C', role: 'Import & Export Manager, Birhanu Nigussie Import Exports PLC' },
                { year: '2013 G.C', role: 'Export Operations Manager, Ginchi Trading PLC' },
                { year: '2016 G.C', role: 'Export Manager & Consultant, Agaz General Trading PLC' },
                { year: '2018 G.C', role: 'Export Manager, Gasco Trading PLC' },
                { year: '2020 G.C', role: 'Import & Export Manager, Getu Tefera Import Export' },
                { year: '2020 G.C - Present', role: 'General Manager, S.J. Magdalinos Import Export PLC' }
            ].map((job, index) => ( <
                div key = { index }
                className = "bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 transition-all transform hover:scale-105 hover:shadow-2xl" >
                <
                span className = "font-bold text-blue-600 dark:text-blue-400 block text-lg" > { job.year } <
                /span> <
                span className = "text-gray-700 dark:text-gray-200" > { job.role } < /span> < /
                div >
            ))
        } <
        /div> < /
        div > <
        /section>


        { /* Education Section */ } <
        section id = "education"
        ref = { educationRef }
        style = { animationStyle(educationInView) }
        className = "py-20 bg-gray-100 dark:bg-gray-800 px-4 text-gray-700 dark:text-gray-300" >
        <
        div className = "max-w-4xl mx-auto" >
        <
        h2 className = "text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400" >
        Education <
        /h2> <
        div className = "grid md:grid-cols-2 gap-8" > { /* Degree 1 */ } <
        div className = "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300" >
        <
        h3 className = "text-2xl font-semibold text-gray-800 dark:text-gray-200" >
        Diploma in Animal Health <
        /h3> <
        p className = "mt-2 text-gray-600 dark:text-gray-300" >
        Addis Ababa University | 1996 - 1998 G.C <
        /p> < /
        div >

        { /* Degree 2 */ } <
        div className = "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300" >
        <
        h3 className = "text-2xl font-semibold text-gray-800 dark:text-gray-200" >
        Bahir Dar University <
        /h3> <
        p className = "mt-2 text-gray-600 dark:text-gray-300" >
        Management | 2008 - 2012 G.C <
        /p> < /
        div > <
        /div> < /
        div >

        { /* Academic Foundation Section */ } <
        div className = "max-w-6xl mx-auto mt-16" >
        <
        h2 className = "text-4xl font-bold text-center mb-16 text-blue-600 dark:text-blue-400" >
        Academic Foundation <
        /h2> <
        div className = "grid md:grid-cols-2 gap-10" > { /* Animal Health Expertise */ } <
        div className = "bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all" >
        <
        h3 className = "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2" >
        Animal Health Expertise <
        /h3> <
        p className = "text-lg text-blue-500 mb-3" > Addis Ababa University < /p> <
        p className = "text-gray-600 dark:text-gray-300 mb-4" > Core Competencies: < /p> <
        ul className = "space-y-2" >
        <
        li className = "flex items-center" >
        <
        span className = "text-blue-500 mr-2" > ▸ < /span> Veterinary Pharmacology < /
        li > <
        li className = "flex items-center" >
        <
        span className = "text-blue-500 mr-2" > ▸ < /span> Livestock Management < /
        li > <
        /ul> < /
        div >

        { /* Business Leadership */ } <
        div className = "bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all" >
        <
        h3 className = "text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2" >
        Business Leadership <
        /h3> <
        p className = "text-lg text-blue-500 mb-3" > Bahir Dar University < /p> <
        p className = "text-gray-600 dark:text-gray-300 mb-4" > Key Focus Areas: < /p> <
        ul className = "space-y-2" >
        <
        li className = "flex items-center" >
        <
        span className = "text-blue-500 mr-2" > ▸ < /span> Strategic Planning < /
        li > <
        li className = "flex items-center" >
        <
        span className = "text-blue-500 mr-2" > ▸ < /span> International Trade Law < /
        li > <
        /ul> < /
        div > <
        /div> < /
        div > <
        /section>


        { /* Contact Section */ } <
        section id = "contact"
        ref = { contactRef }
        style = { animationStyle(contactInView) }
        className = "py-20 px-4 text-center bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 text-white relative overflow-hidden" >
        <
        div className = "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" >
        <
        div className = "absolute w-16 h-16 bg-white opacity-10 rounded-full top-10 left-10" / >
        <
        div className = "absolute w-20 h-20 bg-white opacity-10 rounded-full bottom-10 right-10" / >
        <
        /div> <
        h2 className = "text-4xl font-extrabold mb-6" > Get in Touch < /h2> <
        p className = "text-lg mb-6 opacity-90" >
        Let 's connect and grow together! Reach out on LinkedIn. < /
        p > <
        a href = "https://www.linkedin.com/in/simeneh-tadesse-20011b68/"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "inline-flex items-center px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-100 cursor-pointer border-2 border-transparent hover:border-white" >
        <
        svg className = "w-6 h-6 mr-2"
        fill = "currentColor"
        viewBox = "0 0 24 24" >
        <
        path fillRule = "evenodd"
        d = "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-3.36-4-3.1-4 0v5.6h-3v-10h3v1.5c1.4-2.59 7-2.78 7 2.47v6.03z" /
        >
        <
        /svg>
        LinkedIn <
        /a> <
        div className = "mt-6 flex justify-center" >
        <
        a href = "https://web.facebook.com/simeneh.tadesse.7?locale=bg_BG"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "flex items-center text-white hover:underline mr-4" >
        <
        svg className = "w-6 h-6 mr-1"
        fill = "currentColor"
        viewBox = "0 0 24 24" >
        <
        path d = "M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35C23.4 24 24 23.4 24 22.675v-21.35C24 .6 23.4 0 22.675 0zm-5.775 12.225h-2.25v9h-3v-9h-1.5v-2.25h1.5V8.475c0-1.125.225-1.875 1.5-1.875h1.5v2.25h-1.125c-.375 0-.75.375-.75.75v1.5h2.25l-.375 2.25z" / >
        <
        /svg>
        Facebook <
        /a> <
        a href = "https://www.instagram.com/tadesse.simeneh/"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "flex items-center text-white hover:underline" >
        <
        svg className = "w-6 h-6 mr-1"
        fill = "currentColor"
        viewBox = "0 0 24 24" >
        <
        path d = "M12 0c-3.313 0-3.75.012-5.06.073C5.121.14 4.233.314 3.515.636a6.513 6.513 0 0 0-2.825 2.825C.314 4.233.14 5.121.073 6.94 0 8.25 0 8.687 0 12s.012 3.75.073 5.06c.067 1.819.241 2.707.636 3.515a6.513 6.513 0 0 0 2.825 2.825c.808.322 1.696.496 3.515.636 1.31.061 1.747.073 5.06.073s3.75-.012 5.06-.073c1.819-.14 2.707-.314 3.515-.636a6.513 6.513 0 0 0 2.825-2.825c.322-.808.496-1.696.636-3.515.061-1.31.073-1.747.073-5.06s-.012-3.75-.073-5.06c-.14-1.819-.314-2.707-.636-3.515a6.513 6.513 0 0 0-2.825-2.825C18.233.314 17.345.14 16.627.073 15.318.012 14.882 0 12 0zm0 2.834c3.092 0 3.465.012 4.688.067 1.167.055 1.84.243 2.274.41a4.686 4.686 0 0 1 1.633 1.633c.167.434.355 1.107.41 2.274.055 1.223.067 1.596.067 4.688s-.012 3.465-.067 4.688c-.055 1.167-.243 1.84-.41 2.274a4.686 4.686 0 0 1-1.633 1.633c-.434.167-1.107.355-2.274.41-1.223.055-1.596.067-4.688.067s-3.465-.012-4.688-.067c-1.167-.055-1.84-.243-2.274-.41a4.686 4.686 0 0 1-1.633-1.633c-.167-.434-.355-1.107-.41-2.274C2.834 15.465 2.822 15.092 2.822 12c0-3.092.012-3.465.067-4.688.055-1.167.243-1.84.41-2.274a4.686 4.686 0 0 1 1.633-1.633C5.11 2.834 5.99 2.546 7.157 2.491 8.378 2.434 8.75 2.834 12 2.834zm0 5.895a6.103 6.103 0 1 0 0 12.206 6.103 6.103 0 0 0 0-12.206zm0 10.206a4.103 4.103 0 1 1 0-8.206 4.103 4.103 0 0 1 0 8.206zm6.192-10.831c-.8 0-1.445-.645-1.445-1.445s.645-1.445 1.445-1.445 1.445.645 1.445 1.445-.645 1.445-1.445 1.445z" / >
        <
        /svg>
        Instagram <
        /a> < /
        div > <
        p className = "mt-4 flex items-center justify-center" >
        <
        svg className = "w-6 h-6 mr-2"
        fill = "currentColor"
        viewBox = "0 0 24 24" >
        <
        path d = "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a7.999 7.999 0 0 1-8-8 7.999 7.999 0 0 1 8-8 7.999 7.999 0 0 1 8-8zm1-13h-2v2H9v2h2v5h2v-5h2V9h-2V7z" / >
        <
        /svg>
        Email: < a href = "mailto:simenehtadesse171@gmail.com"
        className = "text-white hover:underline" > simenehtadesse171 @gmail.com < /a> < /
        p > <
        p className = "mt-2 flex items-center justify-center" >
        <
        svg className = "w-6 h-6 mr-2"
        fill = "currentColor"
        viewBox = "0 0 24 24" >
        <
        path d = "M3 3h18v18H3V3zm10 10h-4v4h4v-4zm0-8h-4v4h4V5z" / >
        <
        /svg>
        Phone: < span className = "text-white" > +251 - 935 - 975917 < /span> < /
        p > <
        /section>

        <
        Footer / >
        <
        ScrollToTop / >
        <
        /div>
    );
}