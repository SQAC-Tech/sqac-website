/**
 * Join Us Component
 * Updated on: December 20, 2025
 * Changes: Modified to display Closed component instead of IDCardForm
 * Purpose: Handles recruitment flow - currently showing closed state
 */
import React from 'react'
import IDCardForm from './IDCardForm'
import Closed from './Closed'

function JoinUs() {
  return (
    <div>
      {/* <IDCardForm/> */}
      <Closed/>
    </div>
  )
}

export default JoinUs