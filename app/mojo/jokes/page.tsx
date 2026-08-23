"use client";

import { useState } from "react";
import Link from "next/link";

const jokes = [
  ["A Spanish magician told everyone he would disappear. He said, “Uno, dos…”", "He disappeared without a tres."],
  ["Some people have trouble sleeping…", "But I can do it with my eyes closed."],
  ["Did you hear about the circus fire?", "It was in-tents."],
  ["What is the loudest pet you can get?", "A trumpet."],
  ["Why should you never trust atoms?", "Because they make up everything."],
  ["Simba was moving too slowly.", "So I told him to Mufasa."],
  ["What do you call a sick eagle?", "Illegal."],
  ["A man walks into his home and realizes that all his lamps were stolen.", "He was delighted."],
  ["I just crashed my new Kia.", "Now I have a Nokia."],
  ["What do you call a belt made with watches?", "A waist of time."],
  ["What do you call fake spaghetti?", "An impasta!"],
  ["Why did the math book look sad?", "Because it had too many problems."],
  ["Why are frogs so happy?", "They eat whatever bugs them."],
  ["Why was the computer cold?", "It left its Windows open!"],
  ["Why did the picture go to jail?", "Because it was framed!"],
  ["What do you call an alligator in a vest?", "An investigator!"],
  ["How does a scientist freshen her breath?", "With experi-mints!"],
  ["How do you organize a space party?", "You planet!"],
  ["What did one wall say to the other wall?", "“I’ll meet you at the corner!”"],
  ["Why don’t you ever trust stairs?", "They’re always up to something."],
  ["What’s a pirate’s favorite letter?", "You might think it’s R, but it’s the C they truly love."],
  ["Why did the student eat his homework?", "Because the teacher said it was a piece of cake!"],
  ["What do you call a can opener that doesn’t work?", "A can’t opener!"],
  ["Why did the tomato turn red?", "Because it saw the salad dressing!"],
  ["Why did the banana go to the doctor?", "Because it wasn’t peeling well!"],
  ["How does a train eat?", "It goes chew chew!"],
  ["Why do seagulls fly over the sea?", "Because if they flew over the bay, they’d be bagels!"],
  ["What did one hat say to the other?", "“You stay here, I’ll go on ahead.”"],
  ["Why did the skeleton go to the party alone?", "He had no body to go with!"],
  ["What do you call a baby kangaroo?", "A pouch potato!"],
  ["Why are ghosts bad liars?", "Because you can see right through them!"],
  ["What did the zero say to the eight?", "“Nice belt!”"],
  ["Why was the equal sign so humble?", "Because he knew he wasn’t less than or greater than anyone else."],
  ["What do you call a sleeping bull?", "A bulldozer!"],
  ["What’s a cat’s favorite color?", "Purr-ple!"],
  ["Why did the banker switch careers?", "He lost interest!"],
  ["Why can’t your nose be 12 inches long?", "Because then it would be a foot!"],
  ["What kind of tree fits in your hand?", "A palm tree!"],
  ["How do you make an octopus laugh?", "With ten-tickles!"],
  ["What do you call a cow with no legs?", "Ground beef."],
  ["Why did the frog take the bus to work?", "His car got toad away!"],
  ["What do you call a pig that does karate?", "A pork chop!"],
  ["What do you call a group of unorganized cats?", "A cat-astrophe!"],
  ["Why don’t cows have any money?", "Because the farmers milk them dry!"],
  ["How do you fix a cracked pumpkin?", "With a pumpkin patch!"],
  ["What kind of music do mummies listen to?", "Wrap music!"],
  ["What kind of shoes do ninjas wear?", "Sneakers!"],
  ["How do you stop an astronaut’s baby from crying?", "You rocket!"],
  ["What did the big flower say to the little flower?", "“Hi, bud!”"],
  ["What’s a frog’s favorite candy?", "Lollihops!"],
  ["Why did the cat sit on the computer?", "It wanted to keep an eye on the mouse!"],
  ["Have you ever tried to eat a clock?", "It’s very time-consuming."],
  ["Why is “dark” spelled with a K and not a C?", "Because you can’t C in the dark."],
  ["Everyone told Sam not to sing…", "But Samsung anyway."],
  ["Don’t fart in an Apple Store.", "Because they don’t have Windows."],
  ["I stopped telling jokes about unemployed people because…", "None of them worked."],
  ["What sounds like a sneeze and is made of leather?", "A shoe."],
  ["It doesn’t matter if you’re tall or short, thin or fat, rich or poor. At the end of the day…", "It’s night."],
  ["I asked my wife if I was the only one she had ever been with.", "She said yes. All the others were nines and tens."],
  ["It’s illegal to laugh out loud in Hawaii.", "You have to keep it to a low ha."],
  ["What do you call a fish wearing a bow tie?", "Sofishticated. 🎩🐟"],
  ["I’m reading a book about anti-gravity.", "It’s impossible to put down."],
  ["What do you call fake spaghetti?", "An impasta. 🍝"],
  ["Why did the bicycle fall over?", "Because it was two-tired."],
  ["What do you call cheese that isn’t yours?", "Nacho cheese. 🧀"],
  ["Why did the scarecrow win an award?", "Because he was outstanding in his field. 🌾"],
  ["What do you call a sleeping bull?", "A bulldozer. 🐂"],
  ["I told my wife she should embrace her mistakes.", "She gave me a hug."],
  ["Why don’t skeletons fight each other?", "They don’t have the guts."],
  ["What kind of music do balloons hate?", "Pop. 🎈"],
  ["Why did the tomato blush?", "Because it saw the salad dressing. 🍅"],
  ["What do you call a cow with no legs?", "Ground beef."],
  ["Why was six afraid of seven?", "Because seven ate nine."],
  ["What did the janitor say when he jumped out of the closet?", "“Supplies!”"],
  ["I wondered why the baseball kept getting bigger.", "Then it hit me."],
  ["What do you call a pile of cats?", "A meowtain. 🐈"],
  ["Why did the coffee file a police report?", "It got mugged. ☕"],
  ["I don’t trust stairs.", "They’re always up to something."],
  ["What did the ocean say to the beach?", "Nothing. It just waved. 🌊"],
  ["Why did the computer go to the doctor?", "It had a virus."],
  ["What do you call a line of rabbits hopping backward?", "A receding hare-line."],
  ["What did one hat say to the other?", "“You stay here. I’ll go on ahead.”"],
  ["I used to hate facial hair…", "But then it grew on me."],
  ["What do you call a magician who loses his magic?", "Ian."],
  ["Who has two buts and kills people?", "An assassin."],
  ["Why did the computer get fat?", "He accepted too many cookies."],
  ["Why did the old man fall down the well?", "Because he couldn’t see that well."],
  ["Wanna hear a paper joke?", "Never mind. It’s tear-able."],
  ["What has five toes but isn’t your foot?", "My foot."],
  ["What do you call a man with a rubber toe?", "Roberto."],
  ["Why do cows have hooves and not feet?", "Because they lack toes."],
  ["What do you call a man who lost his car?", "Carlos."],
  ["What do you call a cow who plays the guitar?", "A moo-sician."],
  ["How does a non-binary person kill people?", "They slash them."],
  ["Why did the mushroom get invited to every party?", "Because he was a fun-guy."],
  ["Why did the pencil get promoted?", "Because it was on point."],
  ["What do you call a sleeping dinosaur?", "A dino-snore."],
  ["What do you call a lazy kangaroo?", "A pouch potato."],
  ["Why don’t eggs tell jokes?", "They might crack each other up."],
  ["What do you call a cow during an earthquake?", "A milkshake."],
  ["Why did the skeleton skip the party?", "He had no body to go with."],
  ["Why did the tomato lose the race?", "It couldn’t ketchup."],
  ["What do you call a nervous javelin thrower?", "Shakespeare."],
  ["What do you call a cow that just gave birth?", "De-calf-inated."],
  ["Why did the barber win the race?", "He knew how to cut corners."],
  ["What do you call a bear caught in the rain?", "A drizzly bear."],
  ["Why did the astronaut break up with his girlfriend?", "He needed space."],
  ["I told my suitcase there would be no vacation this year.", "Now I’m dealing with emotional baggage."],
  ["My girlfriend told me to stop acting like a flamingo.", "So I had to put my foot down."],
  ["I told my boss I needed a raise because three companies were after me.", "He asked which ones. I said, “Gas, electric, and water.”"],
  ["My teacher said, “Name two pronouns.”", "I said, “Who, me?”"],
  ["What do you do if you’re addicted to seaweed?", "Sea kelp (seek help)."],
  ["What kind of key opens a banana?", "A monkey."],
  ["What do you call a gender-neutral person who is lactose intolerant?", "Non-buy-dairy."],
  ["Did you hear about the italian chef that died?", "He pastaway."],
  ["My credit card got declined at the sweater store this morning.", "The cashier had to ask for my Cardagain."],
  ["The builder asked me to pay for chimney installation but I asked him.", "Isn’t it on the house? He went quiet."],
  ["What do you get when you cross a carpenter and a shoemaker?", "Woodnshoe like to know 😏"],
  ["How do you make a waterbed more bouncy?", "Use spring water."],
  ["What do u call a grandma on speed dial?", "Insta-gram."],
  ["I asked my brother to pass me the travel pamphlet this morning.", "He said brochure XD."],
];

