"use client";

import Link from "next/link";

export default function Distractions() {
  const handleHeartClick = () => {
    alert("Site not working, will get back to u in 30 min");
  };

  const cardStyle = {
    width: "30%",
    maxWidth: "400px",
    minWidth: "280px",
    height: "250px",
    backgroundColor: "#a9c9df",
    border: "6px solid #e5f3ff",
    outline: "3px solid #a9c9df",
    borderRadius: "30px",
    color: "#111",
    cursor: "pointer",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box" as const,
    textAlign: "center" as const,
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#b6d5b6",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        padding: "35px 3% 20px",
      }}
    >
      {/* BACK BUTTON */}
      <Link
        href="/mojo/choices"
        aria-label="Back to choices"
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          backgroundColor: "#222",
          color: "#fff",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "32px",
          fontFamily: "Arial, sans-serif",
          zIndex: 50,
          border: "2px solid #555",
          boxSizing: "border-box",
        }}
      >
        ←
      </Link>

      {/* TOP ROW */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "5%",
          boxSizing: "border-box",
        }}
      >
        {/* SUDOKU */}
        <Link
          href="/mojo/sudoku"
          style={{
            ...cardStyle,
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          Play sudoku
        </Link>

        {/* JOKES */}
        <Link
          href="/mojo/jokes"
          style={{
            ...cardStyle,
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          read jokes
        </Link>

        {/* BABY VIDEOS */}
        <Link
          href="/mojo/baby-videos"
          style={{
            ...cardStyle,
            fontSize: "27px",
            fontWeight: "700",
          }}
        >
          Funny baby vid
        </Link>
      </div>

      {/* BOTTOM ROW */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "5%",
          marginTop: "20px",
          boxSizing: "border-box",
        }}
      >
        {/* CHESS */}
        <Link
          href="/mojo/chess"
          style={{
            ...cardStyle,
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          Play chess ♟
        </Link>

        {/* MOJO SPACE */}
        <div
          style={{
            width: "30%",
            maxWidth: "400px",
            minWidth: "280px",
            height: "250px",
          }}
        />

        {/* FUNNY ANIMAL VIDEOS */}
        <Link
          href="/mojo/animal-videos"
          style={{
            ...cardStyle,
            fontSize: "26px",
            fontWeight: "700",
          }}
        >
          Funny animal vid
        </Link>
      </div>

      {/* CENTER MOJO */}
      <img
        src="/images/mojo3.png"
        alt="Mojo"
        style={{
          position: "absolute",
          left: "50%",
          top: "69%",
          transform: "translate(-50%, -50%)",
          width: "330px",
          height: "330px",
          objectFit: "contain",
          display: "block",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* SECRET HEART BUTTON */}
      <button
        type="button"
        onClick={handleHeartClick}
        aria-label="Secret button"
        style={{
          position: "fixed",
          right: "18px",
          bottom: "15px",
          width: "62px",
          height: "62px",
          border: "none",
          background: "transparent",
          padding: 0,
          cursor: "pointer",
          zIndex: 50,
        }}
      >
        {/* HEART */}
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

        {/* FACE */}
        <span
          style={{
            position: "absolute",
            left: "50%",
            top: "48%",
            transform: "translate(-50%, -50%)",
            color: "#fff8e8",
            fontSize: "16px",
            fontWeight: "500",
            fontFamily: "Arial, sans-serif",
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