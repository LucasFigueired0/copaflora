import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Logo } from '../Logo';
import { SearchBar } from '../SearchBar';
import { NavMenu } from '../NavMenu';
import { UserMenu } from '../UserMenu';


const pages = ['Home', 'Contato', 'Blog'];
const settings = ['Perfil', 'Conta','Sair'];

export const Navbar: React.FC = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
 
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

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
        <AppBar 
        position={`${isScrolled ? 'fixed':'relative'}`} 
        sx={{ background: '#369D72' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Logo linkImg="/logo.png" altImg="logo da copaflora" />
                    </Typography>
                    <SearchBar />
                    <NavMenu
                        pages={pages}
                        anchorEl={anchorElNav}
                        handleClose={handleCloseNavMenu}
                        handleOpen={handleOpenNavMenu}
                    />
                    <UserMenu
                        anchorElUser={anchorElUser}
                        handleOpenUserMenu={handleOpenUserMenu}
                        settings={settings}
                        handleCloseUserMenu={handleCloseUserMenu}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
