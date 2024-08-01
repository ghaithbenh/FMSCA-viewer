import React from 'react';
import { Table } from 'react-bootstrap';

const DataTable = ({ headers, data }) => {
  console.log("Table Data:", data); // Log the data being passed to the table
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map(header => (
              <td key={header}>{row[header.trim()] !== undefined ? row[header.trim()] : 'N/A'}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
