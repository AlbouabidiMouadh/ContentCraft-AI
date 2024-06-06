"use client";
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
import { GoogleButton } from "@/components/GoogleButton";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const Signup = () => {
    const [firstname, setFirstname] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repeatPassword, setRepeatPassword] = useState<string>("");
    const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const handleSignup = async () => {
      if (password !== repeatPassword) {
        setError("Passwords do not match");
        return;
      }
      setError(null);
      try {
        const response = await axios.post("http://localhost:4000/api/signup", {
          firstname,
          lastname,
          email,
          password,
          repeat_password: repeatPassword,
        });
        console.log(response.data);
        if (response.data.message == "success") {
          setError("");
          router.push("/auth/user/login");
        }
      } catch (error) {
        console.error(error);
        setError("An error occurred during signup. Please try again.");
      }
    };
  
    return (
      <div
        style={{
          paddingTop: "50px",
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
            Welcome to ContentCraft AI!
          </Title>
          <Text color="dimmed" size="sm" style={{ textAlign: "center" }} mt={5}>
            Already have an account?{" "}
            <Anchor size="sm" href="/auth/user/login">
              Login
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
                mt="md"
                label="First name"
                placeholder="Your first name"
                required
                value={firstname}
                onChange={(e) => setFirstname(e.currentTarget.value)}
              />
              <TextInput
                mt="md"
                label="Last name"
                placeholder="Your last name"
                required
                value={lastname}
                onChange={(e) => setLastname(e.currentTarget.value)}
              />
              <TextInput
                mt="md"
                label="Email"
                placeholder="you@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <PasswordInput
                label="Repeat Password"
                placeholder="Repeat your password"
                required
                mt="md"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.currentTarget.value)}
              />
              <Group mt="lg">
                <Checkbox
                  label="I accept terms and conditions."
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.currentTarget.checked)}
                />
              </Group>
              <Button
                fullWidth
                mt="xl"
                onClick={handleSignup}
                disabled={!acceptedTerms}
              >
                Sign Up
              </Button>
            </Paper>
          </div>
        </Container>
      </div>
    );
}

export default Signup