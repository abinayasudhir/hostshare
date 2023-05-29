import { useEffect } from "react";
import EmptyState from "./EmptyState";

type Props = {
  error: Error;
};

function ErrorState({ error }: Props) {
  useEffect(() => {
    console.log("🚀 ~ file: error.tsx:12 ~ ErrorState ~ error:", error);
  }, [error]);

  return <EmptyState title="Uh Oh" subtitle="Something went wrong!" />;
}

export default ErrorState;
