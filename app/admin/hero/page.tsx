'use client'
import DashboardHero from '../../components/Admin/DashboardHero'
import AdminProtected from '../../hooks/adminProtected'
import Heading from '../../../app/utils/Heading'
import React from 'react'
import AdminSidebar from "../../components/Admin/Sidebar/AdminSidebar"
import EditHero from "../../components/Admin/Customization/EditHero"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <AdminProtected>
      <Heading
        title="Learning Management System - Admin"
        description="It is a platform for students to learn and get help from teachers"
        keywords="Programming,Mern Stack,Redux,Redis,Next Js"
      />
      <div className="flex h-screen">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHero />
          <EditHero />
        </div>
      </div>
      </AdminProtected>
    </div>
  )
}

export default page
