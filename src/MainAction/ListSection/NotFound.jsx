import { useContext } from "react";
import NotFoundIcon from "../../assets/not-found.svg";
import { TransactionContext } from "../../Contex/TransactionContex";
const NotFound = () => {
  const { setSearchTransaction, setActiveCategory, setSortOrder } =
    useContext(TransactionContext);
  const handleClear = () => {
    setSearchTransaction("");
    setActiveCategory("All");
    setSortOrder("date-desc");
  };
  return (
    <>
      <div
        id="notFoundState"
        className=" bg-white rounded-3xl p-12 text-center border border-[#111827]/10"
      >
        <img
          src={NotFoundIcon}
          alt="Not found"
          className="w-32 h-32 mx-auto mb-4"
        />
        <h3 className="text-lg font-bold text-[#111827]">Not Found</h3>
        <p
          className="text-sm text-[#6B7280] max-w-sm mx-auto mt-1 mb-6"
          id="notFoundReason"
        >
          No expense transactions matched your search query or filter criteria.
        </p>
        <button
          onClick={handleClear}
          id="clearSearchFilterBtn"
          className="inline-flex items-center gap-2 bg-[#FFF5E6] hover:bg-[#FAD4C0] text-[#111827] border border-[#111827]/15 px-4 py-2 rounded-xl font-semibold text-xs transition-all cursor-pointer"
        >
          <span>Clear Search & Filters</span>
        </button>
      </div>
    </>
  );
};

export default NotFound;
