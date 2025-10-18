import { useState, type JSX } from "react";
import MyButton from "../MyButton/MyButton";
import style from "./Feedback.module.css";

export default function Feedback(): JSX.Element {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  function handleLike(): void {
    setLikes(likes + 1);
  }

  function handleDislike(): void {
    setDislikes(dislikes + 1);
  }

  function handleReset(): void {
    setLikes(0);
    setDislikes(0);
  }

  return (
    <div className={style.wrapper}>
      <h2>Feedback</h2>
      <div className={style.container}>
        <span> {likes}</span>
        <MyButton text="Like" onClick={handleLike} />
        <MyButton text="Dislike" onClick={handleDislike} />
        <span> {dislikes}</span>
      </div>
      <MyButton text="Reset Results" onClick={handleReset} />
    </div>
  );
}
