import type { JSX } from "react";
import ColorChanger from "../components/ColorChanger/ColorChanger";
import Feedback from "../components/Feedback/Feedback";

export default function Homework04(): JSX.Element {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Homework 04</h1>
      <ColorChanger />
      <Feedback />
    </div>
  );
}
