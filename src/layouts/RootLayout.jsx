import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <header>navbar</header>
      <ul>
        <li>My day</li>
        <li>Important</li>
      </ul>
      <Outlet />
    </>
  )
}

export default RootLayout
