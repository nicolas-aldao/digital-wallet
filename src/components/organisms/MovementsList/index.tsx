import { FC } from "react";
import {
  Listbox,
  ListboxItem,
  ScrollShadow,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { Movements } from "../../../types/movements";
import { formatDateTime } from "../../../utils/formatDateTime";
import { useGetMovements } from "../../../hooks/useGetMovements";
import { CenteredSpinner } from "../../atoms/CenteredSpinner";

interface MovementsListProps {
  userId: string | undefined;
}

export const MovementsList: FC<MovementsListProps> = ({ userId }) => {
  const { movements, isLoading } = useGetMovements(userId!);
  //const textClassName = "hover:text-fonts-secondary";

  return (
    <>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Your Movements"
          title="Your Movements"
        >
          <ScrollShadow className="h-[300px]">
            {isLoading && <CenteredSpinner />}
            {movements && userId && (
              <>
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
                            item.senderId === userId
                              ? "text-danger"
                              : "text-success"
                          }
                        >
                          {item.senderId === userId
                            ? "You sent "
                            : "You receive "}
                        </span>
                        <span
                          className={
                            item.senderId === userId
                              ? "text-danger"
                              : "text-success"
                          }
                        >
                          ${item.amount.toFixed(2)}{" "}
                        </span>
                        <span>
                          {item.senderId === userId ? "to " : "from "}
                        </span>
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
          </ScrollShadow>
        </AccordionItem>
      </Accordion>
    </>
  );
};
