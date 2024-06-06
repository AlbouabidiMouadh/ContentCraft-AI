"use client";
import React, { useState } from "react";
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
  Notification,
} from "@mantine/core";
import { IconArrowLeft, IconCheck, IconX } from "@tabler/icons-react";
import axios from "axios";

const Forgetpassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    message: "",
    type: "",
    show: false,
  });

  const handleRecover = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/recover",
        { email }
      );
      setNotification({
        message: response.data.message,
        type: "success",
        show: true,
      });
    } catch (error) {
      setNotification({
        message: error.response
          ? error.response.data.message
          : "Error sending recovery email",
        type: "error",
        show: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        paddingTop: "100px",
        backgroundColor: "#1A1B1E",
        height: "100vh",
        color: "white",
      }}
    >
      <Container size={500} my={40}>
        <Title
          style={{
            fontSize: rem(26),
            fontWeight: 900,
            fontFamily: "Greycliff CF, var(--mantine-font-family)",
            textAlign: "center",
          }}
        >
          Forgot your password?
        </Title>
        <Text color="dimmed" size="sm" style={{ textAlign: "center" }}>
          Enter your email to get your new password
        </Text>
        <div style={{ color: "black" }}>
          <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
            <TextInput
              label="Your email"
              placeholder="you@email.com"
              required
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <Group justify="space-between" mt="lg">
              <Anchor c="dimmed" size="sm" href="/auth/user/login">
                <Center inline>
                  <IconArrowLeft
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                  <Box ml={5}>Back to the login page</Box>
                </Center>
              </Anchor>
              <Button onClick={handleRecover}>Reset password</Button>
            </Group>
          </Paper>
        </div>
        {notification.show && (
          <Notification
            icon={
              notification.type === "success" ? (
                <IconCheck size="1.1rem" />
              ) : (
                <IconX size="1.1rem" />
              )
            }
            color={notification.type === "success" ? "teal" : "red"}
            title={notification.type === "success" ? "Success" : "Error"}
            onClose={() => setNotification({ ...notification, show: false })}
            mt="xl"
          >
            {notification.message}
          </Notification>
        )}
      </Container>
    </div>
  );
};

export default Forgetpassword;
