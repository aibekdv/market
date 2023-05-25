import { BaseLayout } from './layoutes'
import Routes from '@/routes'

type Props = {}

function App({}: Props) {
  return (
    <BaseLayout>
      <Routes />
    </BaseLayout>
  )
}

export default App
