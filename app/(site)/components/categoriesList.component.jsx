'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CategoriesList({ categories, currentCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(currentCategory || null);
  const pathname = usePathname();

  useEffect(() => {
    // Update selected category when currentCategory changes
    setSelectedCategory(currentCategory || null);
  }, [currentCategory]);

  useEffect(() => {
    // Close dropdown when navigating to a new page
    setIsOpen(false);
  }, [pathname]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="CategoriesDropdown">
      <button onClick={handleToggle} className="DropdownToggle">
        {selectedCategory ? selectedCategory.name : 'Select Category'}
      </button>
      {isOpen && (
        <ul className="DropdownMenu">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link 
                href={`/category/${category.slug}`}
                onClick={() => handleCategorySelect(category)}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}