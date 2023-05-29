import Favorite from "../Favorite";
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

type Props = {
  data: any;
  reservation?: any;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: any;
  handleClose?: () => void;
};

function Card({
  data,
  reservation,
  currentUser,
  handleClose,
}: Props) {
  
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/listings/${data?.info?.id}`)}>
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          {handleClose && (
            <div
              className="absolute top-3 left-3"
              onClick={(event) => {
                event?.stopPropagation();
                handleClose();
              }}
            >
              <AiFillCloseCircle size={30} opacity={0.5} color="white" />
            </div>
          )}
          <img
            className="object-cover h-full w-full"
            src={data?.info?.mainImage?.url}
            alt="listing"
          />
          <div className="absolute top-3 right-3">
            <Favorite />
          </div>
        </div>
        <div className="font-HostshareMedium text-lg">
          {data?.info?.title}, {data?.info?.location?.city}
        </div>
        <div className="font-HostshareMedium text-neutral-500">
          {
            // 'reservationDate' ||
            data?.info?.type
          }
        </div>
        <div className="flex flex-row items-center gap-">
          <div className="flex gap-1 font-HostshareMedium">
            ${data?.info?.price}{" "}
            {!reservation && <div className="font-HostshareLight"> night</div>}
          </div>
        </div>
        {/* {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={() => {}}
          />
        )} */}
      </div>
    </div>
  );
}

export default Card;
