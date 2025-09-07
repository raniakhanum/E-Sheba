import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Application', 'History'];
const navIds: string[] = ['Home', 'About', 'Application', 'History','Login', 'SignUp'];
const drawerItems = ['Home', 'About', 'Application', 'History','Login', 'SignUp'];

export default function DrawerAppBar(props: Props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleNavClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img src="/logo.png" alt="Logo" className='mx-auto h-5! drop-shadow-xs drop-shadow-black' />
            </Typography>
            <Divider />
            <List>
                {drawerItems.map((item, idx) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavClick(navIds[idx])}>
                            <ListItemText primary={
                                <Typography sx={{ fontSize: '14px' }}>
                                    {item}
                                </Typography>
                            } />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar component="nav" className="max-w-9xl pt-2 mx-auto px-0 md:px-20  bg-[var(--lightBlue)]! shadow-none!">
                <Toolbar className=''>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, }}
                    >
                        <img src="/logo.png" alt="Logo" className='h-8! drop-shadow-xs drop-shadow-black' />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                        {navItems.map((item, idx) => (
                            <Button key={item} sx={{ color: '#6198e1' }} onClick={() => handleNavClick(navIds[idx])} className="group mx-3">
                                <Typography sx={{ fontSize: '14px' }} className='capitalize p-1 mx-2 text-[var(--darkBlue)] duration-300'>
                                    {item}
                                    <div className="bg-[var(--darkBlue)] h-[2px] w-0 transition-all duration-500 group-hover:w-full"></div>
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                    <Button sx={{ display: { xs: 'none', lg: 'block' } }} variant="outlined" className='rounded-full! me-3! border-[var(--darkBlue)]! hover:bg-[var(--darkBlue)]!'>
                        <Typography sx={{ fontSize: '14px' }} className='text-[var(--darkBlue)] capitalize! duration-300!  hover:text-white!'>
                            Login
                        </Typography>
                    </Button>
                    <Button sx={{ display: { xs: 'none', lg: 'block' } }} variant="outlined" className='rounded-full! hover:bg-[var(--lightBlue)]! border-[var(--darkBlue)]! bg-[var(--darkBlue)]!'>
                        <Typography sx={{ fontSize: '14px' }} className='capitalize! duration-300! text-white! hover:text-[var(--darkBlue)]! '>
                            SignUp
                        </Typography>
                    </Button>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}