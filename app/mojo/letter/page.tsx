import Link from "next/link";

export default function Letter() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#b6d5b6",
        position: "relative",
        boxSizing: "border-box",
        paddingTop: "25px",
        paddingBottom: "50px",
      }}
    >
      {/* BACK BUTTON */}
      <Link
        href="/mojo/talk-about-it"
        aria-label="Go back"
        style={{
          position: "fixed",
          top: "25px",
          left: "25px",
          width: "86px",
          height: "86px",
          borderRadius: "50%",
          backgroundColor: "#222",
          border: "4px solid #6b6b6b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          zIndex: 50,
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "48px",
            fontFamily: "Arial, sans-serif",
            lineHeight: "1",
            marginTop: "-4px",
          }}
        >
          ←
        </span>
      </Link>

      {/* DOCUMENT VIEWER */}
      <div
        style={{
          width: "min(900px, 88%)",
          margin: "0 auto",
          backgroundColor: "#fdfdf9",
          minHeight: "calc(100vh - 50px)",
          boxShadow: "0 8px 30px rgba(50, 80, 50, 0.22)",
          borderRadius: "4px",
          padding: "70px 85px 90px",
          boxSizing: "border-box",
          fontFamily: "Georgia, 'Times New Roman', serif",
          color: "#222",
        }}
      >
        {/* DOCUMENT TITLE */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "32px",
            lineHeight: "1.3",
            fontWeight: "500",
            margin: "0 0 55px",
          }}
        >
          Reasons Why You Should Not Die
          <br />
          <span
            style={{
              fontSize: "22px",
              fontStyle: "italic",
            }}
          >
            (if u ever feel “there is no reason for me not to die”)
          </span>
        </h1>

        {/* LETTER */}
        <div
          style={{
            fontSize: "19px",
            lineHeight: "1.85",
          }}
        >
          <p>
            If the reason you're thinking about dying is because you genuinely
            feel like there is no reason for you not to, then please just listen
            to me for a minute.
          </p>

          <p>
            I'm not going to try to convince you that your life is perfect
            because I know it isn't. I'm not going to tell you that everything
            is magically going to be okay because I don't know that either. And
            I'm not going to tell you that you have to stay because other people
            need you. I already told you I don't want this to feel like pressure
            or guilt.
          </p>

          <p>
            I just want you to <strong>wait.</strong>
            <br />
            Please.
          </p>

          <p>
            You don't have to decide anything right now. You don't have to
            decide whether you're going to be happy, whether your life is worth
            it, whether you forgive yourself, or what you're going to do with
            your future. You don't have to figure any of that out tonight.
          </p>

          <p>
            Just don't make a permanent decision while you're feeling like this.
          </p>

          <p>
            Because I know how your brain works. You'll take every mistake you've
            ever made, every thing you hate about yourself, every time you've
            felt like you weren't good enough, put all of it together, and
            somehow use all of it as proof that you shouldn't exist.
          </p>

          <p>
            And I really need you to understand that{" "}
            <strong>
              feeling like you're a horrible person is not the same thing as
              actually being one.
            </strong>
          </p>

          <p>
            Especially with everything that happened with Neha.
          </p>

          <p>
            I know you fucked up. I'm not going to lie to you and say you didn't.
            You were mean to her. You hurt her. You didn't give her the love she
            deserved, and you regret it so much that you've started believing
            you don't deserve happiness because of it.
          </p>

          <p>
            But please don't turn{" "}
            <strong>
              “I did something I wish I could take back”
            </strong>{" "}
            into <strong>“I should die.”</strong>
          </p>

          <p>
            Those aren't the same thing.
          </p>

          <p>
            You can regret something. You can be ashamed of something. You can
            wish you had known better. You can wish you could go back. You can
            accept that somebody might need time before they can trust you
            again. You can spend years becoming a better person.
          </p>

          <p>
            You can do all of that <strong>without destroying yourself.</strong>
          </p>

          <p>
            And I know you think you should've known better. But you're 17.
            You're still learning. You don't magically become a completely
            mature person and stop making mistakes just because you turned a
            certain age.
          </p>

          <p>
            Sometimes you only understand something after you've fucked up.
            Sometimes you only realize how badly you hurt someone after you've
            already done it. That doesn't make what happened okay. It means you
            learned something the hard way.
          </p>

          <p>
            So please let the lesson stay.
            <br />
            <strong>You don't have to take yourself with it.</strong>
          </p>

          <p>
            And if you're thinking, “but I don't deserve to be happy anymore,”
            then okay. Don't think about being happy right now.
          </p>

          <p>
            Just think about <strong>not dying tonight.</strong>
          </p>

          <p>
            That's it.
          </p>

          <p>
            You don't need to love your life. You don't need to be excited about
            tomorrow. You don't need some huge reason. You can literally just
            stay because you haven't decided what happens next yet.
          </p>

          <p>
            You can leave the question unanswered.
          </p>

          <p>
            You can tell me, “I don't know if I want to live,” and I will sit
            with you in that uncertainty. You don't have to convince me that
            you're okay. You don't have to pretend. You don't have to make this
            sound less serious because you're scared of worrying me.
          </p>

          <p>
            Tell me exactly how bad it is.
          </p>

          <p>
            Even if all you can say is “I want to die.” Even if you think you're
            going to annoy me. Even if you think I'm going to judge you.
          </p>

          <p>
            I won't.
          </p>

          <p>
            And please remember the promise you made me.
          </p>

          <p>
            <strong>
              You promised me that if you ever started thinking about killing
              yourself, or if you ever decided that you were actually going to
              do it, you would tell me.
            </strong>
          </p>

          <p>
            Please don't forget that promise now.
          </p>

          <p>
            I'm not bringing it up to guilt you or trap you into staying. I just
            want you to remember that you already gave me permission to know when
            things get this bad.
          </p>

          <p>
            So please use it.
            <br />
            Tell me.
          </p>

          <p>
            You don't have to make it sound serious enough. You don't have to
            explain everything perfectly. You don't have to wait until you've
            decided what you're going to do.
          </p>

          <p>
            Just tell me.
          </p>

          <p>
            And please don't sit alone with this trying to fight your own brain.
          </p>

          <p>
            Come find me. Call me. Text me. Tell Laya. Tell someone.
            <br />
            Just <strong>don't be alone with it.</strong>
          </p>

          <p>
            And if you're thinking that you can just make the decision now and
            everyone will eventually move on, please don't make that decision for
            everyone.
          </p>

          <p>
            But more importantly, <strong>don't make it for yourself.</strong>
          </p>

          <p>
            You don't know what you're going to think later. You don't know what
            you're going to feel later. You don't know who you're going to
            become.
          </p>

          <p>
            And I know right now you might not care about any of that.
          </p>

          <p>
            That's okay.
            <br />
            You don't have to care yet.
          </p>

          <p>
            Just give yourself the chance to care later.
          </p>

          <p>
            Please.
          </p>

          <p>
            I am not asking you to promise me your whole life.
            <br />
            I'm asking you for <strong>right now.</strong>
          </p>

          <p>
            Stay until I can talk to you.
            <br />
            Stay until someone can sit beside you.
            <br />
            Stay until this wave comes down a little.
            <br />
            Stay even if you're angry. Stay even if you think I'm being stupid.
            Stay even if you don't believe a single word of this.
          </p>

          <p>
            You can tell me later that this didn't help. You can tell me later
            that I'm being weird. You can tell me later that I wrote way too
            much.
          </p>

          <p>
            I genuinely don't care.
          </p>

          <p>
            <strong>Just be here to tell me.</strong>
          </p>

          <p>
            Please stay.
            <br />
            Just for now.
            <br />
            We'll figure out everything else later.
          </p>

          {/* ENDING */}
          <div
            style={{
              marginTop: "65px",
              paddingTop: "35px",
              borderTop: "1px solid #c5d8c5",
              textAlign: "center",
              fontSize: "27px",
              fontStyle: "italic",
            }}
          >
            Please stay, for now :(
          </div>
        </div>
      </div>
    </main>
  );
}