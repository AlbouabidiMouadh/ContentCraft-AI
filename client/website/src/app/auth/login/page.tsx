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
import { GoogleButton } from "@/components/GoogleButton";
import MainContainer from "@/containers/MainContainer";
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
          Welcome back!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor size="sm" href="/auth/signup">
            Create account
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
          <TextInput label="Email" placeholder="you@email.com" required />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor href="/auth/forgetPass" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </Container>
    </MainContainer>
  );
};

export default index;
