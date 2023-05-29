import { motion } from "framer-motion";
import Heading from "../Heading";
import Favorite from "../Favorite";
import MasonryGrid from "./MasonryGrid";
import { useNavigate } from "react-router-dom";

type Props = {
  data: any;
  title: string;
  id: string;
  listing: any;
};

function Gallery({ title, data, id, listing }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <Heading title={title} listing={listing} />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full overflow-hidden rounded-xl relative"
        onClick={() => navigate(`/location_images/${id}`)}
      >
        <MasonryGrid images={data} />
        <div className="absolute top-5 right-5">
          <Favorite />
        </div>
      </motion.div>
    </>
  );
}

export default Gallery;
