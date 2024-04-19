import { Listbox } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { User } from "../../../types/user";
import { useGetUserByIds } from "../../../hooks/useGetUserByIds";
import { GoBackButton } from "../../atoms/GoBackButton";
import { PageTitle } from "../../atoms/PageTitle";
import { CenteredSpinner } from "../../atoms/CenteredSpinner";
import { ContactItem } from "./ContactItem";

export const Contacts = () => {
  const user = useSelector((state: any) => state.user.value);
  const { data, isLoading, errorMessage } = useGetUserByIds(user.contacts);

  return (
    <>
      <GoBackButton text="Back to Home" />
      <PageTitle title="Your Contacts" />
      {data && !errorMessage && (
        <Listbox
          items={data}
          emptyContent={!isLoading && <p>You don't have any contacts yet.</p>}
          color="primary"
          variant="flat"
        >
          {(item: User) => <ContactItem item={item} />}
        </Listbox>
      )}
      {isLoading && <CenteredSpinner />}
      {errorMessage && <p className="px-4 text-danger">{errorMessage}</p>}
    </>
  );
};
