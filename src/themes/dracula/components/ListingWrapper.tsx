import CategoriesPros from '@interfaces/categories';
import LinksProps from '@interfaces/links';
import { CategoriesList } from './Categories';
import { Links } from './Links';
import React, { useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';

interface ListingWrapperProps {
  categories: CategoriesPros[];
  links: LinksProps[];
}

function ListingWrapper({ categories, links }: ListingWrapperProps) {
  const hasCategories = categories && categories?.length > 0;

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  function setLinksByCategory(event: React.MouseEvent<HTMLButtonElement>) {
    const getCategory = event.currentTarget.dataset.id;
    setActiveCategory(getCategory ?? 'all');
  }

  const filteredLinks = links.filter((link) => {
    const matchesCategory =
      activeCategory === 'all' || link.categoryId === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      link.label.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container px-4 max-w-xl mx-auto relative pb-16">
      {/* Search Input */}
      <div className="relative max-w-xl mx-auto mb-5">
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
          <MagnifyingGlass size={20} weight="bold" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="ابحث عن قسم أو رابط..."
          className="w-full pl-4 pr-11 py-3 bg-slate-900/60 border border-slate-800 rounded-2xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-500/70 focus:ring-2 focus:ring-cyan-500/20 text-sm transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs bg-slate-800 px-2 py-1 rounded-lg"
          >
            مسح
          </button>
        )}
      </div>

      {hasCategories && (
        <CategoriesList
          onSelectCategory={setLinksByCategory}
          activeCategory={activeCategory}
          categories={categories}
        />
      )}

      {filteredLinks.length > 0 ? (
        <Links className="mt-4" links={filteredLinks} />
      ) : (
        <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800/60">
          <p className="text-slate-400 text-sm">لم يتم العثور على نتائج تطابق بحثك</p>
        </div>
      )}

      {/* Footer Branding */}
      <footer className="mt-16 text-center text-xs text-slate-500 border-t border-slate-800/60 pt-8">
        <p className="mb-2">جميع الحقوق محفوظة © {new Date().getFullYear()} معاك سينما Ma3ak Cinema</p>
      </footer>
    </div>
  );
}

export { ListingWrapper };
