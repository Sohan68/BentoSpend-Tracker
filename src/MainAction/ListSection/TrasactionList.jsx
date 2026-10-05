import { useContext } from "react";
import { toast } from "react-toastify";
import {
  ShowModalContext,
  TransactionContext,
} from "../../Contex/TransactionContex";
import EmptyList from "./EmptyList";
import NotFound from "./NotFound";

import TransactionCard from "./TransactionCard";

const TrasactionList = () => {
  const { transactions, setTransactions, setUpdateExpence, searchTransaction } =
    useContext(TransactionContext);

  const { setShowModal } = useContext(ShowModalContext);
  const totalItem = transactions.length;
  const handleEditCard = (card) => {
    setShowModal(true);
    setUpdateExpence(card);
  };
  const searchFilterdTransaction = transactions.filter((item) =>
    item.title.toLowerCase().includes(searchTransaction.toLowerCase()),
  );

  const handleDeleteCard = (itemId, cardTitle) => {
    const filterdCard = transactions.filter((item) => item.id !== itemId);
    setTransactions(filterdCard);
    toast.error(`${cardTitle} has been deleted `);
  };

  return (
    <>
      <section className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-[#111827]">
              Transactions & Records
            </h2>
            <span
              id="activeCountBadge"
              className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#80A1C1]/20 text-[#111827]"
            >
              {totalItem} Records
            </span>
          </div>
          <div className="text-xs text-[#6B7280]">
            Click pencil to edit, trash to delete
          </div>
        </div>
        {/* Transactions Section */}
        {transactions.length === 0 ? (
          <EmptyList />
        ) : searchFilterdTransaction.length === 0 ? (
          <NotFound />
        ) : (
          <div className="space-y-3">
            {searchFilterdTransaction.map((card) => (
              <TransactionCard
                key={card.id}
                card={card}
                onDelete={handleDeleteCard}
                onEdit={handleEditCard}
              ></TransactionCard>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default TrasactionList;
