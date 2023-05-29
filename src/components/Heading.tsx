import { UserIcon } from "@heroicons/react/24/solid";
import { FaStar } from "react-icons/fa";

type Props = {
  title: string;
  listing?: any;
  subtitle?: string;
  center?: boolean;
};

function Heading({ title, listing, subtitle, center }: Props) {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text md:text-2xl font-HostshareXBold">{title}</div>
      <div className="flex gap-1 mt-2">
        {listing && (
          <>
            <div className="flex space-x-2 items-center">
              <FaStar />{" "}
              <span>{listing?.ratings?.guestSatisfactionOverall}</span>
            </div>

            <div>.</div>
            <div className="underline">
              {listing?.visibleReviewCount} reviews
            </div>
            {listing?.host?.isSuperhost && (
              <>
                <div>.</div>
                <div className="flex space-x-2">
                  <UserIcon className="h-5 w-5" />
                  <span className="font-normal">Superhost</span>
                </div>
              </>
            )}
            <div>.</div>
            <div className="underline">{`${listing?.location?.city}, ${listing?.location?.country?.title}`}</div>
          </>
        )}
        {subtitle && <div className="underline">{subtitle}</div>}
      </div>
    </div>
  );
}

export default Heading;
