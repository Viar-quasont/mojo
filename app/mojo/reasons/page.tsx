"use client";

import Link from "next/link";
import { useState } from "react";

const reasons = [
  "You should live cus we still have so many library lock-ins to do.",
  "You should live cus one day you're supposed to be the first one in the group to get a DL and become the cool guy who can take everyone everywhere.",
  "You should live cus you haven't gotten your Best Delegate award yet.",
  "You should live cus you still have so many MUNs to go to.",
  "You should live cus one day you might actually become chair with Anirudh Anna.",
  "You should live cus one day you're going to be someone's Anirudh Anna.",
  "You should live cus you have no idea who you're going to become.",
  "You should live cus seventeen-year-old you doesn't get to decide that the entire rest of your life is pointless.",
  "You should live cus you haven't finished your story.",
  "You should live cus there are entire chapters of your life you haven't even met yet.",
  "You should live cus you haven't found out whether you're actually going to become a math professor or a vct player.",
  "You should live cus there are entire areas of mathematics you haven't discovered yet.",
  "You should live cus there are probably going to be future math concepts that make you go “WAIT THAT'S ACTUALLY SO COOL.”",
  "You should live cus you haven't gotten to randomly discover some stupid mathematical conjecture at 2 AM and then immediately tell someone about it.",
  "You should live cus I still need to hear you explain some completely insane math thing you researched and somehow become more excited about it than a normal person should be.",
  "You should live cus the Collatz Conjecture is not enough math for you.",
  "You should live to see it a proved theory",
  "You should live cus there are still graphs you haven't struggled with and then suddenly understood.",
  "You should live cus you haven't experienced the feeling of finally understanding something you thought you couldn't understand.",
  "You should live cus Srinivasan sir made you love math and you haven't gotten to see where that love takes you.",
  "You should live cus you still have things you can learn that haven't even been invented as interests in your brain yet.",
  "You should live cus you're a Chamber main and imo better then horcus (hhehehe bit of a stretch ik but still ur the 2nd best chamber after him)",
  "You should live cus Gold 1 is NOT the end of the Valorant arc.",
  "You should live cus you have not yet reached whatever rank you're eventually going to reach.",
  "You should live cus there are still people you haven't humbled in Valorant.",
  "You should live cus you still need to play on my account and somehow beat my brother again.",
  "You should live cus my brother is higher rank than you and that means he needs to be humbled again.cus i know for a fact ur better",
  "You should live cus you still have val matches where everything goes horribly wrong and we laugh about them afterward.",
  "You should live cus you haven't seen the nerfs or buffs agents are gona get.",
  "You should live cus there are still stupid Valorant clips waiting to happen.",
  "You still have soo many of my whiffs to see and laugh at",
  "You must witness my comback arc where my aim will be so goated ppl will ask for my rank",
  "You should live cus there are still moments where you are gona whiff which ive not seen yet .",
  "You should live cus there are still teammates you need to rage at for doing the dumbest thing imaginable.",
  "You should live cus there are still people you need to ragebait(like laya ).",
  "You should live cus there are still custom DMs you need to queue with me.",
  "You should live cus I still need you to teach me how to get better at Valorant.",
  "You should live cus helping me improve at Valorant is one of your responsibilities now.you signed up for it without realising when u queued Ascent dm",
  "You should live cus Sniper Arena isn't going to play itself.and bully kids",
  "You should live cus Roblox still has an unreasonable number of stupid things for u to do.",
  "You should live cus Geometry Dash has an unreasonable number of levels waiting to make you suffer.",
  "You should live cus there are still rhythm games where you can aggressively click tiles to music like your life depends on it.",
  "You should live cus there are still Sudoku puzzles that need to be solved by u",
  "You should live cus you haven't discovered every game that you're going to become weirdly obsessed with yet.",
  "You should live cus you haven't listened to every song that is going to become “your song” yet.",
  "You should live cus your playlist still has room for songs you haven't heard yet.",
  "You should live cus there is probably going to be some random song you hear one day and immediately put on repeat for three weeks.",
  "You should live cus you haven't had the “THIS SONG IS SO GOOD WHAT THE HELL” experience for every future song yet.",
  "You should live cus there are still artists you haven't discovered.",
  "You should live cus there are still songs that are going to become associated with some completely random amazing memory.",
  "You should live cus you haven't listened to every song by joji that future-you is going to obsess over.",
  "You should live cus there is still an unreasonable amount of music left to discover.",
  "You should live cus you haven't gone to VCT with us yet.",
  "You should live cus one day we need to actually sit at a VCT championship and watch the games together instead of just talking about doing it.",
  "You should live cus there is still a future VCT crowd waiting for you.",
  "You should live cus you haven't experienced the specific kind of happiness that comes from seeing people you love support you from the audience",
  "You should live cus we still need to make the stupid VCT trip happen.where u will play the game and i will play ticking away",
  "You should live cus Thailand exists.and uve not been there and so many other places",
  "You should live cus you haven't eaten that one random street chicken-and-rice place in Bangkok yet.",
  "You should live cus somewhere in Bangkok there is one specific 7/11 shop that you have to find.cus they have the best food and so many flavours of chips like shrimp!chickn!moree",
  "You should live cus you haven't gone bungee jumping yet.",
  "You should live cus you haven't done a bunch of things that future-you might randomly decide are the best experiences of your life.",
  "You should live cus you haven't seen everything there is to see in the sky yet.",
  "You should live cus you love beautiful skies and there are still thousands of sunsets you haven't seen.",
  "You should live cus there are going to be random evenings where you look up and think “damn.”",
  "You should live cus clouds are literally going to keep doing their stupid little art project every day.and each one is going to be difrnt",
  "You should live cus there are still rainy skies, sunsets, stars, weird clouds, and completely random pretty mornings waiting for you to take a picture.cus even if u dont believe it they work hard to look pretty so u will take a picture of them,dont let their hard work go to waste",
  "You should live cus cats exist",
  "You should live cus dogs exist.",
  "You should live cus you get excited whenever you see a cat or dog and that is objectively a reason to keep encountering cats and dogs.",
  "You should live cus Molecule exists.",
  "You should live cus you still haven't had enough Molecule moments.",
  "You should live cus Nacho still needs to run away from you like you're a wanted criminal.",
  "You should live cus one day Nacho might finally stop running away from you.",
  "You should live cus actually getting Nacho to like you would be an achievement worth unlocking.",
  "You should live cus you haven't met all the random animals that are going to become important to you yet.",
  "You should live cus you said you love all animals and therefore the animal population has a responsibility to keep providing you with content.",
  "You should live cus you still need to have your own pet someday.",
  "You should live cus you've always wanted a big sister and you haven't gotten to see all the weird ways life can give you people who become family without technically being family.",
  "You should live cus Laya needs her bro.",
  "You should live cus you and Laya have an entire sibling relationship built around bullying each other for absolutely no reason.",
  "You should live cus there are still thousands of stupid arguments for you and Laya to have over literally nothing.",
  "You should live cus Laya can laugh for ten straight minutes at the smallest joke and someone needs to witness that nonsense with her.",
  "You should live cus you haven't seen what stupid thing Laya is going to say next.",
  "You should live cus you haven't finished ragebaiting Laya.",
  "You should live cus you haven't been ragebaited by Laya enough.espsoli with rehan mb roshan :)",
  "You should live cus you and your friends still have so many more badminton matches to play .",
  "You should live cus we still need to study, order food, talk for ages, and somehow barely study during future library lock-ins.",
  "You should live cus “library lock-in” has somehow become an entire genre of friendship at this point.",
  "You should live cus we still need more moments where we go to study and somehow end up talking about everything except studying.",
  "You should live cus there are still random conversations that are going to start with something normal and become completely unhinged within five minutes.",
  "You should live cus we still need more videos of you walking “nonchalantly” to a fonk song like you're in the most serious edit ever made.",
  "You should live cus that video is objectively too stupid for it to be the last one.",
  "You should live cus there are definitely more opportunities for you to act emo, weird, cringe, and “kawaii” on purpose.",
  "You should live cus somebody has to keep saying stupid shit and making everyone else laugh.",
  "You should live cus you get genuinely excited when you learn something new, and that part of you deserves to keep existing.",
  "You should live cus I love watching you get proud of yourself when you finally understand something you've been struggling with.",
  "You should live cus you haven't seen how many times future-you is going to surprise current-you.",
  "You should live cus you can become better without having to become perfect first.",
  "You should live cus the person you are today is allowed to become someone completely different tomorrow.",
  "You should live cus you don't need to know exactly what your life is going to look like for it to be worth finding out.",
  "You should live cus you have not met the version of yourself who gets to experience all of this yet. Please don't make him disappear before he gets the chance.",
];

