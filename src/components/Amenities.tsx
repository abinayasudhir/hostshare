import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { getIcon, groupByAmenities } from "../helpers/utils";

export default function Amenities(listing: any) {
  const groupedValues = groupByAmenities(listing?.id);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <div className="mt-8 w-48">
        <Button
          outline
          label={`Show all ${listing?.amenities?.count} amenities`}
          onClick={() => setOpen(true)}
        />
      </div>
      {open && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50`}
        >
          <div className="bg-white md:w-1/2 p-6 rounded-xl relative">
            <div
              className="absolute top-5 left-5 cursor-pointer"
              onClick={handleClose}
            >
              <XMarkIcon strokeWidth={2} className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-bold mb-4 mt-10">
              What this place offers
            </h2>
            <ul className="max-h-96 overflow-y-auto">
              {Object.keys(groupedValues)?.map((item: any, index: number) => (
                <div className="py-4">
                  <li key={index} className="pb-4 font-medium">
                    {item}
                  </li>
                  {groupedValues?.[item]?.map((i: any) => (
                    <div>
                      <div className="flex space-x-4 py-4">
                        {getIcon(
                          Math.max(Math.round(
                            Math.min(
                              Math.random() * groupedValues?.[item]?.length - 1,
                              10
                            )
                          ), 0)
                        )}
                        <span>{i?.title}</span>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
