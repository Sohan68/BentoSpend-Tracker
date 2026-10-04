import CategoryOverview from "./CategoryOverview";
import Controller from "./Controller";
import TrasactionList from "./ListSection/TrasactionList";
import Summary from "./Summary";

const MainAction = () => {
  return (
    <>
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Summary></Summary>
        <CategoryOverview></CategoryOverview>
        <Controller></Controller>
        <TrasactionList></TrasactionList>
      </main>
    </>
  );
};

export default MainAction;
