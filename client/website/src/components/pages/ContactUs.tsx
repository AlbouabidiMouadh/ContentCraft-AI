"use client";
import MainContainer from "@/containers/MainContainer";
import React, { useState } from "react";
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Notification,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";

const ContactUs = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  const [submissionStatus, setSubmissionStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(form.values);
      const response = await axios.post("/api/contact", form.values);
      setSubmissionStatus({ type: "success", message: response.data.message });
      form.reset();
    } catch (error) {
      setSubmissionStatus({
        type: "error",
        message: "Failed to submit message",
      });
    }
  };

  return (
    <MainContainer>
      <div style={{ height: "70vh", margin: "64px 15%" }}>
        <form onSubmit={handleSubmit}>
          <Title
            order={2}
            size="h1"
            style={{ fontFamily: "sans-serif" }}
            fw={1200}
            ta="center"
          >
            Contact Us
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
            <TextInput
              label="Name"
              placeholder="Your name"
              name="name"
              variant="filled"
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Email"
              placeholder="Your email"
              name="email"
              variant="filled"
              {...form.getInputProps("email")}
            />
          </SimpleGrid>

          <TextInput
            label="Subject"
            placeholder="Subject"
            mt="md"
            name="subject"
            variant="filled"
            {...form.getInputProps("subject")}
          />
          <Textarea
            mt="md"
            label="Message"
            placeholder="Your message"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            {...form.getInputProps("message")}
          />

          <Group justify="center" mt="xl">
            <Button type="submit" size="md">
              Send message
            </Button>
          </Group>

          {submissionStatus && (
            <Notification
              title={submissionStatus.type === "success" ? "Success" : "Error"}
              color={submissionStatus.type === "success" ? "teal" : "red"}
              mt="xl"
            >
              {submissionStatus.message}
            </Notification>
          )}
        </form>
      </div>
    </MainContainer>
  );
};

export default ContactUs;
