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
import MainContainer from "@/containers/MainContainer";
import React from "react";
import type { Metadata } from "next";

export const metadata = { title: `ContentCraft AI | Signup` } satisfies Metadata;

const index = () => {
  return (
    <MainContainer>
      <Container size={420} my={40}>
        <Title
          ta="center"
          style={{
            fontFamily: " Greycliff CF, var(--mantine-font-family)",
            fontWeight: "900",
          }}
        >
          Welcome to ContentCraft AI!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Already have an account?{" "}
          <Anchor size="sm" href="/auth/login">
            Login
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Group grow mb="md" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>
            {/* in case i have added other login ways and buttons */}
          </Group>

          <Divider
            label="Or continue with email"
            labelPosition="center"
            my="lg"
          />
          <TextInput
            mt="md"
            label="First name"
            placeholder="your first name"
            required
          />
          <TextInput
            mt="md"
            label="Last name"
            placeholder="your last name"
            required
          />
          <TextInput
            mt="md"
            label="Email"
            placeholder="you@email.com"
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <PasswordInput
            label="Repeat Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="I accept terms and conditions." />
          </Group>
          <Button fullWidth mt="xl">
            Sign Up
          </Button>
        </Paper>
      </Container>
    </MainContainer>
  );
};

export default index;
