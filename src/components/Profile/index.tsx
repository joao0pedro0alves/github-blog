import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'

import { Text } from '../Text'
import {
  ProfileContainer,
  ProfileSummaryContainer,
  SummaryChips,
  SummaryTitle,
} from './styles'
import { githubApi } from '../../lib/github-api'

interface User {
  login: string
  avatar_url: string
  name: string
  company: string
  followers: number
  bio: string
}

export function Profile() {
  const [user, setUser] = useState<null | User>(null)

  function fetchUserData() {
    githubApi
      .get('/users/joao0pedro0alves')
      .then((response) => setUser(response.data))
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <ProfileContainer>
      <img src={user?.avatar_url} alt="" />

      <ProfileSummaryContainer>
        <SummaryTitle>
          <Text weight="bold" size="2xl" variant="base-title">
            {user?.name}
          </Text>

          <a
            href="http://github.com/joao0pedro0alves"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
            <Icon icon={faArrowUpRightFromSquare} />
          </a>
        </SummaryTitle>

        <Text component="p">{user?.bio}</Text>

        <SummaryChips>
          <Text component="span">
            <Icon icon={faGithub} />
            {user?.login}
          </Text>
          <Text component="span">
            <Icon icon={faBuilding} />
            {user?.company}
          </Text>
          <Text component="span">
            <Icon icon={faUserGroup} />
            {user?.followers} seguidores
          </Text>
        </SummaryChips>
      </ProfileSummaryContainer>
    </ProfileContainer>
  )
}
