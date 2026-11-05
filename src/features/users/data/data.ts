import { type UserStatus } from './schema'

export const callTypes = new Map<UserStatus, string>([
  ['normal', 'bg-teal-100/30 text-teal-900 dark:text-teal-200 border-teal-200'],
  [
    'freeze',
    'bg-destructive/10 dark:bg-destructive/50 text-destructive dark:text-primary border-destructive/10',
  ],
])
