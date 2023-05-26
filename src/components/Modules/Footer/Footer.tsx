import React from 'react'
import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material'
import { Facebook, Instagram, Telegram } from '@mui/icons-material'
import AppleIcon from '@mui/icons-material/Apple'
import { ReactComponent as PlayMarketIcon } from '@/assets/icons/playmarket.svg'

type Props = {}

const Footer: React.FC<Props> = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: theme.palette.primary.main,
        pb: 2,
        pt:3,
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={2.4}>
            <div>
              <Typography sx={{ fontSize: 20, fontWeight: 500, color: 'white' }}>
                Покупателям
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: 'white',
                    py: 0.5,
                    '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
                    display: 'flex',
                  }}
                >
                  Как сделать заказ
                </Typography>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: 'white',
                    py: 0.5,
                    '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
                    display: 'flex',
                  }}
                >
                  Способ оплаты
                </Typography>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: 'white',
                    py: 0.5,
                    '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
                    display: 'flex',
                  }}
                >
                  Доставка
                </Typography>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: 'white',
                    py: 0.5,
                    '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
                    display: 'flex',
                  }}
                >
                  Вопрос-ответ
                </Typography>
              </Box>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={2.4}>
            <div>
              <Typography sx={{ fontSize: 20, fontWeight: 500, color: 'white' }}>
                Партнерам
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: 'white',
                    py: 0.5,
                    '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
                    display: 'flex',
                  }}
                >
                  Продавайте на .......
                </Typography>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: 'white',
                    py: 0.5,
                    '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
                    display: 'flex',
                  }}
                >
                  Вход для продавцов
                </Typography>
              </Box>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={2.4}>
            <div>
              <Typography sx={{ fontSize: 20, fontWeight: 500, color: 'white' }}>
                Компания
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: 'white',
                    py: 0.5,
                    '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
                    display: 'flex',
                  }}
                >
                  Пункты выдачи
                </Typography>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: 'white',
                    py: 0.5,
                    '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
                    display: 'flex',
                  }}
                >
                  Вакансии
                </Typography>
              </Box>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={2.4}>
            <div>
              <Typography sx={{ fontSize: 20, fontWeight: 500, color: 'white' }}>
                Мы в соцсетях
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: 'white',
                    py: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    '& svg': { mr: 0.5 },
                    '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
                  }}
                >
                  <Instagram /> Instagram
                </Typography>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: 'white',
                    py: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    '& svg': { mr: 0.5 },
                    '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
                  }}
                >
                  <Telegram /> Telegram
                </Typography>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: 'white',
                    py: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    '& svg': { mr: 0.5 },
                    '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
                  }}
                >
                  <Facebook /> Facebook
                </Typography>
              </Box>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={2.4}>
            <div>
              <Typography sx={{ fontSize: 20, fontWeight: 500, color: 'white' }}>
                Скачать приложение
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Button
                  variant='outlined'
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    width: '100%',
                    textTransform: 'inherit',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                      borderColor: 'white',
                    },
                  }}
                >
                  <AppleIcon sx={{ color: 'black', width: '28px', height: '27px', mr: '12px' }} />
                  <Typography sx={{ fontSize: '18px', fontWeight: 500 }}>App Store</Typography>
                </Button>
                <Button
                  variant='outlined'
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    width: '100%',
                    textTransform: 'inherit',
                    height: '50px',
                    mt: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                      borderColor: 'white',
                    },
                  }}
                >
                  <PlayMarketIcon
                    style={{ color: 'black', width: '28px', height: '27px', marginRight: '12px' }}
                  />
                  <Typography sx={{ fontSize: '18px', fontWeight: 500 }}>Google Play</Typography>
                </Button>
              </Box>
            </div>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, mb: 1 }}>
          <Divider sx={{ borderColor: 'white' }} />
          <Box sx={{ mt: 2,color:"white" }}>
            <center>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel risus dictum,
            </center>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
