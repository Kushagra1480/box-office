import React from 'react'
import Navs from './Navs'
import Title from './Title'

const MainpageLayout = ({children}) => {
  return (
    <div>
        <Title title = "Box Office" subtitle = "Are you looking for a movie or an actor?"></Title>
        <Navs />
        {children}
    </div>
  )
}

export default MainpageLayout