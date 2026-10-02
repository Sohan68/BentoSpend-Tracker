const expenses = [
  {
    id: 1,
    icon: "🛍️",
    title: "Office Ergonomic Chair & Desk Pad",
    category: "Shopping",
    date: "Aug 25, 2026",
    description: "Workstation upgrade",
    amount: "$480.00",
  },
  {
    id: 2,
    icon: "🎬",
    title: "Weekend Cinema & Dinner",
    category: "Entertainment",
    date: "Aug 20, 2026",
    description: "Movie tickets and restaurant bill",
    amount: "$150.00",
  },
  {
    id: 3,
    icon: "💊",
    title: "Full Body Medical Health Checkup",
    category: "Medical",
    date: "Aug 15, 2026",
    description: "Annual medical examination",
    amount: "$375.00",
  },
  {
    id: 4,
    icon: "⚡",
    title: "High-speed Internet & Electricity",
    category: "Utilities",
    date: "Aug 10, 2026",
    description: "Utility bill payment",
    amount: "$220.00",
  },
  {
    id: 5,
    icon: "🍱",
    title: "Supermarket Grocery & Supplies",
    category: "Food",
    date: "Aug 5, 2026",
    description: "Weekly essentials and vegetables",
    amount: "$420.00",
  },
  {
    id: 6,
    icon: "🏠",
    title: "Monthly House Rent",
    category: "Rent",
    date: "Aug 1, 2026",
    description: "Apartment monthly lease payment",
    amount: "$1,200.00",
  },
];
function getAllCard() {
  return expenses;
}
export { getAllCard };
