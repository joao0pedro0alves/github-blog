import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Text } from '../../../components/Text'
import { BlogContext } from '../../../contexts/BlogContext'
import { SearchFormContainer, SearchInput } from './styles'

const searchFormValidationSchema = z.object({
  query: z.string(),
})

type SearchFormData = z.infer<typeof searchFormValidationSchema>

export function SearchForm() {
  const { posts, fetchPosts } = useContext(BlogContext)

  const { register, handleSubmit, reset } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormValidationSchema),
  })

  function handleFetchPosts(data: SearchFormData) {
    fetchPosts(data.query)
    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleFetchPosts)}>
      <header>
        <Text variant="base-subtitle" weight="bold" size="lg">
          Publicações
        </Text>
        <Text variant="base-span" size="sm">
          {posts.length} publicações
        </Text>
      </header>

      <SearchInput
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </SearchFormContainer>
  )
}
