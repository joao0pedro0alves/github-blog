import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { Text } from '../../../components/Text'
import { BlogContext } from '../../../contexts/BlogContext'
import { PostsContainer, PostContainer } from './styles'

export function Posts() {
  const { posts } = useContext(BlogContext)

  return (
    <PostsContainer>
      {posts.map((post) => {
        return (
          <PostContainer to={`/post/${post.number}`} key={post.id}>
            <header>
              <Text
                component="strong"
                variant="base-title"
                weight="bold"
                size="xl"
              >
                {post.title}
              </Text>
              <Text component="span" variant="base-span" size="sm">
                {formatDistanceToNow(new Date(post.created_at))}
              </Text>
            </header>

            <Text component="p">
              {post.body?.substring(0, 200).concat('...')}
            </Text>
          </PostContainer>
        )
      })}
    </PostsContainer>
  )
}
