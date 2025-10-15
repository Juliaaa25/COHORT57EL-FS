import type { JSX } from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";

export default function Homework02(): JSX.Element {
  const users = [
    {
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      firstName: "Laura",
      lastName: "Becker",
      job: "UI/UX Designerin",
      hobby: "Fotografie & Yoga",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      firstName: "Thomas",
      lastName: "Fischer",
      job: "Softwareentwickler",
      hobby: "Radfahren & Schach",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      firstName: "Maria",
      lastName: "Hoffmann",
      job: "Marketing Spezialistin",
      hobby: "Reisen & Kunst",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      firstName: "David",
      lastName: "Weber",
      job: "Projektmanager",
      hobby: "Kochen & Tennis",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/25.jpg",
      firstName: "Isabella",
      lastName: "Krüger",
      job: "Fotografin",
      hobby: "Tanzen & Lesen",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      firstName: "Alexander",
      lastName: "Schneider",
      job: "Data Analyst",
      hobby: "Programmieren & Reisen",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "30px",
        padding: "40px 0",
        backgroundColor: "#f7f7f7",
      }}
    >
      {users.map((user, index) => (
        <ProfileCard key={index} {...user} />
      ))}
    </div>
  );
}
