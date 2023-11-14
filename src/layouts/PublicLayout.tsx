

import SidebarPublic from '@/components/Sidebar/SiderbarPublic'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function PublicLayout() {
  return (
    <div>
        <SidebarPublic/>
        <Outlet/>
    </div>
  )
}

export default PublicLayout