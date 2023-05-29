import React, { Suspense } from "react";
import Avatar from "../Avatar";
import Sleep from "../Sleep";
import Offers from "../Offers";
import Loader from "../Loader";
import ShowMoreLess from "./TextTruncate";

const Map = React.lazy(() => import("../Map"));

type Props = {
  user: any;
  description: string;
  roomDetails: any;
  locationValue: any;
  listing: any;
};

function Info({
  user,
  description,
  roomDetails,
  locationValue,
  listing
}: Props) {

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <div className=" text-xl font-HostshareBold flex flex-row items-center gap-2">
            <div>Room in a guest suite hosted by {user?.name}</div>
          </div>
          <div className="flex flex-row items-center gap-2 font-light text-neutral-500">
            {roomDetails?.data?.map((r: any, index: number) => (
              <>
                <p>
                  {r.value} {r.type}{" "}
                </p>
                {index != roomDetails?.data?.length - 1 && <span>.</span>}
              </>
            ))}
          </div>
        </div>
        <Avatar src={user?.avatar?.url} />
      </div>
      <ShowMoreLess text={description} maxLength={200} />
      <hr />
      <Sleep id={listing?.id} />
      <hr />
      <Offers listing={listing} />
      <hr />
      <p className="text-xl font-semibold">{`Where you’ll be`}</p>
      <Suspense fallback={<Loader />}>
        <Map center={[locationValue?.lat, locationValue?.long]} />
      </Suspense>
    </div>
  );
}

export default Info;
