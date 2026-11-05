import { z } from 'zod'

export const userStatusSchema = z.enum(['freeze', 'normal'])

export type UserStatus = 'freeze' | 'normal'

export const userSchema = z.object({
  __typename: z.literal('User').optional(),
  id: z.string(),
  email: z.string(),
  nickname: z.string(),
  avatar: z.string().nullable().optional(),
  status: z.string(),
  isAdmin: z.boolean(),
  createdAt: z.any().optional(),
  updatedAt: z.any().optional(),
  oauthAccounts: z
    .array(
      z.object({
        __typename: z.literal('OAuthAccount').optional(),
        profile: z.any().optional(),
        provider: z.string(),
      })
    )
    .nullable()
    .optional(),
})

export type User = z.infer<typeof userSchema>
