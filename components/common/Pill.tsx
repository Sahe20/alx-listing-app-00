interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill = ({ label, onClick }: PillProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm hover:bg-indigo-200"
    >
      {label}
    </button>
  );
};

export default Pill;
