import { useState } from "react";
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

  return (
    <>
      <TransactionContext.Provider value={{ transactions, setTransactions }}>
        <ShowModalContext.Provider value={{ showModal, setShowModal }}>
          <Header />
          <MainAction />
          <Footer />
        </ShowModalContext.Provider>
      </TransactionContext.Provider>
    </>
  );
}

export default BentoSpend;
