interface User {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  created_at: string
  updated_at: string
}

interface UserDetails extends User {
  name: string | null
  company: string | null
  blog: string
  location: string | null
  email: string | null
  hireable: boolean | null
  bio: string | null
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
}

type RootStackParamList = {
  UserSearch: undefined
  UserDetails: undefined
}

type UserTabsParamList = {
  UserDetails: undefined
  UserRepos: undefined
  UserFollowers: undefined
}

interface Repository {
  id: number
  name: string
  description: string | null
  language: string
  disabled: boolean
  html_url: string
  visibility: 'public' | 'private'
}

interface Follower extends User {}

type UserState = {
  fetchingDetails: boolean
  details: UserDetails | null
  fetchingRepos: boolean
  repos: Repository[]
  fetchingFollowers: boolean
  followers: Follower[]
}
