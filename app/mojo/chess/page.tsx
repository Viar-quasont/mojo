"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Piece = {
  type: "p" | "r" | "n" | "b" | "q" | "k";
  color: "w" | "b";
};

type Board = (Piece | null)[][];

const SIZE = 8;

const createInitialBoard = (): Board => [
  [
    { type: "r", color: "b" },
    { type: "n", color: "b" },
    { type: "b", color: "b" },
    { type: "q", color: "b" },
    { type: "k", color: "b" },
    { type: "b", color: "b" },
    { type: "n", color: "b" },
    { type: "r", color: "b" },
  ],
  Array.from({ length: 8 }, () => ({ type: "p", color: "b" })),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array.from({ length: 8 }, () => ({ type: "p", color: "w" })),
  [
    { type: "r", color: "w" },
    { type: "n", color: "w" },
    { type: "b", color: "w" },
    { type: "q", color: "w" },
    { type: "k", color: "w" },
    { type: "b", color: "w" },
    { type: "n", color: "w" },
    { type: "r", color: "w" },
  ],
];

const symbols: Record<string, string> = {
  wp: "♙",
  wr: "♖",
  wn: "♘",
  wb: "♗",
  wq: "♕",
  wk: "♔",
  bp: "♟",
  br: "♜",
  bn: "♞",
  bb: "♝",
  bq: "♛",
  bk: "♚",
};

function cloneBoard(board: Board): Board {
  return board.map((row) =>
    row.map((piece) => (piece ? { ...piece } : null))
  );
}

function inside(row: number, col: number) {
  return row >= 0 && row < SIZE && col >= 0 && col < SIZE;
}

function validMove(
  board: Board,
  fromRow: number,
  fromCol: number,
  toRow: number,
  toCol: number
) {
  const piece = board[fromRow][fromCol];
  const target = board[toRow][toCol];

  if (!piece) return false;

  if (target && target.color === piece.color) {
    return false;
  }

  const dr = toRow - fromRow;
  const dc = toCol - fromCol;

  const absRow = Math.abs(dr);
  const absCol = Math.abs(dc);

  if (piece.type === "p") {
    const direction = piece.color === "w" ? -1 : 1;
    const startRow = piece.color === "w" ? 6 : 1;

    if (dc === 0 && dr === direction && !target) {
      return true;
    }

    if (
      dc === 0 &&
      dr === direction * 2 &&
      fromRow === startRow &&
      !target &&
      !board[fromRow + direction][fromCol]
    ) {
      return true;
    }

    if (
      absCol === 1 &&
      dr === direction &&
      target &&
      target.color !== piece.color
    ) {
      return true;
    }

    return false;
  }

  if (piece.type === "n") {
    return (
      (absRow === 2 && absCol === 1) ||
      (absRow === 1 && absCol === 2)
    );
  }

  if (piece.type === "k") {
    return absRow <= 1 && absCol <= 1;
  }

  const sameRow = dr === 0;
  const sameCol = dc === 0;
  const diagonal = absRow === absCol;

  if (piece.type === "r" && !sameRow && !sameCol) {
    return false;
  }

  if (piece.type === "b" && !diagonal) {
    return false;
  }

  if (
    piece.type === "q" &&
    !sameRow &&
    !sameCol &&
    !diagonal
  ) {
    return false;
  }

  const stepRow = dr === 0 ? 0 : dr > 0 ? 1 : -1;
  const stepCol = dc === 0 ? 0 : dc > 0 ? 1 : -1;

  let row = fromRow + stepRow;
  let col = fromCol + stepCol;

  while (row !== toRow || col !== toCol) {
    if (!inside(row, col)) return false;

    if (board[row][col]) {
      return false;
    }

    row += stepRow;
    col += stepCol;
  }

  return true;
}

