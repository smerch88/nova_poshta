import {
  AppBar,
  Container,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Box,
  Button,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = [
    { id: '1', title: 'Пошук за ТТН', link: '/' },
    { id: '2', title: 'Пошук відділень', link: '/departments' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGithubiconClick = () => {
    window.open('https://github.com/smerch88', '_blank');
  };

  const menu = (
    <List>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/">
          <HomeOutlinedIcon sx={{ marginRight: '40px' }} />
          <ListItemText primary="Пошук за ТТН" sx={{ marginRight: '40px' }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/departments">
          <FindInPageOutlinedIcon sx={{ marginRight: '40px' }} />
          <ListItemText
            primary="Пошук відділень"
            sx={{ marginRight: '40px' }}
          />
        </ListItemButton>
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <LocalShippingIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <IconButton
              sx={{ display: { md: 'none' } }}
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component={Link}
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
              Nova
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map(({ id, title, link }) => (
                <Button
                  key={id}
                  component={Link}
                  to={link}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {title}
                </Button>
              ))}
            </Box>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleGithubiconClick}
            >
              <GitHubIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="top" open={isMenuOpen} onClose={toggleMenu}>
        {menu}
      </Drawer>
    </>
  );
};
