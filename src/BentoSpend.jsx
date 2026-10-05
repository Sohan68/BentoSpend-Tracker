import { useState } from "react";
import { ToastContainer } from "react-toastify";
import {
  ShowModalContext,
  TransactionContext,
} from "./Contex/TransactionContex";
import Footer from "./Footer";
import Header from "./Header";
import MainAction from "./MainAction/MainAction";
import { getAllCard } from "./getInitialCard";

function BentoSpend() {
  const [transactions, setTransactions] = useState(getAllCard);
  const [showModal, setShowModal] = useState(false);
  const [updateExpence, setUpdateExpence] = useState(null);
  const [searchTransaction, setSearchTransaction] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("date-desc");

  return (
    <>
      <TransactionContext.Provider
        value={{
          transactions,
          setTransactions,
          updateExpence,
          setUpdateExpence,
          searchTransaction,
          setSearchTransaction,
          activeCategory,
          setActiveCategory,
          sortOrder,
          setSortOrder,
        }}
      >
        <ShowModalContext.Provider value={{ showModal, setShowModal }}>
          <Header />
          <MainAction />
          <Footer />
          <ToastContainer autoClose={3000} />
        </ShowModalContext.Provider>
      </TransactionContext.Provider>
    </>
  );
}

export default BentoSpend;
