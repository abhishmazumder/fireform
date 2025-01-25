import React from 'react'
import { Outlet } from 'react-router-dom'
import PublicHeader from '../components/headers/PublicHeader'
import PublicFooter from '../components/footers/PublicFooter'

const PublicLayout = () => {
  return (
    <div className="font-body flex flex-col min-h-screen inset-0 bg-secondary-dark bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] bg-fixed">
      <PublicHeader />
      <div className="flex-grow h-full w-full">
        <Outlet />
      </div>
      <PublicFooter />
    </div>
  )
}

export default PublicLayout