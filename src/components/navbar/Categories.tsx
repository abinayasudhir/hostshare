import Category from "./Category";
import Container from "../Container";
import { useLocation, useSearchParams } from "react-router-dom";
import json from "../../data/listings.json";
import Carousel from "better-react-carousel";

type Props = {};

function Categories({}: Props) {
  const [params] = useSearchParams();
  const location = useLocation();

  const categories = (json as any)?.categories || [];

  const isMainPage = location.pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <Carousel
        mobileBreakpoint={480}
        responsiveLayout={[
          {
            breakpoint: 640,
            cols: 3,
          },
          {
            breakpoint: 768,
            cols: 5,
          },
          {
            breakpoint: 1200,
            cols: 8,
          },
          {
            breakpoint: 2000,
            cols: 15,
          },
        ]}
      >
        {categories.map((item: any, index: number) => (
          <Carousel.Item key={index}>
            <Category
              key={index}
              filter={item}
              selected={params?.get("category") === item.type}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Categories;
