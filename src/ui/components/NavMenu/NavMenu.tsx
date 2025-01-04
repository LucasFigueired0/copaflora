import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type NavMenuProps = {
    pages: string[];
    anchorEl: null | HTMLElement;
    handleClose: () => void;
    handleOpen: (event: React.MouseEvent<HTMLElement>) => void;
};

export const NavMenu: React.FC<NavMenuProps> = ({ pages, anchorEl, handleClose, handleOpen }) => (
    <>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleClose}>
                        <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Button key={page} onClick={handleClose} sx={{ my: 2, color: 'white', display: 'block' }}>
                    {page}
                </Button>
            ))}
        </Box>
    </>
);
