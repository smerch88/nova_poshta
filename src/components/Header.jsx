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
  Zoom,
  Select,
  Icon,
  FormControl,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useTheme } from '@mui/material';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { UA, GB } from 'country-flag-icons/react/3x2';

export const Header = ({ toggleTheme }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { t } = useTranslation();

  const theme = useTheme();

  const pages = [
    { id: '1', title: `${t('ttn')}`, link: '/' },
    { id: '2', title: `${t('departments')}`, link: '/departments' },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState('ua');

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleGithubiconClick = () => {
    window.open('https://github.com/smerch88', '_blank');
  };

  const handleLanguageChange = lang => {
    i18next.changeLanguage(lang);
    setSelectedLanguage(lang);
  };

  return (
    <>
      <AppBar position="static">
        <Container>
          <Zoom in>
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
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex', gap: 10 },
                }}
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
              <FormControl variant="standard">
                <Select
                  value={selectedLanguage}
                  onChange={event => handleLanguageChange(event.target.value)}
                  sx={{ ml: 1 }}
                >
                  <MenuItem value="en" sx={{ fontSize: '4rem' }}>
                    <Icon>
                      <GB title="United States" />
                    </Icon>
                  </MenuItem>
                  <MenuItem value="ua" sx={{ fontSize: '4rem' }} selected>
                    <Icon>
                      <UA title="United States" />
                    </Icon>
                  </MenuItem>
                </Select>
              </FormControl>

              <IconButton
                sx={{ ml: 1, mr: 2 }}
                onClick={toggleTheme}
                color="inherit"
              >
                {theme.palette.mode === 'dark' ? (
                  <Brightness4Icon />
                ) : (
                  <Brightness7Icon />
                )}
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
          </Zoom>
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
