interface MyButtonProps {
  text: string;
  onClick: () => void;
}

export default function MyButton({ text, onClick }: MyButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        margin: "10px",
        padding: "10px 15px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#1976d2",
        color: "white",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}
