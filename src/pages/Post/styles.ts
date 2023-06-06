import styled from 'styled-components'

export const PostContainer = styled.main`
  max-width: 54rem; // 864px;
  margin: -5.5rem auto 0;
`

export const PostHeader = styled.header`
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  padding: 2rem;
`

export const PostHeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  a {
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.theme.primary};
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const PostHeaderChips = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 0.5rem;

  span {
    color: ${(props) => props.theme['base-subtitle']};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: ${(props) => props.theme['base-label']};
    font-size: 1.125rem;
  }
`

export const PostBody = styled.div`
  padding: 40px;

  img {
    margin: 1rem 0;
    max-width: 54rem; // 864px;
  }
`
