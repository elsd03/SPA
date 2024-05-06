import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <ul>
        <li><Link to='/'>Haqqinda</Link></li>
        <li><Link to='/əlaqə'>Əlaqə</Link></li>
        <li><Link to='/is'>İş nümunələri</Link></li>
    </ul>
  )
}