export default function Reasons() {
  const [page, setPage] = useState(0);
  const [zoom, setZoom] = useState(100);

  const pages = [
    reasons.slice(0, 26),
    reasons.slice(26, 52),
    reasons.slice(52, 77),
    reasons.slice(77, 102),
  ];

  const currentPage = pages[page];

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#b6d5b6",
        color: "#17251c",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* PDF-STYLE TOOLBAR */}
      <header
        style={{
          height: "64px",
          backgroundColor: "#304d3b",
          color: "#f4f8f2",
          display: "flex",
          alignItems: "center",
          padding: "0 22px",
          gap: "18px",
          boxSizing: "border-box",
          boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
        }}
      >
        <Link
          href="/mojo/talk-about-it"
          aria-label="Go back"
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            backgroundColor: "#eef6ee",
            color: "#304d3b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            fontSize: "25px",
            flexShrink: 0,
          }}
        >
          ←
        </Link>

        <span
          style={{
            fontSize: "17px",
            fontWeight: "600",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "430px",
          }}
        >
          Reasons why you must, must live
        </span>

        <div style={{ flex: 1 }} />

        {/* PAGE NUMBER */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "16px",
          }}
        >
          <span
            style={{
              backgroundColor: "#f4f8f2",
              color: "#17251c",
              padding: "7px 12px",
              borderRadius: "4px",
              minWidth: "20px",
              textAlign: "center",
            }}
          >
            {page + 1}
          </span>

          <span>/ 4</span>
        </div>

        {/* ZOOM */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            marginLeft: "10px",
          }}
        >
          <button
            type="button"
            onClick={() => setZoom(Math.max(70, zoom - 10))}
            style={toolbarButton}
          >
            −
          </button>

          <span
            style={{
              minWidth: "55px",
              textAlign: "center",
              fontSize: "15px",
            }}
          >
            {zoom}%
          </span>

          <button
            type="button"
            onClick={() => setZoom(Math.min(130, zoom + 10))}
            style={toolbarButton}
          >
            +
          </button>
        </div>
      </header>

      {/* DOCUMENT AREA */}
      <section
        style={{
          height: "calc(100vh - 64px)",
          overflowY: "auto",
          padding: "35px 20px 70px",
          boxSizing: "border-box",
          backgroundColor: "#a9c8ae",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            minWidth: "100%",
          }}
        >
          {/* PAPER */}
          <article
            style={{
              width: `${794 * (zoom / 100)}px`,
              minHeight: `${1123 * (zoom / 100)}px`,
              backgroundColor: "#fffef9",
              boxShadow: "0 4px 18px rgba(39, 65, 47, 0.28)",
              padding: `${65 * (zoom / 100)}px ${70 * (zoom / 100)}px`,
              boxSizing: "border-box",
              transition: "width 0.15s ease, min-height 0.15s ease",
              flexShrink: 0,
            }}
          >
            <h1
              style={{
                textAlign: "center",
                fontSize: `${30 * (zoom / 100)}px`,
                fontWeight: "400",
                fontStyle: "italic",
                margin: `0 0 ${38 * (zoom / 100)}px`,
                color: "#253b2b",
              }}
            >
              Reasons Why You Should Live
            </h1>

            <div
              style={{
                height: "1px",
                backgroundColor: "#8fa995",
                marginBottom: `${30 * (zoom / 100)}px`,
              }}
            />

            {currentPage.map((reason, index) => {
              const actualNumber =
                pages.slice(0, page).reduce(
                  (total, previousPage) => total + previousPage.length,
                  0
                ) +
                index +
                1;

              return (
                <p
                  key={actualNumber}
                  style={{
                    fontSize: `${15.5 * (zoom / 100)}px`,
                    lineHeight: "1.55",
                    margin: `0 0 ${13 * (zoom / 100)}px`,
                    color: "#202b23",
                  }}
                >
                  <strong>{actualNumber}.</strong> {reason}
                </p>
              );
            })}
          </article>
        </div>

        {/* PDF PAGE CONTROLS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "18px",
            marginTop: "25px",
          }}
        >
          <button
            type="button"
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            style={{
              ...pageButton,
              opacity: page === 0 ? 0.4 : 1,
            }}
          >
            ←
          </button>

          <span
            style={{
              color: "#304d3b",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            {page + 1} / 4
          </span>

          <button
            type="button"
            disabled={page === pages.length - 1}
            onClick={() => setPage(page + 1)}
            style={{
              ...pageButton,
              opacity: page === pages.length - 1 ? 0.4 : 1,
            }}
          >
            →
          </button>
        </div>
      </section>
    </main>
  );
}

const toolbarButton: React.CSSProperties = {
  width: "34px",
  height: "34px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "transparent",
  color: "#f4f8f2",
  fontSize: "22px",
  cursor: "pointer",
};

const pageButton: React.CSSProperties = {
  width: "42px",
  height: "42px",
  border: "none",
  borderRadius: "50%",
  backgroundColor: "#304d3b",
  color: "#ffffff",
  fontSize: "22px",
  cursor: "pointer",
};