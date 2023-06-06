import { Text } from '../../../components/Text'
import { PostsContainer, PostContainer } from './styles'

export function Posts() {
  return (
    <PostsContainer>
      <PostContainer>
        <header>
          <Text component="strong" variant="base-title" weight="bold" size="xl">
            JavaScript data types and data structures
          </Text>
          <Text component="span" variant="base-span" size="sm">
            Há 1 dia
          </Text>
        </header>

        <Text component="p">
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they ha...
        </Text>
      </PostContainer>
      <PostContainer>
        <header>
          <Text component="strong" variant="base-title" weight="bold" size="xl">
            JavaScript data types and data structures
          </Text>
          <Text component="span" variant="base-span" size="sm">
            Há 1 dia
          </Text>
        </header>

        <Text component="p">
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they ha...
        </Text>
      </PostContainer>
    </PostsContainer>
  )
}
