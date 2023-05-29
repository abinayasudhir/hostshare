import json from "../data/listings.json";
import { GiButterflyFlower } from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr";
import { MdOutlineBathtub, MdOutlineCoffeeMaker } from "react-icons/md";
import { RiSafeLine } from "react-icons/ri";
import { AiOutlineCar, AiOutlineWifi } from "react-icons/ai";
import { BiCctv } from "react-icons/bi";
import { BsFillHospitalFill, BsFire } from "react-icons/bs";

export const getCategories = () => {
  return (json as any)?.categories;
};

export const getAmenities = (id: string) => {
  return (
    (json as any)?.data?.find((d: any) => d?.info?.id === id)?.info
      ?.amenities || []
  );
};

export const getIcon = (idx: number) =>
  [
    <GiButterflyFlower size={25} className="text-gray-700" />,
    <GrWorkshop size={25} className="text-gray-700" />,
    <MdOutlineBathtub size={25} className="text-gray-700" />,
    <MdOutlineCoffeeMaker size={25} className="text-gray-700" />,
    <RiSafeLine size={25} className="text-gray-700" />,
    <AiOutlineCar size={25} className="text-gray-700" />,
    <AiOutlineWifi size={25} className="text-gray-700" />,
    <BiCctv size={25} className="text-gray-700" />,
    <BsFire size={25} className="text-gray-700" />,
    <BsFillHospitalFill size={25} className="text-gray-700" />,
  ][idx];

function groupByKey(array: any[], key: string) {
  return array.reduce((hash, obj) => {
    if (obj[key] === undefined) return hash;
    return Object.assign(hash, {
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    });
  }, {});
}

export const groupByAmenities = (id: string) => {
  return groupByKey(getAmenities(id)?.data || [], "group");
};

export const getBedroomDetails = (id: string) => {
  return (
    (json as any)?.data
      ?.find((d: any) => d?.info?.id === id)
      ?.info?.details?.data.find(
        (d: any) => d?.type === "bedrooms" || d?.type === "bedroom"
      ) || []
  );
};

export const getCountries = () => {
  return new Set((json as any)?.data?.map((d: any) => d?.info?.location?.city));
};

export const getListingByCity = (city: String) => {
  if (city === "Anywhere") {
    return (json as any)?.data;
  } else {
    return (json as any)?.data?.filter(
      (d: any) => d?.info?.location?.city === city
    );
  }
};

export const getSpecificLocationDetails = (id: string) => {
  return (json as any)?.data?.find((d: any) => d?.info?.id === id) || [];
};
