"use client";

import Link from "next/link";

export default function Choices() {
  const handleHeartClick = () => {
    alert("Site not working, will get back to u in 30 min");
  };

  const choiceStyle = {
    width: "320px",
    height: "265px",
    backgroundColor: "#a9c9df",
    border: "6px solid #e5f3ff",
    outline: "3px solid #a9c9df",
    borderRadius: "28px",
    padding: "20px",
    cursor: "pointer",
    boxSizing: "border-box" as const,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
        paddingTop: "35px",
      }}
    >
      {/* TITLE */}
      <h1
        style={{
          margin: 0,
          textAlign: "center",
          fontSize: "38px",
          fontWeight: "400",
          fontStyle: "italic",
          color: "#111",
          fontFamily: "Arial, sans-serif",
        }}
      >
        How can I help you feel better ?
      </h1>

      {/* LEFT CHOICE */}
      <Link
        href="/mojo/distractions"
        style={{
          position: "absolute",
          left: "7%",
          top: "150px",
          width: "320px",
          height: "265px",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <button
          type="button"
          style={choiceStyle}
        >
          <span
            style={{
              fontSize: "22px",
              lineHeight: "1.55",
              fontStyle: "italic",
              color: "#111",
              fontFamily: "Arial, sans-serif",
              textAlign: "center",
            }}
          >
            Would you like me
            <br />
            to distract you
            <br />
            so you don&apos;t have
            <br />
            to think about it
            <br />
            right now?
          </span>
        </button>
      </Link>

      {/* RIGHT CHOICE */}
      <Link
  href="/mojo/talk-about-it"
  style={{
    position: "absolute",
    right: "7%",
    top: "150px",
    width: "320px",
    height: "265px",
    textDecoration: "none",
    color: "inherit",
  }}
>
  <button
    type="button"
    style={choiceStyle}
  >
    <span
      style={{
        fontSize: "22px",
        lineHeight: "1.55",
        fontStyle: "italic",
        color: "#111",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      Would you like to
      <br />
      talk to me about
      <br />
      what&apos;s been
      <br />
      bothering you?
    </span>
  </button>
</Link>

      {/* MOJO */}
      <img
        src="/images/mojo2.png"
        alt="Mojo"
        style={{
          position: "absolute",
          width: "230px",
          height: "auto",
          left: "50%",
          bottom: "-5px",
          transform: "translateX(-50%)",
          display: "block",
          zIndex: 5,
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
          right: "25px",
          bottom: "20px",
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
            zIndex: 2,
          }}
        >
          :)
        </span>
      </button>
    </main>
  );
}