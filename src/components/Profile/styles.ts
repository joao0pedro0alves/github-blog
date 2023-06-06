import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  padding: 2rem;
  padding-left: 2.5rem;

  display: flex;
  gap: 2rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const ProfileSummaryContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  p {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    flex: 1;
  }
`

export const SummaryTitle = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;

    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 0.75rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const SummaryChips = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

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
