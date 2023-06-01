import React from 'react'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { ReactComponent as CartIcon } from '@/assets/icons/cart.svg'
import { ReactComponent as StarRateIcon } from '@/assets/icons/star.svg'

export const ProductItem: React.FC = () => {
  const theme = useTheme()

  return (
    <Box
      component={'div'}
      sx={{
        width: '232px',
        height: '400px',
        bgcolor: '#E1E1E1',
        position: 'relative',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* IMAGE PRODUCT */}
      <Box
        component='img'
        src='https://static.borofone-expert.ru/wHTL4GDxrfwtC7qBrFMrBhqW5MrrSnH--CM7NkCmAjo/f:webp/czM6Ly9pbWFnZXMvYWQvYjAvYzQvNGIvOWI2ZGNjODYud2VicA'
        sx={{
          width: '100%',
          height: '100%',
          maxHeight: '195px',
          objectFit: 'cover',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        }}
      />

      {/* PRO TYPE */}
      <Box
        component={'div'}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: '#F42A0F',
          color: 'white',
          borderTopLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          width: '68px',
          height: '23px',
          fontSize: '14px',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: '16px',
        }}
      >
        PRO
      </Box>

      {/* BUTTON FOR FAVORITE */}
      <IconButton
        sx={{ width: '40px', height: '40px', position: 'absolute', right: '10px', top: '10px' }}
      >
        <FavoriteBorderOutlined />
      </IconButton>

      {/* SALE INFO */}
      <Box
        component={'div'}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '26px',
          maxHeight:'26px',
          translate: '0px -13px',
        }}
      >
        <Box
          component={'div'}
          sx={{
            backgroundColor: '#FF9F1C',
            color: 'white',
            borderTopRightRadius: '7px',
            borderBottomRightRadius: '7px',
            fontSize: '14px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: '16px',
            width: '100px',
            height: '100%',
          }}
        >
          Акция
        </Box>

        <Box
          component={'div'}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            borderTopLeftRadius: '7px',
            borderBottomLeftRadius: '7px',
            fontSize: '14px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: '16px',
            width: '60px',
            height: '100%',
          }}
        >
          50%
        </Box>
      </Box>

      {/* PRODUCT INFO */}
      <Box component={'div'} sx={{ p: '12px', pt: 0 }}>
        {/* TITLE PRODUCT */}
        <Typography
          component={'h6'}
          variant='body1'
          sx={{
            color: '#1C1B1F',
            fontSize: '16px',
            fontWeight: 700,
            maxLines: 2,
            overflow: 'hidden',
          }}
        >
          Borofone BO12 extra bass (BT 5.0)
        </Typography>
        {/* DESCRIPTION PRODUCT*/}
        <Typography
          component={'span'}
          variant='body2'
          sx={{ mt: 1, display: 'inline-block', maxLines: 2, overflow: 'hidden' }}
        >
          Рис Лазер Хорезм Chempion высший сорт, 900 г
        </Typography>

        {/* PRICE PRODUCT*/}
        <Box
          component={'div'}
          sx={{
            width: '100%',
            height: '26px',
            display: 'flex',
            aligntItems: 'center',
            justifyContent: 'space-between',
            bgcolor: 'white',
            mt: 1,
          }}
        >
          <Box
            component={'div'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              maxWidth: '50%',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#35353C', pl: '4px' }}>
              Цена
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 400,
                color: '#000',
                pl: 1,
                textDecoration: 'line-through',
              }}
            >
              800р
            </Typography>
          </Box>
          <Box
            component={'div'}
            sx={{
              minWidth: '53px',
              maxWidth: '45%',
              height: '100%',
              bgcolor: '#FF9F1C',
              fontSize: '14px',
              fontWeight: 700,
              borderTopLeftRadius: '7px',
              borderBottomLeftRadius: '7px',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              px: 1,
            }}
          >
            550p
          </Box>
        </Box>

        {/* RATE INFO */}
        <Box
          component={'div'}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <StarRateIcon />
            <Typography sx={{ fontSize: '12px', fontWeight: 400, color: 'black', pl: 1 }}>
              4.5 (34587 заказов)
            </Typography>
          </Box>
          <Box
            component={'button'}
            type='button'
            sx={{
              width: '32px',
              height: '32px',
              border: '2px solid #D8D8D8',
              borderRadius: '7px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <CartIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
