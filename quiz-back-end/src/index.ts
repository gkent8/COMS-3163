import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import * as jwt from "jsonwebtoken";

import { Quiz } from "./quiz";
import QuizData from "./mock-quiz.json";

declare module "jsonwebtoken" {
  export interface JwtPayload {
    userId: string;
  }
}

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

let quizData: Quiz[] = QuizData;

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/api/quizData", (req: Request, res: Response) => {
  res.send(quizData);
});

app.get("/api/quizData-auth", authenticateToken, (req: Request, res: Response) => {
  res.send(quizData);
});

app.get("/api/quizData/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  const quiz: Quiz = quizData.find((quiz) => quiz.id === id)!;

  res.send(quiz);
});

app.post("/api/quizData", (req: Request, res: Response) => {
  let quiz: Quiz = req.body;
  const nextId = quizData.reduce((id, t) => (t.id >= id ? t.id + 1 : id), 1);

  quiz.id = nextId;

  quizData.push(quiz);

  res.send(quiz);
});

app.put("/api/quizData/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const quiz = req.body;
  quizData = quizData.filter((quiz: Quiz) => quiz.id != id);
  quiz.id = id;
  quizData = [...quizData, req.body];
  res.send(quizData);
});

app.delete("/api/quizData/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  quizData = quizData.filter((todo: Quiz) => todo.id != id);
  res.send(quizData);
});

app.post("/api/login", (req: Request, res: Response) => {
  const username = req.body.username;

  const token = genAccessToken(username);
  res.json(token);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

function genAccessToken(username: string) {
  return jwt.sign(
    { userId: username },
    process.env.TOKEN_SECRET as jwt.Secret,
    {
      expiresIn: "2 days",
    }
  );
}

function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.TOKEN_SECRET as string,
    (err: any, userId: any) => {
      console.log(err);

      if (err) return res.sendStatus(403);

      req.userId = userId;
      next();
    }
  );
}
