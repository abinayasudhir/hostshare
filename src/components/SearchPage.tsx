import InitialPageTransition from "./InitialPageTransition";
import Container from "./Container";
import EmptyState from "./EmptyState";
import Card from "./listing/Card";
import Map from "./Map";
import { useSearchParams } from "react-router-dom";
import { getListingByCity } from "../helpers/utils";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const [params, _] = useSearchParams();

  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCities(getListingByCity(params?.get("city") || ""));
  }, [params?.get("city")]);

  if (cities.length === 0) {
    return (
      <InitialPageTransition>
        <EmptyState showReset />
      </InitialPageTransition>
    );
  }

  return (
    <InitialPageTransition>
      <Container>
        <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-0">
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 overflow-x-hidden">
            {cities.map((list: any, index: number) => {
              return <Card key={index} data={list} />;
            })}
          </div>
          <div>
            <Map
              data={cities[0]}
              center={[
                (cities[0] as any)?.info?.location?.lat,
                (cities[0] as any)?.info?.location?.long,
              ]}
              fullHeight
              cities={cities}
            />
          </div>
        </div>
      </Container>
    </InitialPageTransition>
  );
}
