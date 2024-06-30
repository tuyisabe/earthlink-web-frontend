import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/images/logo.png';
import { makeStyles } from '@mui/styles';
import styles from './styles/headerStyles.js';

const drawerWidth = 240;
const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Services', link: '' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' }
];
const serviceItems = [
  { name: 'EarthLink overseas education', link: '/services' },
  { name: 'EarthLink travels and tours', link: '/services' },
  { name: 'EarthLink business', link: '/services' }
];

const useStyles = makeStyles(styles);

function Header(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={{ my: 4.5, fontSize: 20, textAlign: 'center' }}>
        <img src={logo} alt='logo' style={{ width: 70, height: 50 }} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={item.link}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box className='header' sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className={classes.navBarScrolled}>
        <Toolbar sx={{ marginLeft: { xs: 0, sm: 20 }, marginRight: { xs: 0, sm: 20 }, justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src={logo} alt='logo' style={{ width: 120, height: 80 }} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              item.name === 'Services' ? (
                <Button
                  key={item.name}
                  sx={{ color: '#fff', fontSize: 22 }}
                  aria-controls="services-menu"
                  aria-haspopup="true"
                  onClick={handleMenuClick}
                >
                  {item.name}
                </Button>
              ) : (
                <Button key={item.name} component={Link} to={item.link} sx={{ color: '#fff', fontSize: 22 }}>
                  {item.name}
                </Button>
              )
            ))}
            <Menu
              id="services-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {serviceItems.map((service) => (
                <MenuItem key={service.name} onClick={handleMenuClose} component={Link} to={service.link}>
                  {service.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
