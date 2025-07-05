'use client';
import React, { useState } from 'react';

const SearchSection = () => {
  const [category, setCategory] = useState('');
  const [blogDate, setBlogDate] = useState('');

  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 p-4 bg-gray-50 rounded-md shadow-sm">
      <div className="flex-1">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <input
          type="search"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex-1">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
          Blog Date
        </label>
        <input
          type="date"
          id="date"
          value={blogDate}
          onChange={(e) => setBlogDate(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default SearchSection;
