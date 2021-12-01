import { useState, useEffect } from 'react';
import useData from '../../hooks/useData';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const AgGrid = () => {
  const [selectedNode, setSelectedNode] = useState([]);
  //   const [loading, data, error] = useData('https://rest.coinapi.io/v1/assets', {
  //     method: 'GET',
  //     headers: { 'X-CoinAPI-Key': process.env.REACT_APP_COINAPI_API_KEY },
  //   });

  const [state, setState] = useState({
    columnDefs: [
      {
        headers: 'Make',
        field: 'make',
        sortable: true,
        checkboxSelection: true,
      },
      {
        headers: 'Model',
        field: 'model',
        sortable: true,
      },
      {
        headers: 'Price',
        field: 'price',
        sortable: true,
      },
    ],
    rowData: [
      { make: 'BWM', model: 'E46', price: `£4500` },
      { make: 'BMW ', model: 'F80', price: `£35500` },
      { make: 'BMW', model: 'E92', price: `£6500` },
    ],
  });

  const onButtonClick = () => {
    // const selectedNodes = selectedNodes.getSelectedNodes();
  };

  return (
    <div className='ag-theme-balham' style={{ width: 600, height: 600 }}>
      <button onClick={onButtonClick}>submit</button>
      <AgGridReact
        columnDefs={state.columnDefs}
        rowData={state.rowData}
        rowSelection='multiple'
        // onGridReady={(params) => setSelectedNode(...sele ctedNode, params)}
      />
    </div>
  );
};

export default AgGrid;
