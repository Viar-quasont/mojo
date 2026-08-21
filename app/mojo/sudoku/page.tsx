"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Grid = number[][];

const SIZE = 9;
const BOX = 3;

// ------------------------------------------------------------
// MOJO REACTIONS
// ------------------------------------------------------------

const happyMojos = [
  "/images/mojohappy1.png",
  "/images/mojohappy2.png",
  "/images/mojohappy3.png",
  "/images/mojohappy4.png",
  "/images/mojohappy5.png",
  "/images/mojohappy6.png",
  "/images/mojohappy7.png",
  "/images/mojohappy8.png",
  "/images/mojohappy9.png",
  "/images/mojohappy10.png",
  "/images/mojohappy11.png",
  "/images/mojohappy12.png",
  "/images/mojohappy13.png",
];

const sadMojos = [
  "/images/mojosad1.png",
  "/images/mojosad2.png",
  "/images/mojosad3.png",
  "/images/mojosad4.png",
];

const thinkingMojos = [
  "/images/mojothink.png",
  "/images/mojothink2.png",
  "/images/mojothink3.png",
  "/images/mojothink4.png",
  "/images/mojothink5.png",
];

const happyMessages = [
  "YAYYY!! 🌸",
  "THERE WE GO!!",
  "you're actually cooking 😭",
  "okayyy look at you 👀",
  "THAT'S MY BRO",
  "MOJO APPROVES 👍",
  "one step closer!!",
  "SEE? YOU GOT THIS",
  "niceee :)",
  "big brain behaviour",
  "LET HIM COOK 🗣️",
  "you ate that one",
];

const wrongMessages = [
  "nt man 😭 this one is sneaky",
  "it's okayyy, you've got this 💚",
  "nahhh that one got us 😭",
  "close!! try again",
  "okay that one was mean",
  "don't worry, we're chilling",
  "we got this :)",
  "one wrong number means absolutely nothing",
  "hehe nope 👀 try again",
];

const thinkingMessages = [
  "take your time :)",
  "hmmm... let's think",
  "Mojo is thinking too 🤔",
  "no rush",
  "we'll figure it out",
];

// ------------------------------------------------------------
// RANDOM HELPERS
// ------------------------------------------------------------

function randomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function randomDifferent<T>(
  array: T[],
  previous: T | null
): T {
  if (array.length <= 1) {
    return array[0];
  }

  let item = randomItem(array);

  while (item === previous) {
    item = randomItem(array);
  }

  return item;
}

// ------------------------------------------------------------
// SUDOKU GENERATOR
// ------------------------------------------------------------

function createEmptyGrid(): Grid {
  return Array.from(
    { length: SIZE },
    () => Array(SIZE).fill(0)
  );
}

function shuffle<T>(array: T[]): T[] {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [
      result[j],
      result[i],
    ];
  }

  return result;
}

function isSafe(
  grid: Grid,
  row: number,
  col: number,
  number: number
): boolean {
  for (let i = 0; i < SIZE; i++) {
    if (grid[row][i] === number) {
      return false;
    }

    if (grid[i][col] === number) {
      return false;
    }
  }

  const boxRow =
    Math.floor(row / BOX) * BOX;

  const boxCol =
    Math.floor(col / BOX) * BOX;

  for (let r = boxRow; r < boxRow + BOX; r++) {
    for (
      let c = boxCol;
      c < boxCol + BOX;
      c++
    ) {
      if (grid[r][c] === number) {
        return false;
      }
    }
  }

  return true;
}

function fillGrid(grid: Grid): boolean {
  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      if (grid[row][col] !== 0) {
        continue;
      }

      const numbers = shuffle([
        1, 2, 3, 4, 5,
        6, 7, 8, 9,
      ]);

      for (const number of numbers) {
        if (
          isSafe(
            grid,
            row,
            col,
            number
          )
        ) {
          grid[row][col] = number;

          if (fillGrid(grid)) {
            return true;
          }

          grid[row][col] = 0;
        }
      }

      return false;
    }
  }

  return true;
}

function generateSolvedGrid(): Grid {
  const grid = createEmptyGrid();

  fillGrid(grid);

  return grid;
}

// ------------------------------------------------------------
// SOLUTION COUNTER
// ------------------------------------------------------------

