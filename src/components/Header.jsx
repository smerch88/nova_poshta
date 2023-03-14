import {
  AppBar,
  Container,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Toolbar,
  Box,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const pages = [
    { id: '1', title: 'Пошук за ТТН', link: '/' },
    { id: '2', title: 'Пошук відділень', link: '/departments' },
  ];

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleGithubiconClick = () => {
    window.open('https://github.com/smerch88', '_blank');
  };

  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <LocalShippingIcon sx={{ display: 'flex', mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                flexGrow: 1,
              }}
            >
              Nova
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: 10 } }}
            >
              {pages.map(({ id, title, link }) => (
                <Button
                  variant="outlined"
                  key={id}
                  component={Link}
                  to={link}
                  sx={{
                    my: 2,
                    color: 'white',
                    borderColor: 'white',
                    display: 'block',
                  }}
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
            <IconButton
              sx={{ display: { md: 'none' } }}
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {pages.map(({ id, title, link }) => (
          <MenuItem
            key={id}
            component={Link}
            to={link}
            onClick={handleMenuClose}
          >
            {title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
