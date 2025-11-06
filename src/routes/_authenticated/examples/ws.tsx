import { createFileRoute } from '@tanstack/react-router'
import { type MessageSubSubscription } from '@/gql/graphql.ts'
import { gql, useSubscription } from 'urql'

export const Route = createFileRoute('/_authenticated/examples/ws')({
  component: RouteComponent,
})

const newMessages = gql`
  subscription MessageSub {
    messageAdded {
      id
      sender
      type
      content
      contentType
      metadata
      createdAt
    }
  }
`

function RouteComponent() {
  type Message = MessageSubSubscription['messageAdded']
  const [result] = useSubscription(
    { query: newMessages },
    (messages: Message[] = [], response: MessageSubSubscription) => {
      return [response.messageAdded, ...messages]
    }
  )
  if (!result.data) {
    return <p>No new messages</p>
  }
  return (
    <ul>
      {result.data.map((message) => (
        <p>
          id: {message.id}, type: {message.type}, content: {message.content},
          at:{message.createdAt}
        </p>
      ))}
    </ul>
  )
}
