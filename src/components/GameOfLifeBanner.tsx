"use client";
import React, { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaTrash,
  FaFillDrip,
  FaDiceFive
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const CELL_SIZE = 5;
const WIDTH = 690;
const HEIGHT = 240;

function renderBoard(
  board: number[][] | null,
  context: CanvasRenderingContext2D | null,
  ROW: number,
  COLUMN: number,
  theme: string | undefined
) {
  if (!board || !context) return;
  const alive = theme === "dark" ? "#1B262C" : "#F1F0E8";
  const dead = theme === "dark" ? "#F1F0E8" : "#1B262C";
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COLUMN; j++) {
      context.fillStyle = board[i][j] ? alive : dead;
      context.fillRect(j * CELL_SIZE, i * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
  }
}

function calculateNextBoard(board: number[][] | null) {
  if (!board) return null;
  const newBoard: number[][] = [];
  const neighboursPattern = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  for (let i = 0; i < board.length; i++) {
    newBoard.push([]);
    for (let j = 0; j < board[0].length; j++) {
      let neighbours = 0;
      for (let k = 0; k < neighboursPattern.length; k++) {
        const rowNeighbour = neighboursPattern[k][0] + i;
        const colNeighbour = neighboursPattern[k][1] + j;
        if (
          rowNeighbour >= 0 &&
          rowNeighbour < board.length &&
          colNeighbour >= 0 &&
          colNeighbour < board[0].length &&
          board[rowNeighbour][colNeighbour] === 1
        ) {
          neighbours++;
        }
      }
      if (board[i][j] === 1) {
        if (neighbours < 2) {
          newBoard[i][j] = 0;
        } else if (neighbours === 2 || neighbours === 3) {
          newBoard[i][j] = 1;
        } else if (neighbours > 3) {
          newBoard[i][j] = 0;
        }
      } else {
        if (neighbours === 3) {
          newBoard[i][j] = 1;
        } else {
          newBoard[i][j] = board[i][j];
        }
      }
    }
  }
  return newBoard;
}

function randomizeCells(board: number[][] | null) {
  if (!board) return;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const random = Math.random();
      const value = random > 0.6 ? 1 : 0;
      board[i][j] = value;
    }
  }
}

function clearCells(board: number[][] | null) {
  if (!board) return;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] = 0;
    }
  }
}

function GameOfLifeBanner() {
  const { theme } = useTheme();
  const [isPlaying, setPlaying] = useState(true);
  const [isDrawing, setDrawing] = useState(false);
  const [isOptionOpen, setOptionOpen] = useState(false);

  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const context = useRef<null | CanvasRenderingContext2D>(null);

  const board = useRef<null | number[][]>(null);
  const COLUMN = Math.floor(WIDTH / CELL_SIZE);
  const ROW = Math.floor(HEIGHT / CELL_SIZE);
  useEffect(() => {
    board.current = new Array(ROW);
    for (let i = 0; i < ROW; i++) {
      const newArr = new Array(COLUMN).fill(0);
      board.current[i] = [...newArr];
    }
    randomizeCells(board.current);
  }, [COLUMN, ROW]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (canvasRef.current !== null) {
      const ctx = canvasRef.current.getContext("2d");
      context.current = ctx;
      interval = setInterval(() => {
        if (isPlaying && !isDrawing) {
          board.current = calculateNextBoard(board.current);
          renderBoard(board.current, ctx, ROW, COLUMN, theme);
        }
      }, 150);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [COLUMN, ROW, isDrawing, isPlaying, theme]);

  useEffect(() => {
    renderBoard(board.current, context.current, ROW, COLUMN, theme);
  }, [COLUMN, ROW, theme]);

  return (
    <div className="relative">
      <div className="absolute flex flex-row p-2 rounded-br-md bg-pampas text-martinique dark:bg-blackPearl dark:text-pampas">
        <div
          className={`flex flex-row gap-3 overflow-hidden duration-200 transition-all ${
            isOptionOpen ? "w-[100px]" : "w-0"
          }`}
        >
          <button onClick={() => setPlaying((prev) => !prev)}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button
            onClick={() => {
              board.current = calculateNextBoard(board.current);
              renderBoard(board.current, context.current, ROW, COLUMN, theme);
            }}
          >
            <FaStepForward />
          </button>
          <button
            onClick={() => {
              clearCells(board.current);
              renderBoard(board.current, context.current, ROW, COLUMN, theme);
            }}
          >
            <FaTrash />
          </button>
          <button
            onClick={() => {
              randomizeCells(board.current);
              renderBoard(board.current, context.current, ROW, COLUMN, theme);
            }}
          >
            <FaDiceFive />
          </button>
        </div>
        <button
          className={`dark:text-nepal text-tabasco ${
            isOptionOpen ? "ml-3" : "ml-0"
          }`}
          onClick={() => setOptionOpen((prev) => !prev)}
        >
          <IoIosArrowForward
            className={`transition-transform duration-200 ${
              isOptionOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
      <canvas
        className="bg-blackPearl dark:bg-pampas"
        onMouseMove={(e) => {
          if (e.buttons === 1) {
            const posX = Math.floor(e.nativeEvent.offsetX / CELL_SIZE);
            const posY = Math.floor(e.nativeEvent.offsetY / CELL_SIZE);
            setDrawing(true);
            if (board.current) board.current[posY][posX] = 1;
            renderBoard(board.current, context.current, ROW, COLUMN, theme);
          } else {
            setDrawing(false);
          }
        }}
        onMouseDown={(e) => {
          const posX = Math.floor(e.nativeEvent.offsetX / CELL_SIZE);
          const posY = Math.floor(e.nativeEvent.offsetY / CELL_SIZE);
          if (board.current) board.current[posY][posX] = 1;
          renderBoard(board.current, context.current, ROW, COLUMN, theme);
        }}
        width={WIDTH}
        height={HEIGHT}
        ref={canvasRef}
      ></canvas>
    </div>
  );
}

export default GameOfLifeBanner;
