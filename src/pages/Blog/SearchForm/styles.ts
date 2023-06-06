import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const SearchInput = styled.input`
  margin-top: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;

  padding: 0.75rem 1rem;
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
