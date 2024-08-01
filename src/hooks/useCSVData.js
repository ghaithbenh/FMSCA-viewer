import { useState, useEffect } from 'react';
import fetchCSVData from '../services/csvService';

const useCSVData = (url) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [filters, setFilters] = useState({
    entityType: '',
    operatingStatus: '',
    legalName: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rows = await fetchCSVData(url);
        setData(rows);
        setFilteredData(rows);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);

  useEffect(() => {
    let newFilteredData = data;

    // Update filters to match the new column names
    if (filters.entityType) {
      newFilteredData = newFilteredData.filter(row =>
        row.entity_type && typeof row.entity_type === 'string' && row.entity_type.toLowerCase().includes(filters.entityType.toLowerCase())
      );
    }
    if (filters.operatingStatus) {
      newFilteredData = newFilteredData.filter(row =>
        row.operating_status && typeof row.operating_status === 'string' && row.operating_status.toLowerCase().includes(filters.operatingStatus.toLowerCase())
      );
    }
    if (filters.legalName) {
      newFilteredData = newFilteredData.filter(row =>
        row.legal_name && typeof row.legal_name === 'string' && row.legal_name.toLowerCase().includes(filters.legalName.toLowerCase())
      );
    }
    setFilteredData(newFilteredData);
  }, [filters, data]);

  const handlePageChange = (direction) => {
    if (direction === 'next' && (currentPage * itemsPerPage) < filteredData.length) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    filteredData,
    filters,
    setFilters,
    currentPage,
    handlePageChange,
    totalPages: Math.ceil(filteredData.length / itemsPerPage),
    tableData: filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
  };
};

export default useCSVData;
