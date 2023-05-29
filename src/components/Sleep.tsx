import { IoBedOutline } from "react-icons/io5";
import { getBedroomDetails } from "../helpers/utils";

type Props = {
  id: string;
};

function Sleep({ id }: Props) {
  const details = getBedroomDetails(id);

  return (
    <div>
      <p className="text-xl font-semibold mb-4">{`Where you'll sleep`}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {details.value > 0 ? (
          Array.from({ length: details.value }, (_, k) => k + 1).map((d) => (
            <div className="border border-black rounded-md cursor-pointer col-span-1">
              <div className="flex flex-col justify-start items-start px-6 py-6 gap-1 text-center">
                <IoBedOutline size={25} />
                <p className="text-lg text-black font-medium">Bedroom {d}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="border border-black rounded-md cursor-pointer col-span-1">
            <div className="flex flex-col justify-start items-start px-6 py-6 gap-1 text-center">
              <IoBedOutline size={25} />
              <p className="text-lg text-black font-medium">Bedroom</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sleep;
