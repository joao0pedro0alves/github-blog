import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Text } from '../../components/Text'
import {
  PostBody,
  PostContainer,
  PostHeader,
  PostHeaderChips,
  PostHeaderLinks,
} from './styles'
import { githubApi } from '../../lib/github-api'

interface PostData {
  id: number
  title: string
  body: string
  created_at: string
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Post() {
  const { id: issueNumber } = useParams()
  const [post, setPost] = useState<PostData>({} as PostData)

  useEffect(() => {
    async function loadPost() {
      const response = await githubApi.get(
        `/repos/joao0pedro0alves/github-blog/issues/${issueNumber}`,
      )
      setPost(response.data)
    }

    loadPost()
  }, [issueNumber])

  return (
    <PostContainer>
      <PostHeader>
        <PostHeaderLinks>
          <NavLink to="/">
            <Icon icon={faChevronLeft} />
            Voltar
          </NavLink>
          <a href={post.html_url} target="_blank" rel="noopener noreferrer">
            Ver no Github
            <Icon icon={faArrowUpRightFromSquare} />
          </a>
        </PostHeaderLinks>

        <Text variant="base-title" weight="bold" size="2xl">
          {post.title}
        </Text>

        <PostHeaderChips>
          <Text component="span">
            <Icon icon={faGithub} />
            {post.user?.login}
          </Text>
          <Text component="span">
            <Icon icon={faCalendarDay} />
            {post.created_at && formatDistanceToNow(new Date(post.created_at))}
          </Text>
          <Text component="span">
            <Icon icon={faComment} />
            {post.comments} comentários
          </Text>
        </PostHeaderChips>
      </PostHeader>

      <PostBody>
        <Markdown remarkPlugins={[remarkGfm]}>{post?.body}</Markdown>
      </PostBody>
    </PostContainer>
  )
}
