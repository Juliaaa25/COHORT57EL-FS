import type { JSX } from "react";
import style from "./ProfileCard.module.css";

interface ProfileCardProps {
  avatar: string;
  firstName: string;
  lastName: string;
  job: string;
  hobby: string;
}

export default function ProfileCard({
  avatar,
  firstName,
  lastName,
  job,
  hobby,
}: ProfileCardProps): JSX.Element {
  return (
    <div className={style.card}>
      <img
        className={style.avatar}
        src={avatar}
        alt={`${firstName} ${lastName}`}
      />
      <h3 className={style.name}>
        {firstName} {lastName}
      </h3>
      <p className={style.text}>
        <strong>Профессия:</strong> {job}
      </p>
      <p className={style.text}>
        <strong>Хобби:</strong> {hobby}
      </p>
    </div>
  );
}
