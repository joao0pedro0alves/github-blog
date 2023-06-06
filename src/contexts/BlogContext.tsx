import { createContext, ReactNode, useState, useEffect } from 'react'
import { githubApi } from '../lib/github-api'

interface Post {
  id: number
  number: number
  title: string
  body: string
  created_at: string
}

interface BlogContextData {
  posts: Post[]

  fetchPosts: (query?: string) => Promise<void>
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext<BlogContextData>({} as BlogContextData)

export function BlogProvider({ children }: BlogProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  async function fetchPosts(query = '') {
    const response = await githubApi.get('/search/issues', {
      params: {
        q: `${query} repo:joao0pedro0alves/github-blog`,
      },
    })

    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <BlogContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </BlogContext.Provider>
  )
}
