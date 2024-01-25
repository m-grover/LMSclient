import React, { FC, useState } from 'react'
import DashboardHeader from './DashboardHeader'

type Props = {}

const DashboardHero = (props: Props) => {
    const [open,setOpen]=useState(false);
  return (
    <div>
        <DashboardHeader />
    </div>
  )}
  export default DashboardHero