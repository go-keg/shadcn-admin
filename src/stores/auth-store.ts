import { create } from 'zustand'
import { getCookie, removeCookie, setCookie } from '@/lib/cookies'

const TOKEN_COOKIE = 'shadcn_admin_token'

interface AuthUser {
  id: string
  email: string
  nickname: string
  avatar: string
}

interface AuthState {
  accessToken: string
  user: AuthUser | null
  setAccessToken: (token: string) => void
  setUser: (user: AuthUser | null) => void
  reset: () => void
}

const cookieToken = getCookie(TOKEN_COOKIE) ?? ''

export const useAuthStore = create<AuthState>()((set) => ({
  accessToken: cookieToken,
  user: null,
  setAccessToken: (token) => {
    setCookie(TOKEN_COOKIE, token)
    set({ accessToken: token })
  },
  setUser: (user) => set({ user }),
  reset: () => {
    removeCookie(TOKEN_COOKIE)
    set({ accessToken: '', user: null })
  },
}))