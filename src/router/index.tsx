import Home from '@/pages/home'
import { Route, Routes, Navigate } from 'react-router-dom'

function Index() {
  return (
    <>
      <Routes>
        <Route index path='/' element={<Navigate to='/home' />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </>
  )
}

export default Index