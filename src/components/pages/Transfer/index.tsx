import { useParams } from "react-router-dom";

export const Transfer = () => {
  const { id } = useParams();
  console.log("id ", id);

  return (
    <>
      <p>Transfer Page</p>
    </>
  );
};
