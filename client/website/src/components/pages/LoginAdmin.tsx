"use client";
import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
  Notification,
} from "@mantine/core";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LoginAdmin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/admin/login", {
        email,
        password,
      });
      if (response.data) {
        Cookies.set("adminSession", response.data, { expires: 7 });
        router.push("/admin");
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      style={{
        paddingTop: "150px",
        backgroundColor: "black",
        height: "100vh",
        color: "white",
      }}
    >
      <Container size={500} my={40}>
        <Title
          ta="center"
          style={{
            fontFamily: "Greycliff CF, var(--mantine-font-family)",
            fontWeight: "900",
          }}
        >
          Welcome back
        </Title>
        <div style={{ color: "black" }}>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            {error && (
              <Notification color="red" mb="md">
                {error}
              </Notification>
            )}
            <TextInput
              label="Email"
              placeholder="admin@email.com"
              required
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
            <Button fullWidth mt="xl" color="black" onClick={handleSubmit}>
              Sign in
            </Button>
          </Paper>
        </div>
      </Container>
    </div>
  );
};

export default LoginAdmin;