export default function Jokes() {
  const [jokeIndex, setJokeIndex] = useState(
  () => Math.floor(Math.random() * jokes.length)
);

  const [revealed, setRevealed] = useState(false);

  const [question, answer] = jokes[jokeIndex];

  const nextJoke = () => {
    setJokeIndex((current) => (current + 1) % jokes.length);
    setRevealed(false);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/images/Rabbit.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* BACK */}
      <Link
        href="/mojo/distractions"
        style={{
          position: "absolute",
          left: "22px",
          top: "20px",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          backgroundColor: "#fff8e8",
          color: "#111",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "25px",
          zIndex: 10,
        }}
      >
        &lt;
      </Link>

      {/* FLASHCARD */}
      <div
        onClick={() => {
          if (!revealed) {
            setRevealed(true);
          }
        }}
        style={{
          position: "absolute",
          left: "7%",
          right: "7%",
          top: "11%",
          bottom: "12%",
          borderRadius: "30px",
          border: "7px solid rgba(255,255,255,0.9)",
          outline: "3px solid rgba(91,174,225,0.65)",
          backgroundColor: "rgba(255,255,255,0.82)",
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          cursor: revealed ? "default" : "pointer",
          textAlign: "center",
        }}
      >
        {/* QUESTION */}
        <div
          style={{
            fontSize: "30px",
            lineHeight: "1.55",
            fontWeight: "500",
            color: "#222",
            fontFamily: "Arial, sans-serif",
            maxWidth: "850px",
          }}
        >
          {question}
        </div>

        {/* ANSWER */}
        {revealed && (
          <>
            <img
  src="/images/mojolol.png"
  alt="Mojo laughing"
  style={{
    width: "120px",
    height: "120px",
    objectFit: "contain",
    marginBottom: "20px",
  }}
/>

            <div
              style={{
                marginTop: "15px",
                fontSize: "30px",
                lineHeight: "1.5",
                fontWeight: "700",
                color: "#222",
                fontFamily: "Arial, sans-serif",
                maxWidth: "850px",
              }}
            >
              {answer}
            </div>

            {/* NEXT */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextJoke();
              }}
              style={{
                marginTop: "35px",
                border: "none",
                borderRadius: "25px",
                padding: "12px 30px",
                backgroundColor: "#fff8e8",
                color: "#222",
                fontSize: "18px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 3px 8px rgba(0,0,0,0.12)",
              }}
            >
              Next :)
            </button>
          </>
        )}

        {/* TAP MESSAGE */}
        {!revealed && (
          <div
            style={{
              marginTop: "35px",
              fontSize: "17px",
              fontStyle: "italic",
              color: "#777",
            }}
          >
            tap to reveal 👀
          </div>
        )}
      </div>

      {/* HEART */}
      <button
        type="button"
        onClick={() => {
          alert("Site not working, will get back to u in 30 min");
        }}
        style={{
          position: "absolute",
          right: "18px",
          bottom: "15px",
          width: "62px",
          height: "62px",
          border: "none",
          background: "transparent",
          padding: 0,
          cursor: "pointer",
          zIndex: 20,
        }}
      >
        <span
          style={{
            position: "absolute",
            inset: 0,
            color: "#754435",
            fontSize: "62px",
            lineHeight: "62px",
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
            fontSize: "16px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          :)
        </span>
      </button>
    </main>
  );
}
