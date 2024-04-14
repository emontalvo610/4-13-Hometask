"use client";
import "./globals.css";
import { Header } from "../components/Header";
import axios from "../service/axiosConfig";
import html2canvas from "html2canvas";
import { useEffect, useRef } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        html2canvas(containerRef.current).then((canvas) => {
          const imageData = canvas.toDataURL("image/png");
          console.log({ imageData });
          console.log("canvas calling");
          axios
            .post("/capture", { imageData })
            .then(() => {
              console.log("Image data sent to server");
            })
            .catch((error) => {
              console.error("Error sending image data:", error);
            });
        });
      }
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <html ref={containerRef}>
      <head>
        <title>Box Shadow CSS Generator</title>
      </head>
      <body className="bg-white mx-[20px] my-[50px]">
        <Header />
        {children}
      </body>
    </html>
  );
}
