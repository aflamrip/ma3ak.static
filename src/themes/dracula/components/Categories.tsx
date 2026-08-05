import CategoriesPros from '@interfaces/categories';

interface CategoriesListProps {
  categories: CategoriesPros[];
  onSelectCategory?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  activeCategory: string;
}

function CategoriesList({
  activeCategory,
  categories,
  onSelectCategory
}: CategoriesListProps) {
  return (
    <nav className="sticky top-4 z-30 mb-6 bg-slate-900/80 backdrop-blur-md rounded-2xl p-2 border border-slate-800 shadow-xl max-w-xl mx-auto">
      <ul className="scrollbar-hide flex items-center gap-2 overflow-x-auto px-1 py-1">
        {categories?.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <li key={category.id} className="flex-shrink-0">
              <button
                onClick={onSelectCategory}
                className={`whitespace-nowrap px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
                data-id={category.id}
                type="button"
              >
                {category.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { CategoriesList };
