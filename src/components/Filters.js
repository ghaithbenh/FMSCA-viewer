import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        name="entityType"
        placeholder="Filter by Entity Type"
        value={filters.entityType}
        onChange={handleChange}
        className="form-control"
      />
      <input
        type="text"
        name="operatingStatus"
        placeholder="Filter by Operating Status"
        value={filters.operatingStatus}
        onChange={handleChange}
        className="form-control"
      />
      <input
        type="text"
        name="legalName"
        placeholder="Filter by Legal Name"
        value={filters.legalName}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
};

export default Filters;
