"use client";

import { useState } from "react";
import Link from "next/link";

const videos = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  src: `/videos/baby${index + 1}.mp4`,
}));

const messages = [
  "hehe 😭",
  "okay this one is cute",
  "😭😭😭",
  "Mojo approves",
  "why is this so funny",
  "HELP 😭",
  "okay that was good",
  "10/10 distraction",
];

export default function BabyVideos() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [message, setMessage] = useState("pick a video ♡");

  const openVideo = (id: number) => {
    setSelectedVideo(id);

    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)];

    setMessage(randomMessage);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setMessage("pick a video ♡");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#b6d5b6",
        padding: "28px",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
        overflowY: "auto",
      }}
    >
      {/* BACK BUTTON */}
      <Link
        href="/mojo/distractions"
        style={{
          position: "fixed",
          top: "20px",
          left: "22px",
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          backgroundColor: "#fffdf7",
          color: "#222",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
          zIndex: 50,
        }}
      >
        ←
      </Link>

      {/* TITLE */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "22px",
          marginTop: "8px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "38px",
            fontWeight: "500",
            fontStyle: "italic",
            color: "#111",
          }}
        >
          little things to make you smile ♡
        </h1>

        <p
          style={{
            margin: "8px 0 0",
            fontSize: "17px",
            color: "#526852",
          }}
        >
          {message}
        </p>
      </div>

      {/* TV / BROWSER FRAME */}
      <section
        style={{
          width: "min(1200px, 94vw)",
          margin: "0 auto",
          backgroundColor: "#e9e9e9",
          borderRadius: "28px",
          border: "7px solid #363636",
          boxSizing: "border-box",
          boxShadow: "0 12px 30px rgba(0,0,0,0.16)",
          overflow: "hidden",
        }}
      >
        {/* TOP BAR */}
        <div
          style={{
            height: "58px",
            backgroundColor: "#363636",
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
            gap: "9px",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              width: "11px",
              height: "11px",
              borderRadius: "50%",
              backgroundColor: "#ff6b6b",
            }}
          />

          <span
            style={{
              width: "11px",
              height: "11px",
              borderRadius: "50%",
              backgroundColor: "#fff36b",
            }}
          />

          <span
            style={{
              width: "11px",
              height: "11px",
              borderRadius: "50%",
              backgroundColor: "#8b8b8b",
            }}
          />

          <div
            style={{
              marginLeft: "18px",
              color: "#eeeeee",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Mojo's little video corner
          </div>
        </div>

        {/* VIDEO GRID */}
        <div
          style={{
            padding: "28px",
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "22px",
            backgroundColor: "#f1f1f1",
            boxSizing: "border-box",
          }}
        >
          {videos.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => openVideo(video.id)}
              style={{
                border: "none",
                padding: 0,
                background: "transparent",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              {/* VIDEO THUMBNAIL */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  backgroundColor: "#c9c9c9",
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "4px solid #ffffff",
                  boxSizing: "border-box",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
                }}
              >
                <video
                  src={video.src}
                  preload="metadata"
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* PLAY BUTTON */}
                <span
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "54px",
                    height: "54px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "25px",
                    color: "#333",
                    paddingLeft: "4px",
                    boxSizing: "border-box",
                  }}
                >
                  ▶
                </span>
              </div>

              {/* VIDEO TITLE */}
              <div
                style={{
                  padding: "9px 5px 2px",
                  color: "#222",
                  fontSize: "17px",
                  fontWeight: "700",
                }}
              >
                funny baby moment {video.id}
              </div>
            </button>
          ))}
        </div>
      </section>


{/* SECRET HEART BUTTON */}
<button
  type="button"
  onClick={() => {
    alert("Site not working, will get back to u in 30 min");
  }}
  aria-label="Secret button"
  style={{
    position: "fixed",
    right: "24px",
    bottom: "18px",
    width: "62px",
    height: "62px",
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
    zIndex: 30,
  }}
>
  {/* HEART */}
  <span
    style={{
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      color: "#754435",
      fontSize: "62px",
      lineHeight: "62px",
      fontFamily: "Arial, sans-serif",
    }}
  >
    ♥
  </span>

  {/* :) INSIDE HEART */}
  <span
    style={{
      position: "absolute",
      left: "50%",
      top: "48%",
      transform: "translate(-50%, -50%)",
      color: "#fff8e8",
      fontSize: "15px",
      fontWeight: "500",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1",
      zIndex: 2,
    }}
  >
    :)
  </span>
</button>

      {/* VIDEO PLAYER MODAL */}
      {selectedVideo !== null && (
        <div
          onClick={closeVideo}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(35,45,35,0.72)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
            boxSizing: "border-box",
            zIndex: 100,
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              width: "min(950px, 92vw)",
              backgroundColor: "#f4f4f4",
              borderRadius: "26px",
              padding: "18px",
              boxSizing: "border-box",
              boxShadow: "0 15px 50px rgba(0,0,0,0.3)",
            }}
          >
            {/* MODAL TOP */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "21px",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                funny baby moment {selectedVideo}
              </span>

              <button
                type="button"
                onClick={closeVideo}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "#b6d5b6",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>

            {/* ACTUAL VIDEO */}
            <video
              key={selectedVideo}
              src={`/videos/baby${selectedVideo}.mp4`}
              controls
              autoPlay
              playsInline
              style={{
                width: "100%",
                maxHeight: "70vh",
                borderRadius: "18px",
                backgroundColor: "#111",
                display: "block",
              }}
            />

            <div
              style={{
                textAlign: "center",
                marginTop: "12px",
                fontSize: "16px",
                color: "#596859",
              }}
            >
              take a little break ♡
            </div>
          </div>
        </div>
      )}
    </main>
  );
}