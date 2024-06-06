"use client";
import MainContainer from "@/containers/MainContainer";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@nextui-org/button";
import audioServiceImage from "@/public/illustrations/Char 12.png";
import { ServiceType } from "@/types/service";
import { useParams } from "next/navigation";

const AudioPage = () => {
  const [service, setService] = useState<ServiceType | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams<{ service: string; section: string }>();

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        // Fetch service data
        const serviceResponse = await axios.get(
          `http://localhost:4000/api/applicationByName/${params.service}`
        );
        const serviceData = serviceResponse.data;
        console.log(serviceData);
        // Update state with fetched data
        setService(serviceData[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [params.slug]);

  const handleService = async () => {
    if (!service) return;
    if (!file && !text) return;

    const form = new FormData();
    if (file) {
      form.append(service.inputType, file);
    } else {
      form.append(service.inputType, text);
    }

    try {
      const response = await axios.post(`http://localhost:5000${service.url}`, form, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      setDownloadUrl(url);
    } catch (error) {
      console.log(error);
    }
  };

  const renderInput = () => {
    if (!service) return null;

    switch (service.inputType) {
      case "text":
        return (
          <input
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              display: "block",
              marginBottom: "20px",
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        );
      case "audio":
        return (
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            style={{
              display: "block",
              marginBottom: "20px",
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        );
      case "image":
        return (
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            style={{
              display: "block",
              marginBottom: "20px",
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        );
      case "video":
        return (
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            style={{
              display: "block",
              marginBottom: "20px",
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        );
      default:
        return null;
    }
  };

  const renderOutput = () => {
    if (!downloadUrl) return null;

    switch (service?.outputType) {
      case "audio":
        return (
          <audio controls style={{ width: "100%", marginTop: "20px" }}>
            <source src={downloadUrl} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        );
      case "image":
        return (
          <img
            src={downloadUrl}
            alt="Processed output"
            style={{
              display: "block",
              marginTop: "20px",
              width: "100%",
              borderRadius: "5px",
            }}
          />
        );
      case "video":
        return (
          <video controls style={{ width: "100%", marginTop: "20px" }}>
            <source src={downloadUrl} type="video/mp4" />
            Your browser does not support the video element.
          </video>
        );
      case "text":
        return (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              whiteSpace: "pre-wrap",
            }}
          >
            {downloadUrl}
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner if you have one
  }

  if (!service) {
    return <div>No data available</div>;
  }

  return (
    <MainContainer>
      <div style={{ margin: "0 10%", padding: "20px 0" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "50px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "32px", margin: "20px 0" }}>
              {service.name}
            </h1>
            <p style={{ fontSize: "18px", marginBottom: "20px" }}>
              {service.description}
            </p>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
            justifySelf: "center",
          }}
        >
          <Image
            src={audioServiceImage.src}
            alt={service.name}
            width={300}
            height={300}
            style={{ borderRadius: "10px", margin: "auto" }}
          />
        </div>
        {service.features && (
          <div style={{ marginBottom: "50px", textAlign: "center" }}>
            <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
              Application Features
            </h2>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                textAlign: "left",
                maxWidth: "600px",
                margin: "0 auto",
                fontSize: "18px",
              }}
            >
              {service.features.map((feature, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div style={{ marginBottom: "50px", textAlign: "center" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            Upload and Process
          </h2>
          <div style={{ width: "100%", maxWidth: "700px", margin: "auto" }}>
            {renderInput()}
            <Button
              onClick={handleService}
              color="primary"
              style={{ marginRight: "10px" }}
            >
              Process
            </Button>
            {downloadUrl && (
              <Button
                as="a"
                href={downloadUrl}
                download="output"
                color="secondary"
              >
                Download Output
              </Button>
            )}
            {renderOutput()}
          </div>
        </div>
        <div style={{ marginBottom: "50px", textAlign: "center" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            User Reviews
          </h2>
          <div
            style={{ maxWidth: "600px", margin: "0 auto", textAlign: "left" }}
          >
            {service.reviews && service.reviews.length > 0 ? (
              service.reviews.map((review, index) => (
                <div
                  key={index}
                  style={{
                    borderBottom: "1px solid #ccc",
                    paddingBottom: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <p style={{ margin: "0" }}>
                    <strong>{review.user}</strong>
                  </p>
                  <p style={{ margin: "5px 0" }}>{review.review}</p>
                  <p style={{ margin: "0", color: "#FFD700" }}>
                    {"★".repeat(review.stars)}
                    {"☆".repeat(5 - review.stars)}
                  </p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default AudioPage;
