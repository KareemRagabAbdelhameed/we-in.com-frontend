import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'

const MainLayout= () => {
  return (
    <div className="h-[100vh] flex flex-col">
      <Header />
      
      <div className="mt-20 px-4 flex justify-center">
        <div className="w-full max-w-screen-xl">
          <Outlet />
        </div>
      </div>
      
    </div>
  )
}

export default MainLayout
