// Importe os tipos necessários
import type { HeaderProps } from "./Header.types";
import './Header.styles.scss';

import { useEffect, useState } from 'react';

export function Header({ children }: HeaderProps) {
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

    return (
        <header className={`copaflora__header ${isScrolled ? 'small' : ''}`}>
            {children}
        </header>
    );
}
