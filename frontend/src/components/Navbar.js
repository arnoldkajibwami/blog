import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { BiPaperPlane } from 'react-icons/bi';
import { BiLogIn } from 'react-icons/bi';
import { BiLogOut } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { userLogoutAction } from '../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { BiRegistered } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';


// const pages = ['Home', 'Log In'];
const pages = ['Articles', 'About', 'Contact',];

const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector(state => state.signIn)

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // log out user
    const logOutUser = () => {
        dispatch(userLogoutAction());
        window.location.reload(true);
        setTimeout(() => {
            navigate('/');
        }, 500)
    }


    return (
        <AppBar position="static" className='bg-dark'>
            <Container >
                {/* principal Menu */}
                <Toolbar disableGutters>
                    <div id='tonone'>
                        <BiPaperPlane sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    </div>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
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
                        BLOG
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <div id='tonone1'>
                        <BiPaperPlane sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    </div>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        BLOG
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/* menu desktop */}

                        <Typography
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block', mr: 2 }}>
                            <Link to="/" style={{ color: 'white', textDecoration: "none" }}>
                                Articles
                            </Link>
                        </Typography>

                        <Typography
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to="/about" style={{ marginLeft: '20px', color: 'white', textDecoration: "none" }}>
                                About
                            </Link>
                        </Typography>
                        {/* <Typography
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to="/articles" style={{ marginLeft: '20px', color: 'white', textDecoration: "none" }}>
                                Articles
                            </Link>
                        </Typography> */}

                        <Typography
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to="/contact" style={{ marginLeft: '20px', color: 'white', textDecoration: "none" }}>
                                Contact
                            </Link>
                        </Typography>

                    </Box>


                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <BiUser alt="Remy Sharp" src="" style={{ color: "white" }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            PaperProps={{
                                sx: {
                                    "& 	.MuiMenu-list": {
                                        bgcolor: "primary.white",
                                        color: "white"
                                    },
                                }
                            }}

                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                            <MenuItem onClick={handleCloseUserMenu} style={{ display: "none" }}>
                                <Typography textAlign="center"><Link style={{ textDecoration: "none" }} to="/admin/dashboard">Admin </Link></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu} style={{ display: "none" }}>
                                <Typography textAlign="center"><Link style={{ textDecoration: "none" }} to="/user/dashboard">User </Link></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" color='#8e67b2'><Link style={{ textDecoration: "none" }} to="/register" ><BiRegistered /> Register</Link></Typography>
                            </MenuItem>
                            {
                                userInfo ?
                                    <MenuItem onClick={logOutUser}>
                                        <Typography textAlign="center" color='#8e67b2'> <BiLogOut alt="Remy Sharp" src="" /> Log Out </Typography>
                                    </MenuItem>
                                    :
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center"><Link style={{ textDecoration: "none" }} to="/login"> <BiLogIn alt="Remy Sharp" src="" />Login </Link></Typography>
                                    </MenuItem>
                            }

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;