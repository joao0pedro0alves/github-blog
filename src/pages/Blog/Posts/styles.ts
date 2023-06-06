import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PostsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 3rem;
`

export const PostContainer = styled(NavLink)`
  text-decoration: none;
  min-height: 260px;

  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    gap: 1rem;

    strong {
      flex: 1;
    }

    span {
      white-space: nowrap;
    }
  }

  &:hover header strong {
    color: ${(props) => props.theme.primary};
  }
`
