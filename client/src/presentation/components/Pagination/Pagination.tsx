import React, { FC, useState, useEffect } from "react";
import twFocusClass from "infrastructure/utils/focus.utils";

export interface CustomLink {
  label: string;
  href: string;
}

export interface PaginationProps {
  onPageChange: (selectedPage: number) => void;
  className?: string;
  paginationItems: CustomLink[];
  activePage: number;
}

const Pagination: FC<PaginationProps> = ({ onPageChange, className = "", paginationItems, activePage }) => {
  const [currentPage, setCurrentPage] = useState(activePage);

  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
    onPageChange(selectedPage);
  };

  const renderItem = (pag: CustomLink, index: number) => {
    const isActive = currentPage === index + 1;

    if (isActive) {
      return (
        <span
          key={index}
          className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${twFocusClass()}`}
        >
          {pag.label}
        </span>
      );
    }

    return (
      <button
        key={index}
        className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
        onClick={() => handlePageChange(index + 1)}
      >
        {pag.label}
      </button>
    );
  };

  useEffect(() => {
    setCurrentPage(activePage); 
  }, [paginationItems, activePage]);

  return (
    <nav className={`nc-Pagination inline-flex space-x-1 text-base font-medium ${className}`}>
      {paginationItems.map(renderItem)}
    </nav>
  );
};

export default Pagination;
