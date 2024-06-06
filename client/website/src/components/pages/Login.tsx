"use client";
import React, { useState, ChangeEvent } from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
} from "@mantine/core";
import Cookies from "js-cookie";
import { GoogleButton } from "@/components/GoogleButton";
import axios from "axios";
import { useRouter } from "next/navigation";
const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const handleLogin = async () => {
      console.log("btn clicked");
      try {
        const response = await axios.post("http://localhost:4000/api/login", {
          email: email,
          password: password,
        });
        console.log(response.data);
        if (response.data.message == "Success") {
          Cookies.set("session", JSON.stringify(response.data));
          setError("");
          router.push("/profile");
        } else {
          setError("Login failed. Please check your credentials.");
        }
      } catch (error) {
        console.error(error);
        setError("Login failed. Please check your credentials.");
      }
    };
  
    return (
      <div
        style={{
          paddingTop: "100px",
          backgroundColor: "black",
          height: "100vh",
          color: "white",
        }}
      >
        <Container size={500} my={40}>
          <Title
            style={{
              fontFamily: "Greycliff CF, var(--mantine-font-family)",
              fontWeight: 900,
              textAlign: "center",
            }}
          >
            Welcome back!
          </Title>
          <Text color="dimmed" size="sm" style={{ textAlign: "center" }} mt={5}>
            Do not have an account yet?{" "}
            <Anchor size="sm" href="/auth/user/signup">
              Create account
            </Anchor>
          </Text>
          <div style={{ color: "black" }}>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
              <Group grow mb="md" mt="md">
                <GoogleButton radius="xl">Google</GoogleButton>
              </Group>
              <Divider
                label="Or continue with email"
                labelPosition="center"
                my="lg"
              />
  
              {error && (
                <Text
                  size="sm"
                  style={{ textAlign: "center", color: "red" }}
                  mt={5}
                >
                  {error}
                </Text>
              )}
  
              <TextInput
                label="Email"
                placeholder="you@email.com"
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.currentTarget.value)
                }
                aria-label="Email"
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.currentTarget.value)
                }
                aria-label="Password"
              />
              <Group mt="lg">
                <Checkbox label="Remember me" />
                <Anchor href="/auth/user/forgetPass" size="sm" style={{alignSelf : "flex-end"}}>
                  Forgot password?
                </Anchor>
              </Group>
              <Button fullWidth mt="xl" onClick={handleLogin}>
                Sign in
              </Button>
            </Paper>
          </div>
        </Container>
      </div>
    );
}

export default Login