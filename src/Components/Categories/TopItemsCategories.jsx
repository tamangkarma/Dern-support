import { categories } from "./topItemCategories";


export const TopItemCategories = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-full sm:max-w-sm md:max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base md:text-lg font-semibold">Top item categories</h2>
        <button className="text-sm text-purple-600">View all</button>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-purple-100 text-purple-700 p-4 rounded-xl hover:bg-purple-200 transition"
          >
            <div className="mb-2">
              {cat.icon && <cat.icon size={28} />}
            </div>
            <span className="text-xs text-center">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
