const expenses = [
  {
    id: 1,
    icon: "🛍️",
    title: "Office Ergonomic Chair & Desk Pad",
    category: "Shopping",
    date: "25 Aug, 2026",
    description: "Workstation upgrade",
    amount: "$480.00",
  },
  {
    id: 2,
    icon: "🎬",
    title: "Weekend Cinema & Dinner",
    category: "Entertainment",
    date: "20 Aug, 2026",
    description: "Movie tickets and restaurant bill",
    amount: "$150.00",
  },
  {
    id: 3,
    icon: "💊",
    title: "Full Body Medical Health Checkup",
    category: "Medical",
    date: "15 Aug, 2026",
    description: "Annual medical examination",
    amount: "$375.00",
  },
  {
    id: 4,
    icon: "⚡",
    title: "High-speed Internet & Electricity",
    category: "Utilities",
    date: "10 Aug, 2026",
    description: "Utility bill payment",
    amount: "$220.00",
  },
  {
    id: 5,
    icon: "🍱",
    title: "Supermarket Grocery & Supplies",
    category: "Food",
    date: "5 Aug, 2026",
    description: "Weekly essentials and vegetables",
    amount: "$420.00",
  },
  {
    id: 6,
    icon: "🏠",
    title: "Monthly House Rent",
    category: "Rent",
    date: "1 Aug, 2026",
    description: "Apartment monthly lease payment",
    amount: "$1,200.00",
  },
];
const categoryStyles = {
  Shopping: {
    borderColor: "bg-emerald-50 border-emerald-200",
    bgColor: "bg-emerald-50 text-[#16A34A] border-emerald-200",
  },
  Entertainment: {
    borderColor: "bg-purple-100 border-purple-200",
    bgColor: "bg-purple-100 text-purple-900 border-purple-200",
  },
  Medical: {
    borderColor: "bg-red-50 border-red-200",
    bgColor: "bg-red-50 text-[#DC2626] border-red-200",
  },
  Utilities: {
    borderColor: "bg-amber-50 border-amber-200",
    bgColor: "bg-amber-50 text-[#D97706] border-amber-200",
  },
  Food: {
    borderColor: "bg-[#FAD4C0]/40 border-[#FAD4C0]",
    bgColor: "bg-[#FAD4C0]/40 text-[#111827] border-[#FAD4C0]",
  },
  Rent: {
    borderColor: "bg-[#80A1C1]/20 border-[#80A1C1]/40",
    bgColor: "bg-[#80A1C1]/20 text-[#111827] border-[#80A1C1]/40",
  },
  Education: {
    borderColor: "bg-sky-50 border-sky-200",
    bgColor: "bg-sky-50 text-sky-600 border-sky-200",
  },
  Other: {
    borderColor: "bg-slate-100 border-slate-300",
    bgColor: "bg-slate-100 text-slate-700 border-slate-300",
  },
};
const categories = [
  { id: "All", label: "All Categories" },
  { id: "Food", label: "🍱 Food" },
  { id: "Rent", label: "🏠 Rent" },
  { id: "Entertainment", label: "🎬 Entertainment" },
  { id: "Medical", label: "💊 Medical" },
  { id: "Utilities", label: "⚡ Utilities" },
  { id: "Shopping", label: "🛍️ Shopping" },
  { id: "Education", label: "📚 Education" },
  { id: "Other", label: "✨ Other" },
];
function getAllCard() {
  return expenses;
}
function getCategoryColor() {
  return categoryStyles;
}
function getCategorys() {
  return categories;
}
export { getAllCard, getCategoryColor, getCategorys };
