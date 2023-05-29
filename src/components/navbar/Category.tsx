import qs from "query-string";
import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Props = {
  filter: any;
  selected?: boolean;
};

function Category({ filter, selected }: Props) {
  const navigate = useNavigate();
  const { category } = useParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (category) {
      currentQuery = qs.parse(category.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: filter?.type,
    };

    if (category === filter?.type) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    navigate(url);
  }, [filter?.type, category, navigate]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 hover:text-neutral-800 transition cursor-pointer`}
    >
      <img src={filter?.url} width={20} height={20} />
      <div
        className={`font-medium text-xs whitespace-nowrap border-b-2  ${
          selected ? "text-neutral-800" : "text-neutral-500"
        } ${selected ? "border-b-neutral-800" : "border-transparent"}`}
      >
        {filter?.title}
      </div>
    </div>
  );
}

export default Category;
