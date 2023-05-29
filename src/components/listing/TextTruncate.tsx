import { useState } from "react";

const ShowMoreLess = ({
  text,
  maxLength,
}: {
  text: string;
  maxLength: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const truncatedText = isExpanded
    ? text
    : text.slice(0, maxLength).split("").concat("...").join("");

  return (
    <div>
      <p>{truncatedText}</p>
      {text.length > maxLength && (
        <button
          onClick={toggleExpand}
          className="text-black-700 hover:text-black-900 focus:outline-none underline"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default ShowMoreLess;
