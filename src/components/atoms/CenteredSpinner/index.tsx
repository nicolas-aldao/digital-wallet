import { Spinner } from "@nextui-org/react";

export const CenteredSpinner = () => {
  return (
    <div
      className="flex justify-center items-center mt-8"
      data-testid="centered-spinner"
    >
      <Spinner color="primary" />
    </div>
  );
};
