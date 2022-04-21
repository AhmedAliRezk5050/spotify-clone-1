import { NextPage } from 'next'
import { signIn, signOut } from 'next-auth/react'

const Login: NextPage = () => {
  return (
    <div className="bg-black text-white">
      <h1>Login Page</h1>
      <div className="p-5 ">
        <button onClick={() => signIn('spotify')}>Login</button>
        <div className="p-5"></div>
        <button onClick={() => signOut()}>signOut</button>
      </div>
    </div>
  )
}

export default Login