export default function Chess() {
  const [board, setBoard] = useState<Board>(() =>
    createInitialBoard()
  );

  const [selected, setSelected] =
    useState<[number, number] | null>(null);

  const [turn, setTurn] = useState<"w" | "b">("w");

  const [gameOver, setGameOver] = useState(false);

  const [message, setMessage] = useState(
    "your move!! 🦔"
  );

  const [mojoImage, setMojoImage] = useState(
    "/images/mojohappy7.png"
  );

  const possibleMoves = useMemo(() => {
    if (!selected) return [];

    const [row, col] = selected;

    const moves: [number, number][] = [];

    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        if (validMove(board, row, col, r, c)) {
          moves.push([r, c]);
        }
      }
    }

    return moves;
  }, [selected, board]);

  const resetGame = () => {
    setBoard(createInitialBoard());
    setSelected(null);
    setTurn("w");
    setGameOver(false);
    setMessage("your move!! 🦔");
    setMojoImage("/images/mojohappy7.png");
  };

  const makeComputerMove = () => {
    const possible: {
      from: [number, number];
      to: [number, number];
      capture: boolean;
    }[] = [];

    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        const piece = board[r][c];

        if (!piece || piece.color !== "b") {
          continue;
        }

        for (let tr = 0; tr < SIZE; tr++) {
          for (let tc = 0; tc < SIZE; tc++) {
            if (validMove(board, r, c, tr, tc)) {
              possible.push({
                from: [r, c],
                to: [tr, tc],
                capture: Boolean(board[tr][tc]),
              });
            }
          }
        }
      }
    }

    if (possible.length === 0) {
      setGameOver(true);
      setMessage("you trapped Mojo!! 🦔🌿");
      setMojoImage("/images/mojohappy7.png");
      return;
    }

    const captures = possible.filter(
      (move) => move.capture
    );

    const pool =
      captures.length > 0 && Math.random() > 0.25
        ? captures
        : possible;

    const move =
      pool[Math.floor(Math.random() * pool.length)];

    const newBoard = cloneBoard(board);

    const piece =
      newBoard[move.from[0]][move.from[1]];

    if (!piece) return;

    const captured =
      newBoard[move.to[0]][move.to[1]];

    newBoard[move.to[0]][move.to[1]] = piece;
    newBoard[move.from[0]][move.from[1]] = null;

    if (
      piece.type === "p" &&
      move.to[0] === 7
    ) {
      newBoard[move.to[0]][move.to[1]] = {
        type: "q",
        color: "b",
      };
    }

    setBoard(newBoard);
    setTurn("w");

    if (captured?.type === "k") {
      setGameOver(true);
      setMessage("aww you got Mojo!! 🦔🤎");
      setMojoImage("/images/mojohappy7.png");
    } else {
      setMessage("hehe... your turn 🌿");
    }
  };

  useEffect(() => {
    if (turn !== "b" || gameOver) {
      return;
    }

    const timer = setTimeout(() => {
      makeComputerMove();
    }, 650);

    return () => clearTimeout(timer);
  }, [turn, gameOver]);

  const handleSquareClick = (
    row: number,
    col: number
  ) => {
    if (gameOver || turn !== "w") {
      return;
    }

    const clicked = board[row][col];

    if (selected) {
      const [fromRow, fromCol] = selected;

      if (
        validMove(
          board,
          fromRow,
          fromCol,
          row,
          col
        )
      ) {
        const newBoard = cloneBoard(board);

        const movingPiece =
          newBoard[fromRow][fromCol];

        if (!movingPiece) return;

        const captured =
          newBoard[row][col];

        newBoard[row][col] = movingPiece;
        newBoard[fromRow][fromCol] = null;

        if (
          movingPiece.type === "p" &&
          row === 0
        ) {
          newBoard[row][col] = {
            type: "q",
            color: "w",
          };
        }

        setBoard(newBoard);
        setSelected(null);

        if (captured?.type === "k") {
          setGameOver(true);
          setMessage("YAYYY!! YOU WON!! 🦔🤎");
          setMojoImage(
            "/images/mojohappy7.png"
          );
          return;
        }

        setTurn("b");
        setMessage(
          "Mojo is thinking... 🦔🌿"
        );

        return;
      }

      if (clicked?.color === "w") {
        setSelected([row, col]);
      } else {
        setSelected(null);
      }

      return;
    }

    if (clicked?.color === "w") {
      setSelected([row, col]);
    }
  };

  const handleHeartClick = () => {
    alert(
      "Site not working, will get back to u in 30 min"
    );
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
        padding: "18px 20px 30px",
        fontFamily: "Arial, sans-serif",
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
          zIndex: 50,
        }}
      >
        ←
      </Link>

      {/* TITLE */}

      <h1
        style={{
          margin: "0",
          textAlign: "center",
          color: "#3f3026",
          fontSize: "40px",
          fontWeight: "400",
          fontStyle: "italic",
        }}
      >
        Chess 🌿
      </h1>

      <p
        style={{
          margin: "2px 0 12px",
          textAlign: "center",
          color: "#514033",
          fontSize: "16px",
          fontStyle: "italic",
        }}
      >
        okayyy... let's see who's better 🦔
      </p>

      {/* MAIN CONTENT */}

      <div
        style={{
          width: "min(1050px, 96vw)",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "45px",
          boxSizing: "border-box",
        }}
      >
        {/* CHESS */}

        <section
          style={{
            width: "min(590px, 62vw)",
            backgroundColor: "#e5dac4",
            border: "6px solid #f4eee2",
            outline: "3px solid #80634e",
            borderRadius: "28px",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          {/* GAME BAR */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "8px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                backgroundColor: "#cbb99b",
                color: "#3f3026",
                borderRadius: "13px",
                padding: "7px 11px",
                fontWeight: "700",
                fontSize: "14px",
              }}
            >
              {turn === "w"
                ? "🤎 your turn"
                : "🌿 Mojo's turn"}
            </div>

            <button
              type="button"
              onClick={resetGame}
              style={{
                backgroundColor: "#cbb99b",
                color: "#3f3026",
                border: "2px solid #80634e",
                borderRadius: "13px",
                padding: "7px 12px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              {gameOver
                ? "play again ♡"
                : "reset"}
            </button>

            <div
              style={{
                backgroundColor: "#cbb99b",
                color: "#3f3026",
                borderRadius: "13px",
                padding: "7px 11px",
                fontWeight: "700",
                fontSize: "14px",
              }}
            >
              🦔
            </div>
          </div>

          {/* CHESS BOARD */}

          <div
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              display: "grid",
              gridTemplateColumns:
                "repeat(8, minmax(0, 1fr))",
              gridTemplateRows:
                "repeat(8, minmax(0, 1fr))",
              border: "5px solid #604936",
              borderRadius: "10px",
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            {board.map((row, rowIndex) =>
              row.map((piece, colIndex) => {
                const dark =
                  (rowIndex + colIndex) % 2 === 1;

                const isSelected =
                  selected?.[0] === rowIndex &&
                  selected?.[1] === colIndex;

                const isPossible =
                  possibleMoves.some(
                    ([r, c]) =>
                      r === rowIndex &&
                      c === colIndex
                  );

                return (
                  <button
                    key={`${rowIndex}-${colIndex}`}
                    type="button"
                    onClick={() =>
                      handleSquareClick(
                        rowIndex,
                        colIndex
                      )
                    }
                    style={{
                      width: "100%",
                      height: "100%",
                      minWidth: 0,
                      minHeight: 0,
                      padding: 0,
                      margin: 0,
                      border: "none",
                      backgroundColor: dark
                        ? "#80634e"
                        : "#e3d4b5",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxSizing: "border-box",
                      cursor:
                        turn === "w" &&
                        !gameOver
                          ? "pointer"
                          : "default",
                      boxShadow: isSelected
                        ? "inset 0 0 0 4px #a36d43"
                        : "none",
                    }}
                  >
                    {isPossible && (
                      <span
                        style={{
                          position: "absolute",
                          width: piece
                            ? "17%"
                            : "23%",
                          height: piece
                            ? "17%"
                            : "23%",
                          borderRadius: "50%",
                          backgroundColor:
                            "#667950",
                          opacity: 0.8,
                          zIndex: 1,
                        }}
                      />
                    )}

                    {piece && (
                      <span
                        style={{
                          position: "relative",
                          zIndex: 2,
                          fontFamily:
                            '"Times New Roman", serif',
                          fontSize:
                            "clamp(25px, 4.8vw, 49px)",
                          lineHeight: "1",
                          color:
                            piece.color === "w"
                              ? "#fffaf0"
                              : "#30251e",
                          textShadow:
                            piece.color === "w"
                              ? "1px 2px 2px #5c4939"
                              : "1px 1px 1px #e8d9ba",
                          userSelect: "none",
                        }}
                      >
                        {
                          symbols[
                            `${piece.color}${piece.type}`
                          ]
                        }
                      </span>
                    )}
                  </button>
                );
              })
            )}
          </div>

          <p
            style={{
              margin: "8px 0 0",
              textAlign: "center",
              color: "#514033",
              fontSize: "13px",
              fontStyle: "italic",
            }}
          >
            pick a piece → pick a square 🌿
          </p>
        </section>

        {/* MOJO */}

        <section
          style={{
            width: "220px",
            textAlign: "center",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              backgroundColor: "#d8c8ac",
              border: "4px solid #f4eee2",
              outline: "2px solid #80634e",
              borderRadius: "21px",
              padding: "11px 13px",
              color: "#3f3026",
              fontSize: "17px",
              fontStyle: "italic",
              fontWeight: "600",
              boxSizing: "border-box",
            }}
          >
            {message}
          </div>

          <img
            src={mojoImage}
            alt="Mojo"
            style={{
              width: "115px",
              height: "115px",
              objectFit: "contain",
              display: "block",
              margin: "5px auto 0",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              marginTop: "0",
              fontSize: "25px",
            }}
          >
            🦔 🌿 🤎
          </div>
        </section>
      </div>

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
          zIndex: 50,
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