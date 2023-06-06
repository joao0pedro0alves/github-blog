import styled from 'styled-components'

export const HeaderContainer = styled.header`
  min-height: 296px;
  width: 100%;

  background-color: ${(props) => props.theme['base-background']};
  background-image: url('/cover.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;

  padding: 0 1rem;

  img {
    margin-top: 4rem;
    height: 98px;
  }
`
