import { Profile } from '../../components/Profile'
import { Posts } from './Posts'
import { SearchForm } from './SearchForm'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchForm />
      <Posts />
    </BlogContainer>
  )
}
