import React from "react";
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
import type { Metadata } from "next";

export const metadata = { title: `Admin | Login` } satisfies Metadata;

const page = () => {
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
            fontFamily: " Greycliff CF, var(--mantine-font-family)",
            fontWeight: "900",
          }}
        >
          Welcome back
        </Title>
        <div style={{ color: "black" }}>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="admin@email.com" required />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
            />
            <Button fullWidth mt="xl" color="black">
              Sign in
            </Button>
          </Paper>
        </div>
      </Container>
    </div>
  );
};

export default page;
