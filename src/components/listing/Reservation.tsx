import Button from "../Button";
import { FaStar } from "react-icons/fa";
import { Card, CardHeader } from "@material-tailwind/react";
import { GuestSelection } from "../dropdown/Dropdown";

type Props = {
  price: number;
  listing: any;
  onSubmit: () => void;
  disabled?: boolean;
};

function Reservation({ price, listing, onSubmit, disabled }: Props) {
  return (
    <Card className="rounded-xl border-[1px] sticky top-28 left-0">
      <div className="flex flex-row items-center gap-1 p-4">
        <p className="flex items-center gap-2 text-xl font-HostshareMedium">
          $ {price}{" "}
          <p className="font-HostshareLight text-neutral-600 text-sm">night</p>
          <div className="text-sm flex flex-row space-x-2 items-baseline">
            <FaStar /> <span>{listing?.ratings?.guestSatisfactionOverall}</span>
          </div>
          <span className="text-sm">.</span>
          <div className="font-HostshareMedium text-sm text-neutral-600 underline">
            {listing?.visibleReviewCount} reviews
          </div>
        </p>
      </div>
      <div className="grid grid-cols-2 p-4">
        <div
          className="col-span-1 pl-2"
          style={{
            border: "1px solid hsl(0, 0%, 70%)",
            borderBottom: "none",
            borderTopLeftRadius: 6,
          }}
        >
          <Card color="transparent" shadow={false} className="w-full">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mb-2 flex items-center"
            >
              <div className="flex w-full flex-col gap-0.5">
                <div className="text-xs text-neutral-600 font-bold">
                  CHECK-IN
                </div>
                <div color="text-xs text-neutral-600">6/4/2023</div>
              </div>
            </CardHeader>
          </Card>
        </div>
        <div
          className="col-span-1 pl-2"
          style={{
            border: "1px solid hsl(0, 0%, 70%)",
            borderBottom: "none",
            borderTopRightRadius: 6,
          }}
        >
          <Card color="transparent" shadow={false} className="w-full">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mb-2 flex items-center"
            >
              <div className="flex w-full flex-col gap-0.5">
                <div className="text-xs text-neutral-600 font-bold">
                  CHECK-OUT
                </div>
                <div color="text-xs text-neutral-600">10/4/2023</div>
              </div>
            </CardHeader>
          </Card>
        </div>

        <div className="col-span-2">
          <GuestSelection />
        </div>
      </div>
      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </div>
    </Card>
  );
}

export default Reservation;
