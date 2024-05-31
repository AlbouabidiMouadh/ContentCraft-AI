import MainContainer from "@/containers/MainContainer";
import React from "react";
import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import type { Metadata } from "next";

export const metadata = {
  title: `ContentCraft AI | Forget password`,
} satisfies Metadata;

const index = () => {
  return (
    // <MainContainer>
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
            fontSize: "rem(26px)",
            fontWeight: "900",
            fontFamily: "Greycliff CF, var(--mantine-font-family)",
          }}
          ta="center"
        >
          Forgot your password?
        </Title>
        <Text c="dimmed" fz="sm" ta="center">
          Enter your email to get a reset link
        </Text>
        <div style={{ color: "black" }}>
          <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
            <TextInput
              label="Your email"
              placeholder="you@email.com"
              required
            />
            <Group
              justify="space-between"
              mt="lg"
              // className={classes.controls}
            >
              <Anchor
                c="dimmed"
                size="sm"
                //  className={classes.control}
                href="/auth/login"
              >
                <Center inline>
                  <IconArrowLeft
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                  <Box ml={5}>Back to the login page</Box>
                </Center>
              </Anchor>
              <Button
              // className={classes.control}
              >
                Reset password
              </Button>
            </Group>
          </Paper>
        </div>
      </Container>
    </div>
    // </MainContainer>
  );
};

export default index;
