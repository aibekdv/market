import React from 'react'
import {
  ExpandLess,
  ExpandMore,
  HomeOutlined,
  InfoOutlined,
  ListOutlined,
} from '@mui/icons-material'
import {
  Collapse,
  Divider,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  List,
} from '@mui/material'
import { ReactComponent as ProfileIcon } from '@/assets/icons/user.svg'

type Props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CustomDrawer: React.FC<Props> = ({ open, setOpen }) => {
  const [openCatalog, setOpenCatalog] = React.useState(false)

  const handleClick = () => {
    setOpenCatalog(!openCatalog)
  }

  return (
    <Drawer open={open} anchor='left' onClose={() => setOpen(false)}>
      <div style={{ width: 300 }}>
        <ListItem button sx={{ my: 1 }}>
          <ListItemIcon sx={{ minWidth: '40px' }}>
            <ProfileIcon />
          </ListItemIcon>
          {/* <Typography>
            Hello, <br /> username!
          </Typography> */}
          <ListItemText primary={'Войти'} />
        </ListItem>
        <Divider sx={{ my: 1 }} />
        <List>
          <ListItem button>
            <ListItemIcon sx={{ minWidth: '40px' }}>
              <HomeOutlined />
            </ListItemIcon>
            <ListItemText primary={'Главная'} />
          </ListItem>

          <ListItem button onClick={handleClick}>
            <ListItemIcon sx={{ minWidth: '40px' }}>
              <ListOutlined />
            </ListItemIcon>
            <ListItemText primary={'Каталог'} />
            {openCatalog ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          {/* Catalog content */}
          <Collapse in={openCatalog} timeout='auto' unmountOnExit>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary='Электроники' />
            </ListItemButton>
          </Collapse>

          <ListItem button>
            <ListItemIcon sx={{ minWidth: '40px' }}>
              <InfoOutlined />
            </ListItemIcon>
            <ListItemText primary={'О нас'} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}

export default CustomDrawer
