import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { Text } from '../Text'
import {
  ProfileContainer,
  ProfileSummaryContainer,
  SummaryChips,
  SummaryTitle,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/joao0pedro0alves.png" alt="" />

      <ProfileSummaryContainer>
        <SummaryTitle>
          <Text weight="bold" size="2xl" variant="base-title">
            João Pedro Alves Pereira
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

        <Text component="p">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Text>

        <SummaryChips>
          <Text component="span">
            <Icon icon={faGithub} />
            joao0pedroAlves
          </Text>
          <Text component="span">
            <Icon icon={faBuilding} />
            Ecosis
          </Text>
          <Text component="span">
            <Icon icon={faUserGroup} />
            32 seguidores
          </Text>
        </SummaryChips>
      </ProfileSummaryContainer>
    </ProfileContainer>
  )
}
