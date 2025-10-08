import React from 'react'
import {WidgetsGrid} from '../../../components/dashboard/WidgetsGrid'


const MainPage = () => {
  return (
    <div className='text-black'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>Informacion General</span>

      <WidgetsGrid/>

    </div>
  )
}

export default MainPage
