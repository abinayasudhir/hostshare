import { motion } from "framer-motion";
import Button from "./Button";
import Heading from "./Heading";
import { useNavigate } from "react-router-dom";

type Props = {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
};

function EmptyState({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  showReset,
}: Props) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-[60vh] flex flex-col gap-2 justify-center items-center"
    >
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => navigate("/")}
          />
        )}
      </div>
    </motion.div>
  );
}

export default EmptyState;
