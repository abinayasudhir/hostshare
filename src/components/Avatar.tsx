import { FaUserCircle } from "react-icons/fa";

export default function Avatar({ src = "" }: any) {
  return (
    <div>
      {src ? (
        <img
        className="rounded-full h-[50px] w-[50px]"
          height="50"
          width="50"
          alt="hasImag"
          src={src}
        />
      ) : (
        <FaUserCircle className="text-gray-600" size={24} />
      )}
    </div>
  );
}
