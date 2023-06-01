import React from 'react'
import { MainCarousel } from '@/components/Carousel'
import { Box, Container } from '@mui/material'
import { MainTabs } from '@/components/Tabs'

type Props = {}

export const HomePage: React.FC = ({}: Props) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Container maxWidth='lg'>
        <MainCarousel />
        <MainTabs labels={['Популярное', 'Акция', 'Новинки']} tabContens={[1, 2, 3]} />
      </Container>
    </Box>
  )
}
