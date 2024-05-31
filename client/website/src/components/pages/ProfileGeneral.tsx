"use client";
import ProfileSidenav from "@/components/ProfilePage/ProfileSidenav";
import ProfileContainer from "@/containers/ProfileContainer";
import Image from "next/image";
import picture from "@/public/illustrations/Enjoy your finance.png";
import { TextField } from "@mui/material";
import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const ProfileGeneral = () => {
  const router = useRouter();
  type UserData = {
    email: string;
    lastname: string;
    firstname: string;
  };

  const [data, setData] = useState<UserData>({
    email: "",
    lastname: "",
    firstname: "",
  });
  const [session, setSession] = useState<any>(null);

  const fetchData = async (session: any) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/user/${session.user.id}`,
        {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const sessionData = Cookies.get("session");
    if (!sessionData) {
      router.push("/auth/user/login");
    } else {
      const parsedSession = JSON.parse(sessionData);
      setSession(parsedSession);
      fetchData(parsedSession);
    }
  }, [router]);

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:4000/api/user/${session.user.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (!session) {
    return null; // or a loading spinner
  }

  return (
    <ProfileContainer>
      <div style={{ display: "flex" }}>
        <ProfileSidenav pageName="General" />
        <div style={{ padding: "50px", width: "100%" }}>
          <div
            style={{ fontSize: "25px", textAlign: "center", margin: "auto" }}
          >
            Welcome {session.user.name}
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
            <Image
              src={picture.src}
              alt="profile-picture"
              height={250}
              width={250}
              style={{ width: "300px", margin: "20px 0" }}
            />
            <TextField
              type="text"
              placeholder="lastname"
              size="small"
              label="lastname"
              value={data.lastname}
              onChange={(e) => setData({ ...data, lastname: e.target.value })}
              style={{ width: "300px", margin: "20px 0" }}
            />
            <TextField
              type="text"
              placeholder="firstname"
              size="small"
              label="firstname"
              value={data.firstname}
              onChange={(e) => setData({ ...data, firstname: e.target.value })}
              style={{ width: "300px", margin: "20px 0" }}
            />
            <TextField
              type="text"
              placeholder="email"
              size="small"
              label="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              style={{ width: "300px", margin: "20px 0" }}
            />
            <Button
              onClick={handleUpdate}
              color="primary"
              fullWidth
              style={{ margin: "20px auto", width: "100px" }}
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </ProfileContainer>
  );
};

export default ProfileGeneral;
