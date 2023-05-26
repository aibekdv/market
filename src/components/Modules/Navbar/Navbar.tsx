import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  SvgIcon,
  TextField,
  useTheme,
} from '@mui/material'
import { Search } from '@mui/icons-material'
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg'
import { ReactComponent as FavoriteIcon } from '@/assets/icons/favorite.svg'
import { ReactComponent as CartIcon } from '@/assets/icons/cart.svg'
import MenuIcon from '@mui/icons-material/MenuOutlined'
import CustomDrawer from './CustomDrawer'

type Props = {
  window?: () => Window
  children: React.ReactElement
}

function ElevationScroll(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

function HideOnScroll(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <ElevationScroll>
      <Slide appear={false} direction='down' in={!trigger}>
        {children}
      </Slide>
    </ElevationScroll>
  )
}

function HideAppBar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>{props.children}</HideOnScroll>
      <Toolbar />
    </React.Fragment>
  )
}

export default function Navbar() {
  const theme = useTheme()
  const [openDrawer, setOpenDrawer] = React.useState(false)

  const bottomMenu = [
    'Электроника',
    'Бытовая техника',
    'Одежда',
    'Аксессуары',
    'Здоровье',
    'Строительство и ремонт',
    'Детские товары',
    `Ещё     `,
  ]

  return (
    <HideAppBar>
      <AppBar sx={{ backgroundColor: '#fff', py: { md: '2px' } }}>
        <CustomDrawer open={openDrawer} setOpen={setOpenDrawer} />

        <Container maxWidth='lg'>
          <Toolbar disableGutters>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  sx={{ display: { xs: 'flex', md: 'none' } }}
                  onClick={() => setOpenDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant='h6'
                  noWrap
                  component='a'
                  href='/'
                  sx={{
                    ml: 2,
                    display: { xs: 'flex', md: 'none' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'black',
                    textDecoration: 'none',
                  }}
                >
                  LOGO
                </Typography>
              </Box>

              {/* Search form */}
              <Box
                component='form'
                sx={{
                  width: '60%',
                  height: '40px',
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                }}
              >
                {/* <Button
                  variant='contained'
                  type='button'
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 600,
                    color: 'white',
                    textDecoration: 'none',
                    boxShadow: 'none',
                    px: 3,
                    mr: 5,
                    textTransform: 'capitalize',
                    '&:hover': {
                      color: 'white',
                      backgroundColor: theme.palette.primary.main,
                      boxShadow: 'none',
                    },
                  }}
                >
                  Каталог
                </Button>*/}

                <Typography
                  component={'a'}
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Roboto',
                    fontWeight: 600,
                    color: theme.palette.secondary.contrastText,
                    textDecoration: 'none',
                    boxShadow: 'none',
                    px: 3,
                    mr: 5,
                    textTransform: 'capitalize',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  Каталог
                </Typography>
                <TextField
                  id='input-with-icon-textfield'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                  variant='outlined'
                  sx={{
                    width: '100%',
                    height: '40px',
                    '& .MuiInputBase-root': {
                      height: '40px',
                      paddingLeft: '8px',
                      borderRadius: '10px',
                    },
                  }}
                />
              </Box>

              {/* Right menu */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    display: { xs: 'none', sm: 'flex' },
                    flexDirection: 'column',
                    alignItems: 'center',
                    mr: '23px',
                    '&:hover': {
                      cursor: 'pointer',
                      '& .MuiTypography-root ': {
                        color: theme.palette.primary.main,
                      },
                      '& .MuiSvgIcon-root svg path ': {
                        stroke: theme.palette.primary.main,
                      },
                      '& .MuiSvgIcon-root svg circle ': {
                        stroke: theme.palette.primary.main,
                      },
                    },
                  }}
                >
                  <SvgIcon>
                    <UserIcon />
                  </SvgIcon>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontFamily: 'Roboto',
                      color: '#494948',
                      lineHeight: '14px',
                      fontWeight: 400,
                      mt: '5px',
                      display: { xs: 'none', md: 'block' },
                    }}
                  >
                    Войти
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mr: '23px',
                    '&:hover': {
                      cursor: 'pointer',
                      '& .MuiTypography-root ': {
                        color: theme.palette.primary.main,
                      },
                      '& .MuiSvgIcon-root svg path ': {
                        stroke: theme.palette.primary.main,
                      },
                      '& .MuiSvgIcon-root svg circle ': {
                        stroke: theme.palette.primary.main,
                      },
                    },
                  }}
                >
                  <Badge badgeContent={4} color='primary'>
                    <SvgIcon>
                      <FavoriteIcon />
                    </SvgIcon>
                  </Badge>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontFamily: 'Roboto',
                      color: '#494948',
                      lineHeight: '14px',
                      fontWeight: 400,
                      mt: '5px',
                      display: { xs: 'none', md: 'block' },
                    }}
                  >
                    Избранное
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '&:hover': {
                      cursor: 'pointer',
                      '& .MuiTypography-root ': {
                        color: theme.palette.primary.main,
                      },
                      '& .MuiSvgIcon-root svg path ': {
                        stroke: theme.palette.primary.main,
                      },
                      '& .MuiSvgIcon-root svg circle ': {
                        stroke: theme.palette.primary.main,
                      },
                    },
                  }}
                >
                  <Badge badgeContent={4} color='primary'>
                    <SvgIcon>
                      <CartIcon />
                    </SvgIcon>
                  </Badge>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontFamily: 'Roboto',
                      color: '#494948',
                      lineHeight: '14px',
                      fontWeight: 400,
                      mt: '5px',
                      display: { xs: 'none', md: 'block' },
                    }}
                  >
                    Корзина
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Toolbar>
          {/* <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              pb: 1,
            }}
          >
            {bottomMenu.map((item, idx) => (
              <Typography
                key={idx}
                component={'a'}
                href='/product'
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: 'rgba(0, 0, 0, 0.7)',
                  mr: '16px',
                  '&:hover': {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box> */}
        </Container>
      </AppBar>
    </HideAppBar>
  )
}
