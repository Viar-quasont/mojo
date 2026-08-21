"use client";

import Link from "next/link";
import { useState } from "react";

const videos = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `/videos/animal${i + 1}.mp4`,
}));

export default function AnimalVideos() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const handleHeartClick = () => {
    alert("Site not working, will get back to u in 30 min");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#b6d5b6",
        padding: "22px 28px 45px",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
        color: "#3f3026",
      }}
    >
      {/* BACK BUTTON */}
      <Link
        href="/mojo/distractions"
        aria-label="Back to distractions"
        style={{
          position: "fixed",
          top: "18px",
          left: "18px",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: "#604936",
          color: "#fff8e8",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "27px",
          border: "3px solid #e9dfcf",
          zIndex: 100,
          boxSizing: "border-box",
        }}
      >
        ←
      </Link>

      {/* TITLE */}
      <h1
        style={{
          margin: "0",
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "400",
          fontStyle: "italic",
        }}
      >
        Funny Animal Videos 🐾
      </h1>

      <p
        style={{
          margin: "4px 0 22px",
          textAlign: "center",
          fontSize: "17px",
          fontStyle: "italic",
        }}
      >
        tiny animals doing extremely important things 🦔🌿
      </p>

      {/* VIDEO GRID */}
      <section
        style={{
          width: "min(1180px, 96vw)",
          margin: "0 auto",
          backgroundColor: "#d8c8ac",
          border: "6px solid #f4eee2",
          outline: "3px solid #80634e",
          borderRadius: "30px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4, minmax(0, 1fr))",
            gap: "18px",
          }}
        >
          {videos.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setSelectedVideo(video.id)}
              style={{
                border: "4px solid #80634e",
                backgroundColor: "#e8ddc8",
                borderRadius: "18px",
                padding: "8px",
                cursor: "pointer",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16 / 9",
                  backgroundColor: "#80634e",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <video
                  src={video.src}
                  muted
                  preload="metadata"
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    pointerEvents: "none",
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: "7px",
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#4b382b",
                }}
              >
                animal moment #{video.id} 🐾
              </div>
            </button>
          ))}
        </div>

        <p
          style={{
            margin: "18px 0 0",
            textAlign: "center",
            fontSize: "14px",
            fontStyle: "italic",
          }}
        >
          click any video to watch it 🌿
        </p>
      </section>

      {/* MOJO */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "14px",
        }}
      >
        <img
          src="/images/mojohappy7.png"
          alt="Mojo"
          style={{
            width: "105px",
            height: "105px",
            objectFit: "contain",
            display: "block",
            margin: "0 auto",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            fontSize: "24px",
            marginTop: "-4px",
          }}
        >
          🦔 🌿 🐾
        </div>
      </div>

      {/* VIDEO POPUP */}
      {selectedVideo !== null && (
        <div
          onClick={() => setSelectedVideo(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(45, 35, 27, 0.78)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "25px",
            boxSizing: "border-box",
            zIndex: 200,
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              width: "min(850px, 94vw)",
              backgroundColor: "#d8c8ac",
              border: "6px solid #f4eee2",
              outline: "3px solid #80634e",
              borderRadius: "25px",
              padding: "15px",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
              style={{
                position: "absolute",
                right: "10px",
                top: "10px",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "3px solid #80634e",
                backgroundColor: "#e8ddc8",
                color: "#3f3026",
                fontSize: "22px",
                fontWeight: "700",
                cursor: "pointer",
                zIndex: 5,
              }}
            >
              ×
            </button>

            <video
              key={selectedVideo}
              src={`/videos/animal${selectedVideo}.mp4`}
              controls
              autoPlay
              playsInline
              style={{
                width: "100%",
                maxHeight: "75vh",
                display: "block",
                borderRadius: "15px",
                backgroundColor: "#3f3026",
              }}
            />

            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: "18px",
                fontStyle: "italic",
                fontWeight: "700",
              }}
            >
              animal moment #{selectedVideo} 🐾🦔
            </div>
          </div>
        </div>
      )}

      {/* SECRET HEART */}
      <button
        type="button"
        onClick={handleHeartClick}
        aria-label="Secret button"
        style={{
          position: "fixed",
          right: "18px",
          bottom: "14px",
          width: "62px",
          height: "62px",
          border: "none",
          background: "transparent",
          padding: 0,
          cursor: "pointer",
          zIndex: 150,
        }}
      >
        <span
          style={{
            position: "absolute",
            inset: 0,
            color: "#754435",
            fontSize: "62px",
            lineHeight: "62px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          ♥
        </span>

        <span
          style={{
            position: "absolute",
            left: "50%",
            top: "48%",
            transform: "translate(-50%, -50%)",
            color: "#fff8e8",
            fontSize: "15px",
            fontWeight: "500",
            lineHeight: "1",
            zIndex: 2,
          }}
        >
          :)
        </span>
      </button>
    </main>
  );
}