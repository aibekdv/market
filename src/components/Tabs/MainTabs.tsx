import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { ProductItem } from '../Product'

type MainTabsProps = {
  labels: string[]
  tabContens: number[]
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export function MainTabs(props: MainTabsProps) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  if (props.labels.length != props.tabContens.length) {
    return <h1>Please enter correct label and content for tabs</h1>
  }

  return (
    <Box sx={{ width: '100%', pb:1 }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          {props.labels.map((item, idx) => (
            <Tab label={item} {...a11yProps(idx)} key={idx} />
          ))}
        </Tabs>
      </Box>
      {props.tabContens.map((item, idx) => (
        <TabPanel value={value} index={idx} key={idx}>
          <ProductItem />
        </TabPanel>
      ))}
    </Box>
  )
}
