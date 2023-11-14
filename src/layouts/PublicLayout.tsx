

import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function PublicLayout() {
  return (
    <div>
        <Link to={"/admin"}>Admin</Link>
        <br />
        <Outlet/>
    </div>
  )
}

export default PublicLayout