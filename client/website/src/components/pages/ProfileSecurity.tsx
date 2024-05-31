"use client";
import React, { useEffect, useState } from "react";
import ProfileSidenav from "@/components/ProfilePage/ProfileSidenav";
import ProfileContainer from "@/containers/ProfileContainer";
import { TextField } from "@mui/material";
import { Button } from "@nextui-org/button";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const ProfileSecurity = () => {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const sessionData = Cookies.get("session");
    if (!sessionData) {
      router.push("/auth/user/login");
    } else {
      setSession(JSON.parse(sessionData));
    }
  }, [router]);

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      alert("New password and confirmation do not match");
      return;
    }

    try {
      await axios.put(
        `http://localhost:4000/api/user/${session.user.id}/password`,
        {
          currentPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      );
      alert("Password successfully changed");
    } catch (error) {
      console.log(error);
      alert("Error changing password");
    }
  };

  if (!session) {
    return null; // or a loading spinner
  }

  return (
    <ProfileContainer>
      <div style={{ display: "flex" }}>
        <ProfileSidenav pageName="Security" />
        <div style={{ padding: "50px", width: "100%" }}>
          <div
            style={{
              fontSize: "25px",
              textAlign: "center",
              margin: "auto",
              marginBottom: "20px",
            }}
          >
            Change Password
          </div>
          <div
            style={{
              margin: "auto",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              type="password"
              placeholder="Current Password"
              size="small"
              label="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              style={{ width: "300px", margin: "20px 0" }}
            />
            <TextField
              type="password"
              placeholder="New Password"
              size="small"
              label="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{ width: "300px", margin: "20px 0" }}
            />
            <TextField
              type="password"
              placeholder="Confirm New Password"
              size="small"
              label="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ width: "300px", margin: "20px 0" }}
            />
            <Button
              onClick={handlePasswordChange}
              color="primary"
              fullWidth
              style={{ margin: "20px auto", width: "150px" }}
            >
              Change Password
            </Button>
          </div>
        </div>
      </div>
    </ProfileContainer>
  );
};

export default ProfileSecurity;
