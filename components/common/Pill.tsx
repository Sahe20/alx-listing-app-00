// interface PillProps {
//   label: string;
//   onClick?: () => void;
// }

// const Pill = ({ label, onClick }: PillProps) => {
//   return (
//     <button
//       onClick={onClick}
//       className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm hover:bg-indigo-200"
//     >
//       {label}
//     </button>
//   );
// };

// export default Pill;
import { PillProps } from "@/interfaces";

const Pill = ( { label } : PillProps) => {
  return (
    <button className="px-4 py-2 mr- mb-2 rounded-full border border-[#e9e9e9]">
      <a href="#">{label}</a>
    </button>
  );
};

export default Pill;
