import React from 'react'
import Navbar from '../HomePage/Navbar'
import Teamvh1 from './Teamvh1'
import Teamvh2 from './Teamvh2'
import TeamMembers from './TeamMembers'
import TeamMembers2 from './TeamMembers2'

const Team = () => {
  return (
    <div>
      <Navbar/>
      <Teamvh1 />
      <Teamvh2 />
      <TeamMembers />
      <TeamMembers2 />
    </div>
  )
}

export default Team
