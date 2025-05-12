import React,{useState,useEffect} from 'react'
import { navLinks } from '../constants/index'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll = () =>{
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }

        window.addEventListener('scroll',handleScroll);

        return () => window.removeEventListener('scroll',handleScroll)
    },[])

  return (
    <header 
    className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className="inner">
            <a href="#hero" className="logo">
                Sarthak 
            </a>
            <nav className="desktop">
                <ul className="">
                    {navLinks.map(( { link,name })=>(
                        <li key={name} className="group">
                            <a href={link} className="">
                                <span className="">
                                    {name}
                                </span>
                                <span className='underline' />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <a href="#contact" className="contact-btn group">
                <div className="inner">
                    <span className="">Contact <menu type="toolbar"></menu></span>
                </div>
            </a>


        </div>
    </header>
  )
}

export default Navbar
