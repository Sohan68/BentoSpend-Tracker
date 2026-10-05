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
  const {
    transactions,
    setTransactions,
    setUpdateExpence,
    searchTransaction,
    activeCategory,
    sortOrder,
  } = useContext(TransactionContext);

  const { setShowModal } = useContext(ShowModalContext);
  const totalItem = transactions.length;
  const handleEditCard = (card) => {
    setShowModal(true);
    setUpdateExpence(card);
  };
  const processedTransactions = transactions.filter((item) => {
    const matcheSearch = item.title
      .toLowerCase()
      .includes(searchTransaction.toLowerCase());
    const matcheFiltered =
      activeCategory === "All" || item.category === activeCategory;
    return matcheSearch && matcheFiltered;
  });
  processedTransactions.sort((a, b) => {
    const getAmount = (amountStr) =>
      parseFloat(String(amountStr).replace(/[^0-9.-]+/g, ""));
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (sortOrder === "date-desc") return dateB - dateA;
    if (sortOrder === "date-asc") return dateA - dateB;
    if (sortOrder === "amount-desc")
      return getAmount(b.amount) - getAmount(a.amount);
    if (sortOrder === "amount-asc")
      return getAmount(a.amount) - getAmount(b.amount);
    return 0;
  });

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
        ) : processedTransactions.length === 0 ? (
          <NotFound />
        ) : (
          <div className="space-y-3">
            {processedTransactions.map((card) => (
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
