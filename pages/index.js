import { useSession, signIn, signOut } from 'next-auth/react'

const Home = () => {
  const { data: session } = useSession()
  console.log(session)
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <div className="flex">
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    </>
  )
}

export default Home
