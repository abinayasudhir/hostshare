import { differenceInDays } from "date-fns";
import { useMemo, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { DateRange, Range } from "react-date-range";
import Modal from "../Modal";
import "tailwindcss/tailwind.css";
import GuestPicker from "../GuestPicker";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { CityPicker } from "../dropdown/Dropdown";

type Props = {};

function Search({}: Props) {
  const { startDate, endDate } = useParams();

  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [isOpen, setIsOpen] = useState(false);

  const [isGuestsSelect, setIsGuests] = useState(false);

  const [guestCount, setGuestCount] = useState(0);
  const [roomCount, setRoomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return "Any Week";
  }, [startDate, endDate]);

  const guessLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return "Add Guests";
  }, [isGuestsSelect]);

  return (
    <div
      onClick={() => {}}
      className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold md:px-1 lg:px-6">
          <CityPicker />
        </div>
        <div
          className="text-xs md:text-sm font-semibold md:px-1 lg:px-6 border-x-[1px] flex-1 text-center"
          onClick={() => setIsOpen(true)}
        >
          {durationLabel}

          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onSubmit={() => setIsOpen(false)}
            secondaryAction={undefined}
            secondaryActionLabel={""}
            title="Filters"
            actionLabel="Search"
            body={
              <div>
                <DateRange
                  className="text-brand"
                  color="#329a9a"
                  rangeColors={["#329a9a"]}
                  editableDateInputs={true}
                  onChange={(item) => setDateRange(item)}
                  moveRangeOnFirstSelection={false}
                  ranges={[dateRange]}
                />
              </div>
            }
          />
        </div>
        <div
          className="text-sm md:px-1 lg:px-6 text-gray-600 flex flex-row items-center gap-1"
          onClick={() => setIsGuests(true)}
        >
          <div className="hidden sm:block text-center">{guessLabel}</div>
          <div className="p-2 bg-brand rounded-full text-white">
            <BiSearch size={18} />
            <Modal
              isOpen={isGuestsSelect}
              onClose={() => setIsGuests(false)}
              onSubmit={() => setIsGuests(false)}
              secondaryAction={undefined}
              secondaryActionLabel={""}
              title="Filters"
              actionLabel="Search"
              body={
                <div className="flex flex-col gap-8">
                  <span className="text-brand text-sm lg:text-lg">
                    Add Guests
                  </span>
                  <GuestPicker
                    onChange={(value) => setGuestCount(value)}
                    value={guestCount}
                    title="Guests"
                    subtitle="How many guests are coming?"
                  />
                  <hr />
                  <GuestPicker
                    onChange={(value) => setRoomCount(value)}
                    value={roomCount}
                    title="Rooms"
                    subtitle="How many rooms do you need?"
                  />
                  <hr />
                  <GuestPicker
                    onChange={(value) => {
                      setBathroomCount(value);
                    }}
                    value={bathroomCount}
                    title="Bathrooms"
                    subtitle="How many bahtrooms do you need?"
                  />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
