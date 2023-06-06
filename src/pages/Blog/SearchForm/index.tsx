import { Text } from '../../../components/Text'
import { SearchFormContainer, SearchInput } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <header>
        <Text variant="base-subtitle" weight="bold" size="lg">
          Publicações
        </Text>
        <Text variant="base-span" size="sm">
          6 publicações
        </Text>
      </header>

      <SearchInput type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
