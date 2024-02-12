import { FC } from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Movements } from "../../../types/movements";
import { CenteredSpinner } from "../../atoms/CenteredSpinner";
import { PageTitle } from "../../atoms/PageTitle";
import { formatDateTime } from "../../../utils/formatDateTime";

interface MovementsListProps {
  movements: Movements[] | undefined;
  userId: string | undefined;
}

export const MovementsList: FC<MovementsListProps> = ({
  movements,
  userId,
}) => {
  return (
    <>
      {(!movements || !userId) && <CenteredSpinner />}
      {movements && userId && (
        <>
          <PageTitle title="Movements" className="mt-4" />
          <Listbox
            items={movements}
            // emptyContent={<CenteredSpinner />}
            color="primary"
            variant="light"
          >
            {(item: Movements) => (
              <ListboxItem key={item._id}>
                <div key={item._id}>
                  <span
                    className={
                      item.senderId === userId ? "text-danger" : "text-success"
                    }
                  >
                    {item.senderId === userId ? "You sent " : "You receive "}
                  </span>
                  <span
                    className={
                      item.senderId === userId ? "text-danger" : "text-success"
                    }
                  >
                    ${item.amount}{" "}
                  </span>
                  <span>{item.senderId === userId ? "to " : "from "}</span>
                  <span>
                    {item.senderId === userId
                      ? item.receiverFullname
                      : item.senderFullname}
                  </span>
                  <p>{formatDateTime(item.date.toString())}</p>
                </div>
              </ListboxItem>
            )}
          </Listbox>
        </>
      )}
    </>
  );
};
