import { Header } from './components/Header'
// import { Blog } from './pages/Blog'
import { Post } from './pages/Post'
import { LayoutContainer } from './styles'

export function RootLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Post />
    </LayoutContainer>
  )
}
