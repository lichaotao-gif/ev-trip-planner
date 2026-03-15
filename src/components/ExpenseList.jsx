import ExpenseCard from './ExpenseCard';

export default function ExpenseList({ expenses }) {
  if (!expenses?.length) return null;
  return (
    <div className="space-y-2">
      {expenses.map((item) => (
        <ExpenseCard key={item.id} item={item} />
      ))}
    </div>
  );
}
