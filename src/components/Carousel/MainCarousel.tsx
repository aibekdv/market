import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Box } from '@mui/material'
import { ReactComponent as IconNext } from '@/assets/icons/next.svg'
import { ReactComponent as IconPrev } from '@/assets/icons/prev.svg'

type SlideItem = {
  imageUrl: string
}

type PropsItem = {
  key?: number
  item: SlideItem
  height?: number
}

function Item(props: PropsItem) {
  return (
    <Box
      sx={{
        bgColor: 'grey',
        backgroundImage: `url(${props.item.imageUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: `${props.height}px`,
      }}
    />
  )
}

export const MainCarousel: React.FC = () => {
  const slideRef = React.useRef<HTMLDivElement>(null)
  const [width, setWidth] = React.useState<number>(0)

  var items: SlideItem[] = [
    {
      imageUrl:
        'https://avatars.mds.yandex.net/get-market-adv/8282799/0111365a-d8a2-47e5-9e5c-206a41d8b087/1440x300',
    },
    {
      imageUrl:
        'https://avatars.mds.yandex.net/get-market-adv/8282799/a8555101-5649-4e13-9da4-7ecc98ea2ccd/1440x300',
    },
  ]

  React.useEffect(() => {
    const handleResize = () => {
      if (slideRef.current != null) {
        setWidth(slideRef.current.offsetWidth)
      }
    }
    handleResize()

    window.addEventListener('resize', handleResize, false)
  }, [])

  return (
    <div ref={slideRef}>
      <Carousel
        indicators={false}
        fullHeightHover={true}
        cycleNavigation={true}
        stopAutoPlayOnHover={true}
        navButtonsAlwaysVisible={true}
        navButtonsAlwaysInvisible={width > 550 ? false : true}
        height={width > 800 ? width / 3.2 : width / 2.6}
        NextIcon={<IconNext />}
        PrevIcon={<IconPrev />}
        navButtonsProps={{
          style: {
            backgroundColor: 'transparent',
          },
        }}
        sx={{
          borderRadius: {xs:"10px",sm:'20px'},
          
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} height={width > 800 ? width / 3.2 : width / 2.6} />
        ))}
      </Carousel>
    </div>
  )
}
