import { useEffect, useState } from 'react';
import './Logo.styles.scss'
import { LogoProp } from './Logo.types'

export function Logo({linkImg, altImg}:LogoProp){

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className={`copaflora-icon ${isScrolled ? 'small' : ''}`}>
            <img src={linkImg} alt={altImg} />
        </div>
    )
}