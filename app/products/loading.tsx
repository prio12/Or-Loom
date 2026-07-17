export default function Loading() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-10 py-10 bg-[#F7F5F2] min-h-screen">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="aspect-3/4 bg-gray-200 animate-pulse rounded" />
      ))}
    </div>
  );
}
