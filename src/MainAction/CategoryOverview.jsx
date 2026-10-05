import { useContext } from "react";
import { TransactionContext } from "../Contex/TransactionContex";

const CategoryOverview = () => {
  const { transactions } = useContext(TransactionContext);

  const categoryTotals = transactions.reduce((acc, curr) => {
    const numericAmount = parseFloat(
      String(curr.amount).replace(/[^0-9.-]+/g, ""),
    );
    if (acc[curr.category]) {
      acc[curr.category] += numericAmount;
    } else {
      acc[curr.category] = numericAmount;
    }
    return acc;
  }, {});
  return (
    <section className="bg-white rounded-3xl p-6 border border-[#111827]/10 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <h2 className="text-base font-bold text-[#111827]">
            Category Spending Overview
          </h2>
          <p className="text-xs text-[#6B7280]">
            Real-time dynamic category distribution
          </p>
        </div>
        <div className="text-xs font-semibold text-[#80A1C1] bg-[#80A1C1]/10 px-3 py-1.5 rounded-full self-start sm:self-auto">
          Updated with State
        </div>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3"
        id="categoryOverviewGrid"
      >
        <div className="p-3 bg-[#FFF5E6] rounded-2xl border border-[#111827]/5 flex flex-col justify-between">
          <span className="text-xs text-[#6B7280] font-medium">🍱 Food</span>
          <span
            className="text-sm font-bold font-mono text-[#111827] mt-1"
            id="cat-food-total"
          >
            ${(categoryTotals["Food"] || 0).toFixed(2)}
          </span>
        </div>
        <div className="p-3 bg-[#FFF5E6] rounded-2xl border border-[#111827]/5 flex flex-col justify-between">
          <span className="text-xs text-[#6B7280] font-medium">🏠 Rent</span>
          <span
            className="text-sm font-bold font-mono text-[#111827] mt-1"
            id="cat-rent-total"
          >
            ${(categoryTotals["Rent"] || 0).toFixed(2)}
          </span>
        </div>
        <div className="p-3 bg-[#FFF5E6] rounded-2xl border border-[#111827]/5 flex flex-col justify-between">
          <span className="text-xs text-[#6B7280] font-medium">
            🎬 Entertainment
          </span>
          <span
            className="text-sm font-bold font-mono text-[#111827] mt-1"
            id="cat-ent-total"
          >
            ${(categoryTotals["Entertainment"] || 0).toFixed(2)}
          </span>
        </div>
        <div className="p-3 bg-[#FFF5E6] rounded-2xl border border-[#111827]/5 flex flex-col justify-between">
          <span className="text-xs text-[#6B7280] font-medium">💊 Medical</span>
          <span
            className="text-sm font-bold font-mono text-[#111827] mt-1"
            id="cat-med-total"
          >
            ${(categoryTotals["Medical"] || 0).toFixed(2)}
          </span>
        </div>
        <div className="p-3 bg-[#FFF5E6] rounded-2xl border border-[#111827]/5 flex flex-col justify-between">
          <span className="text-xs text-[#6B7280] font-medium">
            ⚡ Utilities
          </span>
          <span
            className="text-sm font-bold font-mono text-[#111827] mt-1"
            id="cat-util-total"
          >
            ${(categoryTotals["Utilities"] || 0).toFixed(2)}
          </span>
        </div>
        <div className="p-3 bg-[#FFF5E6] rounded-2xl border border-[#111827]/5 flex flex-col justify-between">
          <span className="text-xs text-[#6B7280] font-medium">
            🛍️ Shopping
          </span>
          <span
            className="text-sm font-bold font-mono text-[#111827] mt-1"
            id="cat-shop-total"
          >
            ${(categoryTotals["Shopping"] || 0).toFixed(2)}
          </span>
        </div>
        <div className="p-3 bg-[#FFF5E6] rounded-2xl border border-[#111827]/5 flex flex-col justify-between">
          <span className="text-xs text-[#6B7280] font-medium">✨ Other </span>
          <span
            className="text-sm font-bold font-mono text-[#111827] mt-1"
            id="cat-shop-total"
          >
            ${(categoryTotals["Other"] || 0).toFixed(2)}
          </span>
        </div>
      </div>
    </section>
  );
};

export default CategoryOverview;