function countSolutions(
  grid: Grid,
  limit = 2
): number {
  let row = -1;
  let col = -1;

  let foundEmpty = false;

  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (grid[r][c] === 0) {
        row = r;
        col = c;
        foundEmpty = true;
        break;
      }
    }

    if (foundEmpty) {
      break;
    }
  }

  if (!foundEmpty) {
    return 1;
  }

  let count = 0;

  for (let number = 1; number <= 9; number++) {
    if (
      isSafe(
        grid,
        row,
        col,
        number
      )
    ) {
      grid[row][col] = number;

      count += countSolutions(
        grid,
        limit
      );

      grid[row][col] = 0;

      if (count >= limit) {
        return count;
      }
    }
  }

  return count;
}

// ------------------------------------------------------------
// CREATE PUZZLE
// ------------------------------------------------------------

function createPuzzle() {
  const solution =
    generateSolvedGrid();

  const puzzle =
    solution.map((row) => [...row]);

  /*
    81 total cells.

    We leave roughly 44 numbers visible.

    That gives enough information to make
    the puzzle approachable without making
    it feel like a children's worksheet.
  */

  const targetClues =
    42 +
    Math.floor(Math.random() * 5);

  const cellsToRemove =
    81 - targetClues;

  const positions = shuffle(
    Array.from(
      { length: 81 },
      (_, index) => index
    )
  );

  let removed = 0;

  for (
    const position of positions
  ) {
    if (removed >= cellsToRemove) {
      break;
    }

    const row =
      Math.floor(position / 9);

    const col =
      position % 9;

    const backup =
      puzzle[row][col];

    puzzle[row][col] = 0;

    const test =
      puzzle.map((r) => [...r]);

    const solutions =
      countSolutions(test, 2);

    /*
      Only keep the removal if the
      puzzle still has exactly ONE
      solution.
    */

    if (solutions === 1) {
      removed++;
    } else {
      puzzle[row][col] = backup;
    }
  }

  return {
    puzzle,
    solution,
  };
}

// ------------------------------------------------------------
// COMPONENT
// ------------------------------------------------------------

