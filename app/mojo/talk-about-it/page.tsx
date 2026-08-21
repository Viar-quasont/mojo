"use client";

import Link from "next/link";

export default function TalkAboutIt() {
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
      {/* BACK BUTTON */}
      <Link
        href="/mojo/choices"
        aria-label="Go back"
        style={{
          position: "absolute",
          top: "25px",
          left: "25px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#222",
          border: "4px solid #6b6b6b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          zIndex: 20,
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "28px",
            fontFamily: "Arial, sans-serif",
            lineHeight: "1",
            marginTop: "-4px",
          }}
        >
          ←
        </span>
      </Link>

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
        Okay, let&apos;s talk about it.
      </h1>

      {/* THREE CHOICES */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "35px",
          marginTop: "70px",
        }}
      >
        {/* OPTION 1 */}
        <Link
          href="/mojo/reasons"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <button type="button" style={choiceStyle}>
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
              Reasons Why You Must Live
              <br />
              <span style={{ fontSize: "17px" }}>
                A reminder of the people, moments, and possibilities that make
                staying worth it. ❤️
              </span>
            </span>
          </button>
        </Link>

        {/* OPTION 2 */}
        <Link
          href="/mojo/letter"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <button type="button" style={choiceStyle}>
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
              A Letter You Should Read 💌
              <br />
              <span style={{ fontSize: "17px" }}>
                For the moments when you feel like you have no reason to keep
                going.
              </span>
            </span>
          </button>
        </Link>

        {/* OPTION 3 */}
        <Link
          href="/mojo/talk-to-me"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <button type="button" style={choiceStyle}>
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
              Talk to Someone IRL
              <br />
              🐻
              <br />
              <span style={{ fontSize: "17px" }}>
                You don&apos;t have to go through this alone.
                <br />
              </span>
            </span>
          </button>
        </Link>
      </div>

      {/* MOJO IMAGE */}
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
    </main>
  );
}