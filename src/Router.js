import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomeScreen from './components/Screens/Homescreen/HomeScreen'
import RoomsScreen from './components/Screens/RoomsScreen/RoomsScreen'
import RoomScreen from './components/Screens/RoomScreen/RoomScreen'
import DashboardScreen from './components/Screens/DashboardScreen/DashboardScreen'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/RoomsScreen' element={<RoomsScreen />} />
            <Route path='/RoomsScreen/:slug' element={<RoomScreen />} />
            <Route path='/DashboardScreen' element={<DashboardScreen />} />
            {/* <Route path='/not-found' element={ <MainLayout><NotFoundScreen /> </MainLayout>}/> */}
            {/* <Route path='*' element={<Navigate to='/not-found'/>}/> */}
        </Routes>
    </div>
  )
}

export default Router