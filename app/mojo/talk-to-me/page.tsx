"use client";

import Link from "next/link";

export default function TalkToSomeoneIRL() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#b6d5b6",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        padding: "35px 30px 150px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* BACK BUTTON */}
      <Link
        href="/mojo/talk-about-it"
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
          margin: "0 0 45px",
          textAlign: "center",
          fontSize: "38px",
          fontWeight: "400",
          fontStyle: "italic",
          color: "#111",
        }}
      >
        Talk to Someone IRL
      </h1>

      {/* MESSAGE */}
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          backgroundColor: "#e5f3ff",
          border: "6px solid #a9c9df",
          outline: "3px solid #a9c9df",
          borderRadius: "28px",
          padding: "45px 55px",
          boxSizing: "border-box",
          color: "#111",
          fontSize: "19px",
          lineHeight: "1.7",
        }}
      >
        <p>
          You know those people you have in your life?
        </p>

        <p>
          The ones you talk to about random shit for hours. The ones you play
          games with. The ones who know when you're being weird, annoying,
          quiet, or just not yourself.
        </p>

        <p>
          <strong>Those people care about you.</strong>
        </p>

        <p>
          So if something is wrong, you don't have to sit there thinking
          you're bitching by telling them. You're not.
        </p>

        <p>
          You're not bothering them by saying that you're having a bad day.
          You're not bothering them because you need someone. You're not
          bothering them because you don't know what to do.
        </p>

        <p>
          And you don't need to make it sound serious enough before you say
          something.
        </p>

        <p>
          You can literally just text:{" "}
          <strong>“hey, can I talk to you?”</strong> or even just a{" "}
          <strong>"hey"</strong>. That's it. You don't need to know what you're
          going to say after that. Let them answer.
        </p>

        <p>
          Because the people who care about you would probably rather know that
          something is wrong than find out later that you were sitting there
          dealing with it alone.
        </p>

        <p>
          So think of someone. Someone you trust. Someone who makes you feel
          comfortable. Someone you know would pick up. <strong>Text them.</strong>
        </p>

        <p>
          Not tomorrow. Not when you have the perfect words. Just send the
          message.
        </p>

        <p>
          And if you don't know who to text, or you just want company,{" "}
          <a
            href="https://wa.me/917397310874"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#111",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            text me :)
          </a>
        </p>
      </div>

      {/* MOJO IMAGE */}
      <img
        src="/images/mojo2.png"
        alt="Mojo"
        style={{
          position: "absolute",
          width: "180px",
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