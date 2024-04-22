import ProfileSidenav from '@/components/ProfilePage/ProfileSidenav'
import ProfileContainer from '@/containers/ProfileContainer'
import React from 'react'
import type { Metadata } from "next";

export const metadata = { title: `Profile | Security` } satisfies Metadata;

const index = () => {
  return (
    <ProfileContainer>
      <div style={{ display: "flex" }}>
      <ProfileSidenav pageName="Security" />
      <div>
        this is the settings page
      </div>
    </div>
    </ProfileContainer>
  )
}

export default index