import { getAllCard } from "../../getInitialCard";
import TransactionCard from "./TransactionCard";

const CardList = () => {
  const cards = getAllCard();
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
              6 Records
            </span>
          </div>
          <div className="text-xs text-[#6B7280]">
            Click pencil to edit, trash to delete
          </div>
        </div>
        {/* Transaction Section  */}
        <div className="space-y-3">
          {cards.map((card) => (
            <TransactionCard key={card.id} card={card}></TransactionCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default CardList;
