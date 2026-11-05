import { createFileRoute } from '@tanstack/react-router'
import { ProfileQuery } from '@/graphql/example/queries/profile.tsx'
import { useQuery } from 'urql'

export const Route = createFileRoute('/_authenticated/examples/query')({
  component: RouteComponent,
})

function RouteComponent() {
  const [result, exec] = useQuery({
    query: ProfileQuery,
    variables: {},
  })
  if (result.fetching) return <p>Loading...</p>
  if (result.error) return <p>Error : {result.error.message}</p>

  const refresh = () => {
    exec({ requestPolicy: 'network-only' })
  }

  return (
    <div>
      <h3>{result.data?.profile?.email}</h3>
      <img
        width='400'
        height='250'
        alt='location-reference'
        src={`${result.data?.profile ?}`}
      />
      <br />
      {result.data?.profile?.status}
      <b>About this location:</b>
      <br />
      <button onClick={refresh}>refresh</button>
    </div>
  )
}
