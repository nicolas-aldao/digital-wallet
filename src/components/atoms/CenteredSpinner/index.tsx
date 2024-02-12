import { Spinner } from "@nextui-org/react";

export const CenteredSpinner = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <Spinner color="primary" />
    </div>
  );
};
