import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import type { Action } from "./types/Action";

interface MovieEditProps {
  id: string;
  currentTitle: string;
}

const MovieEdit = ({ id, currentTitle }: MovieEditProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(currentTitle);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (newTitle.trim() === "") return;
    dispatch<Action>({
      type: "movies/editTitle",
      payload: { id, newTitle },
    });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleSave}>Сохранить</button>
        </div>
      ) : (
        <button onClick={() => setIsEditing(true)}>
          <EditIcon />
        </button>
      )}
    </div>
  );
};

export default MovieEdit;