export default function Sudoku() {
  const [puzzle, setPuzzle] =
    useState<Grid>([]);

  const [solution, setSolution] =
    useState<Grid>([]);

  const [board, setBoard] =
    useState<Grid>([]);

  const [selectedNumber, setSelectedNumber] =
    useState<number | null>(null);

  const [message, setMessage] =
    useState(
      "okay... let's see what we've got 🤔"
    );

  const [mojoImage, setMojoImage] =
    useState(
      "/images/mojothinking1.png"
    );

  const [lastHappy, setLastHappy] =
    useState<string | null>(null);

  const [lastSad, setLastSad] =
    useState<string | null>(null);

  const [lastThinking, setLastThinking] =
    useState<string | null>(null);

  const [wrongCell, setWrongCell] =
    useState<string | null>(null);

  const [completed, setCompleted] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  // ----------------------------------------------------------
  // NEW GAME
  // ----------------------------------------------------------

  const newGame = () => {
    setLoading(true);

    /*
      setTimeout keeps the UI responsive
      while the puzzle is being generated.
    */

    setTimeout(() => {
      const generated =
        createPuzzle();

      setPuzzle(
        generated.puzzle
      );

      setSolution(
        generated.solution
      );

      setBoard(
        generated.puzzle.map(
          (row) => [...row]
        )
      );

      setSelectedNumber(null);

      setMessage(
        "okay... let's see what we've got 🤔"
      );

      const thinking =
        randomDifferent(
          thinkingMojos,
          lastThinking
        );

      setMojoImage(thinking);
      setLastThinking(thinking);

      setWrongCell(null);
      setCompleted(false);
      setLoading(false);
    }, 20);
  };

  useEffect(() => {
    newGame();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ----------------------------------------------------------
  // NUMBER COMPLETE?
  // ----------------------------------------------------------

  const numberIsComplete = (
    number: number
  ) => {
    if (!board.length) {
      return false;
    }

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (
          board[row][col] ===
          number
        ) {
          continue;
        }
      }
    }

    /*
      A number is complete when it
      appears exactly 9 times.
    */

    let count = 0;

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (
          board[row][col] ===
          number
        ) {
          count++;
        }
      }
    }

    return count === 9;
  };

  // ----------------------------------------------------------
  // NUMBER BUTTON
  // ----------------------------------------------------------

  const chooseNumber = (
    number: number
  ) => {
    setSelectedNumber(number);

    const thinking =
      randomDifferent(
        thinkingMojos,
        lastThinking
      );

    setMojoImage(thinking);
    setLastThinking(thinking);

    setMessage(
      randomItem(thinkingMessages)
    );
  };

  // ----------------------------------------------------------
  // CELL CLICK
  // ----------------------------------------------------------

  const handleCellClick = (
    row: number,
    col: number
  ) => {
    if (
      loading ||
      completed
    ) {
      return;
    }

    /*
      Can't edit original clues.
    */

    if (
      puzzle[row][col] !== 0
    ) {
      setMessage(
        "that's one of the clues :)"
      );

      return;
    }

    if (
      selectedNumber === null
    ) {
      setMessage(
        "pick a number first 🌸"
      );

      return;
    }

    const cellKey =
      `${row}-${col}`;

    /*
      WRONG ANSWER
    */

    if (
      selectedNumber !==
      solution[row][col]
    ) {
      setWrongCell(cellKey);

      const sad =
        randomDifferent(
          sadMojos,
          lastSad
        );

      setMojoImage(sad);
      setLastSad(sad);

      setMessage(
        randomDifferent(
          wrongMessages,
          message
        )
      );

      setTimeout(() => {
        setWrongCell(null);
      }, 450);

      return;
    }

    /*
      CORRECT ANSWER
    */

    const newBoard =
      board.map(
        (row) => [...row]
      );

    newBoard[row][col] =
      selectedNumber;

    setBoard(newBoard);

    const happy =
      randomDifferent(
        happyMojos,
        lastHappy
      );

    setMojoImage(happy);
    setLastHappy(happy);

    setMessage(
      randomDifferent(
        happyMessages,
        message
      )
    );

    /*
      CHECK WHETHER THE WHOLE
      PUZZLE IS COMPLETE.
    */

    let finished = true;

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (
          newBoard[r][c] !==
          solution[r][c]
        ) {
          finished = false;
        }
      }
    }

    if (finished) {
      setCompleted(true);

      setMessage(
        "YOU DID ITTT!! 🎉 Mojo is SO proud of you :)"
      );

      const finalMojo =
        randomDifferent(
          happyMojos,
          happy
        );

      setMojoImage(finalMojo);
      setLastHappy(finalMojo);
    }
  };

  // ----------------------------------------------------------
  // LOADING
  // ----------------------------------------------------------

  if (
    loading ||
    !board.length
  ) {
    return (
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#b6d5b6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "Arial, sans-serif",
          color: "#49363b",
        }}
      >
        <div
          style={{
            backgroundColor:
              "#fffdf8",
            padding: "40px 55px",
            borderRadius: "28px",
            border:
              "4px solid #e6b6c2",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "30px",
              marginBottom: "10px",
            }}
          >
            🌸
          </div>

          <p
            style={{
              margin: 0,
              fontSize: "20px",
              fontStyle: "italic",
            }}
          >
            Mojo is making you
            a Sudoku...
          </p>
        </div>
      </main>
    );
  }

  // ----------------------------------------------------------
  // MAIN PAGE
  // ----------------------------------------------------------

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#b6d5b6",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        padding:
          "28px 30px 45px",
        fontFamily:
          "Arial, sans-serif",
        color: "#332b28",
      }}
    >
      {/* BACK */}

      <Link
        href="/mojo/distractions"
        style={{
          position: "absolute",
          top: "22px",
          left: "25px",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor:
            "#fffdf8",
          color: "#49363b",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          boxShadow:
            "0 4px 12px rgba(70,50,40,0.15)",
          zIndex: 10,
        }}
      >
        ‹
      </Link>

      {/* TITLE */}

      <h1
        style={{
          textAlign: "center",
          margin:
            "5px 0 30px",
          fontSize:
            "clamp(30px, 4vw, 44px)",
          fontWeight: "400",
          fontStyle: "italic",
        }}
      >
        A little Sudoku break 🌸
      </h1>

      {/* CONTENT */}

      <div
        style={{
          width:
            "min(1150px, 96vw)",
          margin: "0 auto",
          display: "flex",
          justifyContent:
            "center",
          alignItems:
            "flex-start",
          gap: "55px",
          flexWrap: "wrap",
        }}
      >
        {/* SUDOKU */}

        <section
          style={{
            backgroundColor:
              "#fffdf8",
            borderRadius: "30px",
            padding: "24px",
            border:
              "4px solid #e4b4c0",
            boxShadow:
              "0 12px 35px rgba(70,50,40,0.12)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(9, 1fr)",
              width:
                "min(520px, 82vw)",
              aspectRatio: "1",
              border:
                "4px solid #6f967b",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor:
                "#ffffff",
            }}
          >
            {board.map(
              (row, rowIndex) =>
                row.map(
                  (
                    value,
                    colIndex
                  ) => {
                    const given =
                      puzzle[
                        rowIndex
                      ][
                        colIndex
                      ] !== 0;

                    const wrong =
                      wrongCell ===
                      `${rowIndex}-${colIndex}`;

                    const selected =
                      value ===
                        selectedNumber &&
                      value !== 0;

                    return (
                      <button
                        key={`${rowIndex}-${colIndex}`}
                        type="button"
                        onClick={() =>
                          handleCellClick(
                            rowIndex,
                            colIndex
                          )
                        }
                        style={{
                          border:
                            "none",
                          borderRight:
                            colIndex ===
                            8
                              ? "none"
                              : colIndex ===
                                  2 ||
                                colIndex ===
                                  5
                              ? "3px solid #6f967b"
                              : "1px solid #ccdacf",
                          borderBottom:
                            rowIndex ===
                            8
                              ? "none"
                              : rowIndex ===
                                  2 ||
                                rowIndex ===
                                  5
                              ? "3px solid #6f967b"
                              : "1px solid #ccdacf",
                          backgroundColor:
                            wrong
                              ? "#efadb7"
                              : selected
                              ? "#f4d1da"
                              : given
                              ? "#f1f6f2"
                              : value
                              ? "#fff0f3"
                              : "#ffffff",
                          color:
                            given
                              ? "#3f5c4a"
                              : "#9a5265",
                          fontSize:
                            "clamp(17px, 3vw, 29px)",
                          fontWeight:
                            given
                              ? "700"
                              : "600",
                          cursor:
                            given
                              ? "default"
                              : "pointer",
                          animation:
                            wrong
                              ? "shake 0.4s"
                              : "none",
                        }}
                      >
                        {value ===
                        0
                          ? ""
                          : value}
                      </button>
                    );
                  }
                )
            )}
          </div>
        </section>

        {/* RIGHT SIDE */}

        <section
          style={{
            width: "310px",
            maxWidth:
              "90vw",
            display: "flex",
            flexDirection:
              "column",
            gap: "18px",
          }}
        >
          {/* NUMBERS */}

          <div
            style={{
              backgroundColor:
                "#fffdf8",
              borderRadius: "28px",
              padding: "22px",
              border:
                "4px solid #e4b4c0",
              boxShadow:
                "0 10px 30px rgba(70,50,40,0.10)",
            }}
          >
            <p
              style={{
                textAlign:
                  "center",
                margin:
                  "0 0 18px",
                fontSize:
                  "20px",
                fontStyle:
                  "italic",
              }}
            >
              Pick a number 🌸
            </p>

            <div
              style={{
                display:
                  "grid",
                gridTemplateColumns:
                  "repeat(3, 1fr)",
                gap: "11px",
              }}
            >
              {Array.from(
                {
                  length: 9,
                },
                (_, index) =>
                  index + 1
              ).map(
                (number) => {
                  const complete =
                    numberIsComplete(
                      number
                    );

                  const active =
                    selectedNumber ===
                    number;

                  return (
                    <button
                      key={number}
                      type="button"
                      onClick={() =>
                        chooseNumber(
                          number
                        )
                      }
                      style={{
                        height:
                          "57px",
                        borderRadius:
                          "16px",
                        border:
                          active
                            ? "3px solid #a2586d"
                            : "2px solid #e4b4c0",
                        backgroundColor:
                          complete
                            ? "#b6d5b6"
                            : active
                            ? "#edc0cb"
                            : "#fff0f3",
                        color:
                          "#49363b",
                        fontSize:
                          "22px",
                        fontWeight:
                          "700",
                        cursor:
                          "pointer",
                      }}
                    >
                      {number}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {/* MOJO */}

          <div
            style={{
              backgroundColor:
                "#fffdf8",
              borderRadius: "28px",
              padding: "18px",
              border:
                "4px solid #b6d5b6",
              boxShadow:
                "0 10px 30px rgba(70,50,40,0.10)",
              textAlign:
                "center",
            }}
          >
            <div
              style={{
                width:
                  "190px",
                height:
                  "190px",
                margin:
                  "0 auto 10px",
                backgroundColor:
                  "#ffffff",
                borderRadius:
                  "22px",
                overflow:
                  "hidden",
                display:
                  "flex",
                alignItems:
                  "center",
                justifyContent:
                  "center",
              }}
            >
              <img
                src={mojoImage}
                alt="Mojo reaction"
                style={{
                  width:
                    "100%",
                  height:
                    "100%",
                  objectFit:
                    "contain",
                }}
              />
            </div>

            <p
              style={{
                margin:
                  "8px 0 3px",
                fontSize:
                  "18px",
                fontWeight:
                  "600",
                lineHeight:
                  "1.4",
              }}
            >
              {message}
            </p>
          </div>

          {/* NEW GAME */}

          <button
            type="button"
            onClick={
              newGame
            }
            style={{
              border:
                "2px solid #d6aeb9",
              backgroundColor:
                "#fffdf8",
              color:
                "#49363b",
              borderRadius:
                "18px",
              padding:
                "12px 22px",
              fontSize:
                "17px",
              fontWeight:
                "600",
              cursor:
                "pointer",
              boxShadow:
                "0 5px 15px rgba(70,50,40,0.08)",
            }}
          >
            New Sudoku 🌸
          </button>
        </section>
      </div>

      {/* COMPLETION POPUP */}

      {completed && (
        <div
          style={{
            position:
              "fixed",
            inset: 0,
            backgroundColor:
              "rgba(182,213,182,0.72)",
            display:
              "flex",
            alignItems:
              "center",
            justifyContent:
              "center",
            zIndex: 50,
            padding:
              "20px",
          }}
        >
          <div
            style={{
              width:
                "min(430px, 90vw)",
              backgroundColor:
                "#fffdf8",
              borderRadius:
                "30px",
              padding:
                "32px",
              textAlign:
                "center",
              border:
                "5px solid #e4b4c0",
              boxShadow:
                "0 15px 45px rgba(60,45,40,0.2)",
            }}
          >
            <div
              style={{
                fontSize:
                  "44px",
                marginBottom:
                  "8px",
              }}
            >
              🎉🌸
            </div>

            <h2
              style={{
                margin:
                  "0 0 8px",
                fontSize:
                  "30px",
              }}
            >
              YOU DID IT!!
            </h2>

            <p
              style={{
                fontSize:
                  "19px",
                lineHeight:
                  "1.5",
                margin:
                  "0 0 22px",
              }}
            >
              Mojo is SO proud
              of you :)
            </p>

            <button
              type="button"
              onClick={
                newGame
              }
              style={{
                border:
                  "none",
                backgroundColor:
                  "#e4b4c0",
                color:
                  "#49363b",
                borderRadius:
                  "16px",
                padding:
                  "12px 28px",
                fontSize:
                  "17px",
                fontWeight:
                  "700",
                cursor:
                  "pointer",
              }}
            >
              Another one 🌸
            </button>
          </div>
        </div>
      )}

      {/* HEART */}

      <button
        type="button"
        onClick={() =>
          alert(
            "Site not working, will get back to u in 30 min"
          )
        }
        aria-label="Mojo"
        style={{
          position:
            "fixed",
          right: "22px",
          bottom: "15px",
          width: "62px",
          height: "62px",
          border:
            "none",
          background:
            "transparent",
          cursor:
            "pointer",
          zIndex: 20,
        }}
      >
        <span
          style={{
            position:
              "absolute",
            inset: 0,
            color:
              "#754435",
            fontSize:
              "62px",
            lineHeight:
              "62px",
          }}
        >
          ♥
        </span>

        <span
          style={{
            position:
              "absolute",
            left: "50%",
            top: "48%",
            transform:
              "translate(-50%, -50%)",
            color:
              "#fff8e8",
            fontSize:
              "15px",
            fontWeight:
              "600",
          }}
        >
          :)
        </span>
      </button>

      <style jsx>{`
        @keyframes shake {
          0% {
            transform: translateX(0);
          }

          25% {
            transform: translateX(-5px);
          }

          50% {
            transform: translateX(5px);
          }

          75% {
            transform: translateX(-4px);
          }

          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </main>
  );
}