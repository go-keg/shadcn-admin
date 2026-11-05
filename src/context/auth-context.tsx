'use client'

import { createContext, useContext, useEffect } from 'react'
import { useAuthStore } from '@/stores/auth-store'

interface User {
  id: string
  email: string
  nickname: string
  avatar: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (token: string, user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { accessToken, user, setAccessToken, setUser, reset } = useAuthStore()

  // On mount, load user from cookie if token exists (no user stored, just token)
  // User info will be fetched on demand by the app
  useEffect(() => {
    if (accessToken && !user) {
      // Could trigger a profile fetch here if needed
    }
  }, [accessToken, user])

  const login = (newToken: string, newUser: User) => {
    setAccessToken(newToken)
    setUser(newUser)
  }

  const logout = () => {
    reset()
  }

  return (
    <AuthContext
      value={{
        user,
        token: accessToken,
        isAuthenticated: !!accessToken,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
