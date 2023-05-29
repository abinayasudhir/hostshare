const MasonryGrid = ({ images = [] }: any) => {
  return (
    <div className="grid grid-flow-row gap-2 md:grid-rows-2 md:grid-flow-col">
      {images.slice(0, 5).map((image: any, index: number) => (
        <div
          key={index}
          className={`${
            index === 0
              ? "row-span-1 col-span-2 md:row-span-2 md:col-span-2"
              : "row-span-1 col-span-auto"
          } bg-gray-200 opacity-100 hover:opacity-80`}
        >
          <img
            src={image.url}
            alt={`Image ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
