

import React from 'react'
import { Outlet } from 'react-router-dom'

function PublicLayout() {
  return (
    <div>
        <h1>Public Layout</h1>
        <br />
        <Outlet/>
    </div>
  )
}

export default PublicLayout