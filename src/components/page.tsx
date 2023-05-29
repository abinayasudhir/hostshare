import InitialPageTransition from "./InitialPageTransition";
import Container from "./Container";
import EmptyState from "./EmptyState";
import Card from "./listing/Card";
import json from "../data/listings.json";

export default function Home() {
  const listing: any[] = (json as any)?.data;

  if (listing.length === 0) {
    return (
      <InitialPageTransition>
        <EmptyState showReset />
      </InitialPageTransition>
    );
  }

  return (
    <InitialPageTransition>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 overflow-x-hidden">
          {listing.map((list: any) => {
            return <Card key={list.ref} data={list} />;
          })}
        </div>
      </Container>
    </InitialPageTransition>
  );
}
