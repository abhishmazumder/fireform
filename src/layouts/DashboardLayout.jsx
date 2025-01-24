import React from 'react'
import { Outlet } from 'react-router-dom'
import UserHeader from '../components/headers/DashboardHeader'
import withAuth from '../hoc/withAuth'

const DashboardLayout = () => {
  return (
    <div className="font-body flex flex-col min-h-screen inset-0 bg-secondary-dark">
      <UserHeader />
      <Outlet />
    </div>
  )
}

export default withAuth(DashboardLayout);