import ProfileSidenav from '@/components/ProfilePage/ProfileSidenav'
import ProfileContainer from '@/containers/ProfileContainer'
import React from 'react'

const index = () => {
  return (
    <ProfileContainer>
      <div style={{ display: "flex" }}>
      <ProfileSidenav pageName="Subscription" />
      <div>
        this is the Subscription page
      </div>
    </div>
    </ProfileContainer>
  )
}

export default index