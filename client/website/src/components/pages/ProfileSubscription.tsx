"use client";
import React, { useEffect, useState } from "react";
import ProfileSidenav from "@/components/ProfilePage/ProfileSidenav";
import ProfileContainer from "@/containers/ProfileContainer";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Button } from "@nextui-org/button";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

// SubscriptionCard Component
type SubscriptionCardProps = {
  username: string;
  email: string;
  subscriptionType: "Free" | "Premium";
  startDate: string;
  endDate: string;
};

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  username,
  email,
  subscriptionType,
  startDate,
  endDate,
}) => {
  const router = useRouter();
  return (
    <Card
      style={{
        width: "400px",
        margin: "20px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          component="div"
          style={{ marginBottom: "15px", fontWeight: "bold" }}
        >
          {username}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          style={{ marginBottom: "10px" }}
        >
          {email}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          style={{ marginTop: "15px", fontWeight: "bold" }}
        >
          Subscription Type: {subscriptionType}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ marginTop: "10px" }}
        >
          Start Date: {new Date(startDate).toLocaleDateString()}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ marginBottom: "20px" }}
        >
          End Date: {new Date(endDate).toLocaleDateString()}
        </Typography>
        <Button
          onClick={() => router.push("/subscription")}
          color="primary"
          style={{ backgroundColor: "#0070f3" }}
          fullWidth
        >
          Manage Subscription
        </Button>
      </CardContent>
    </Card>
  );
};

// ProfileSubscription Component
const ProfileSubscription = () => {
  const router = useRouter();
  const [session, setSession] = useState<any>(null);
  const [subscriptionData, setSubscriptionData] =
    useState<SubscriptionCardProps | null>({
      username: "string",
      email: "string",
      subscriptionType: "Free",
      startDate: "string",
      endDate: "string",
    });

  useEffect(() => {
    const sessionData = Cookies.get("session");
    if (!sessionData) {
      router.push("/auth/user/login");
    } else {
      const parsedSession = JSON.parse(sessionData);
      setSession(parsedSession);
      fetchSubscriptionData(parsedSession);
    }
  }, [router]);

  const fetchSubscriptionData = async (session: any) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/user/${session.user.id}/subscription`,
        {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      );
      setSubscriptionData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!session || !subscriptionData) {
    return null; // or a loading spinner
  }

  return (
    <ProfileContainer>
      <div style={{ display: "flex" }}>
        <ProfileSidenav pageName="Subscription" />
        <Box sx={{ padding: "50px", width: "100%" }}>
          <Typography
            variant="h4"
            component="div"
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            Subscription Details
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <SubscriptionCard
              username={subscriptionData.username}
              email={subscriptionData.email}
              subscriptionType={subscriptionData.subscriptionType}
              startDate={subscriptionData.startDate}
              endDate={subscriptionData.endDate}
            />
          </Box>
        </Box>
      </div>
    </ProfileContainer>
  );
};

export default ProfileSubscription;
