import { getAmenities, getIcon } from "../helpers/utils";
import Amenities from "./Amenities";

type Props = {
  listing: any;
};

function Offers({ listing }: Props) {
  const amenities = getAmenities(listing?.id);

  return (
    <div>
      <p className="text-xl font-semibold">What this place offers</p>
      <div className="flex justify-start space-x-12 pt-6">
        <div className="flex flex-col gap-2">
          {amenities?.data?.slice(0, 5).map((item: any, index: number) => (
            <div
              key={index}
              className="flex justify-start items-center text-center gap-4 my-1 cursor-pointer"
            >
              {getIcon(index) as any}
              <p className="text-neutral-500">{item.title}</p>
            </div>
          ))}
        </div>
        {/* another row */}
        <div className="flex flex-col gap-2">
          {amenities?.data?.slice(5, 10).map((item: any, index: number) => (
            <div
              key={index}
              className="flex justify-start items-center text-center gap-4 my-1 cursor-pointer"
            >
              {getIcon(index + 5) as any}
              <p className="text-neutral-500">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Amenities {...listing} />
    </div>
  );
}

export default Offers;
