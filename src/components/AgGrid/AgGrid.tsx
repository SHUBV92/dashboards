import { useState, useEffect } from 'react';
import useData from '../../hooks/useData';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { apiCall } from '../../api/coinapi/apiCall';

const AgGrid = () => {
  const [selectedNode, setSelectedNode] = useState([]);

  const [data, setData] = useState(apiCall());

  // const gridData = data?.map((asset) => {
  //   return {
  //     asset_id: asset.asset_id,
  //     name: asset.name,
  //     type_is_crypto: asset.type_is_crypto,
  //   };
  // });

  const [state, setState] = useState({
    columnDefs: [
      { field: 'aaset_id', sortable: true, checkboxSelection: true },
      { field: 'name', sortable: true },
      { field: 'aaset_id', sortable: true },
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
