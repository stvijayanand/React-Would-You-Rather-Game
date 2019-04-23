import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginStatus from './LoginStatus';

export default function Nav () {
  return (
      <div>
        <LoginStatus></LoginStatus>          
          <nav className='nav'>
              <ul>
                  <li>
                      <NavLink to='/home' exact activeClassName='active'>
                          Home
          </NavLink>
                  </li>
                  <li>
                      <NavLink to='/add' activeClassName='active'>
                          New Poll
          </NavLink>
                  </li>
                  <li>
                      <NavLink to='/leaderboard' activeClassName='active'>
                          Leaderboard
          </NavLink>
                  </li>
              </ul>
          </nav>
      </div>
  )
}