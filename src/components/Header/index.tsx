import { HeaderContainer } from './styles'

import logo from '../../assets/logo-github-blog.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  )
}
