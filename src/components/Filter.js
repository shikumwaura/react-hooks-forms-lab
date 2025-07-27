import React from "react";

function Filter({
  search = "",
  onSearchChange = () => {},
  selectedCategory = "All",
  onCategoryChange = () => {},
}) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={onSearchChange}
        aria-label="Search items"
      />
      <select
        name="filter"
        value={selectedCategory}
        onChange={onCategoryChange}
        aria-label="Filter items by category"
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
