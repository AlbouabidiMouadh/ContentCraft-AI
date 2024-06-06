"use client";
import React, { useEffect, useState } from "react";
import ProfileSidenav from "@/components/ProfilePage/ProfileSidenav";
import ProfileContainer from "@/containers/ProfileContainer";
import Image from "next/image";
import picture from "@/public/illustrations/Enjoy your finance.png";
import { TextField } from "@mui/material";
import { Button } from "@nextui-org/button";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const ProfileGeneral = () => {
  const router = useRouter();
  type UserData = {
    email: string;
    lastname: string;
    firstname: string;
    picture?: string;
  };

  const [data, setData] = useState<UserData>({
    email: "",
    lastname: "",
    firstname: "",
    picture: "",
  });
  const [session, setSession] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success", // or "error"
  });
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const fetchData = async (session: any) => {
    console.log(session.user.id);
    try {
      const response = await axios.get(
        `http://localhost:4000/api/user/${session.user.id}`,
        {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      );
      console.log(response);
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

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  const handleUpdate = async () => {
    try {
      console.log("session" + session.token);
      const response = await axios.put(
        `http://localhost:4000/api/user/${session.user.id}`,
        { newUser: data },
        {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      );
      console.log(response);
      setNotification({
        open: true,
        message: "Profile successfully updated",
        severity: "success",
      });
      if (selectedImage) {
        await uploadImage();
      }
    } catch (error) {
      console.log(error);
      setNotification({
        open: true,
        message: "Error updating profile",
        severity: "error",
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      setData({
        ...data,
        picture: e.target.files[0].name,
      });
      setIsSelected(true)
      console.log(e.target.files[0].name);
    }
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", selectedImage!);
    console.log("session" + session.token);
    try {
      await axios.post(
        `http://localhost:4000/api/upload/profile-picture`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${session.token}`,
            "Content-Type": "multipart/form-data",
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
            <div
              style={{
                width: "200px",
                height: "200px",
                margin: "20px 0",
                position: "relative",
              }}
            >
              <Image
                src={
                  selectedImage
                    ? URL.createObjectURL(selectedImage)
                    : `http://localhost:4000/profile/${data.picture}`
                }
                alt="profile-picture"
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ margin: "20px 0" }}
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
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseNotification}
        >
          {notification.message}
        </MuiAlert>
      </Snackbar>
    </ProfileContainer>
  );
};

export default ProfileGeneral;
