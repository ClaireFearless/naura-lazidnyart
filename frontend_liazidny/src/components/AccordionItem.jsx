import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border border-body/30 rounded-md shadow-sm overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-4 py-3 bg-base hover:bg-footerText transition-colors duration-200"
      >
        <span className="text-left font-semibold text-heading">{title}</span>
        <span className="text-brandTitleFooter">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>

      {isOpen && (
        <div className="px-4 py-3 bg-base text-body border-t border-body/30">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;