import { useParams } from "react-router-dom";
import EmptyState from "./EmptyState";
import ListingDetails from "./ListingDetails";
import json from "../data/listings.json";

const Listings = () => {
  const { id } = useParams();

  const listing: any = (json as any)?.data.find((d: any) => d?.info?.id == id);

  if (!listing) {
    return <EmptyState />;
  }

  return <ListingDetails listing={listing?.info} />;
};

export default Listings;
