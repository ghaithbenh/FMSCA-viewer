import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useCSVData from './hooks/useCSVData';
import DataTable from './components/DataTable';
import Pagination from './components/Pagination';
import Filters from './components/Filters';
import './Styles.css';

const App = () => {
  const url = '/data.csv'; 
  const {
    filteredData, 
    filters,
    setFilters,
    currentPage,
    handlePageChange,
    totalPages,
  } = useCSVData(url);

  // Specify the columns to show
  const columnsToShow = [
    'created_dt',
    'data_source_modified_dt',
    'entity_type',
    'operating_status',
    'legal_name',
    'dba_name',
    'physical_address',
    'phone',
    'usdot_number',
    'mc_mx_ff_number',
    'power_units',
    'out_of_service_date',
  ];

  // Calculate the data to display based on current page
  const tableData = filteredData.slice((currentPage - 1) * 10, currentPage * 10);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">FMSCA Viewer</h1>
          <Filters filters={filters} setFilters={setFilters} />
          <DataTable headers={columnsToShow} data={tableData} />
          <Pagination currentPage={currentPage} handlePageChange={handlePageChange} totalPages={totalPages} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
