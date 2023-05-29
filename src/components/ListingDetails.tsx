import { differenceInCalendarDays } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { Range } from "react-date-range";

import Container from "./Container";
import Gallery from "./listing/Gallery";
import Info from "./listing/Info";
import Reservation from "./listing/Reservation";
import { useNavigate } from "react-router-dom";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

type Props = {
  reservations?: any[];
  listing: any;
  currentUser?: any;
};

function ListingDetails({ listing }: Props) {
  const navigate = useNavigate();

  const [isLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange] = useState<Range>(initialDateRange);

  const onCreateReservation = useCallback(() => {}, [
    totalPrice,
    dateRange,
    listing?.id,
    navigate,
  ]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );

      if (dayCount && listing.price) {
        setTotalPrice(dayCount * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  }, [dateRange, listing.price]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <Gallery
            data={listing?.images?.data}
            title={listing.title}
            listing={listing}
            id={listing.id}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <Info
              user={listing.host}
              description={listing.description}
              roomDetails={listing?.details}
              locationValue={listing.location}
              listing={listing}
            />
            <div className="order-first mb-10 md:order-last md:col-span-3">
              <Reservation
                price={listing.price}
                listing={listing}
                onSubmit={onCreateReservation}
                disabled={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ListingDetails;
