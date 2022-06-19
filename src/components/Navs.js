import React from 'react'
import { NavList, LinkStyled } from './Navs.styled'
import { useLocation } from 'react-router-dom'

const LINKS = [
    {to: '/', text: 'Home'},
    {to: '/starred', text: 'Starred'}
]


const Navs = () => {
    const location = useLocation()
    console.log('location', location.pathname)
    return (
        <NavList>
            {LINKS.map(item => (
                <li key = {item.text}>
                    <LinkStyled to = {item.to} className = {item.to === location.pathname ? "active" : ''}>
                        {console.log('item.to', item.to)}
                        {item.text}
                    </LinkStyled>
                </li>
            ))}
        </NavList>
  )
}

export default Navs