import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import './PositionsPanel';
import Table from '../Table/Table';

const PositionsPanel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios('https://api.tvmaze.com/search/shows?q=snow');
      setData(result.data);
    })();
  }, []);

  const Genres = ({ values }: any) => {
    return (
      <>
        {values.map((genre: any, idx: any) => {
          return (
            <span key={idx} className='badge'>
              {genre}
            </span>
          );
        })}
      </>
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: 'TV Show',

        columns: [
          {
            Header: 'Name',
            accessor: 'show.name',
          },
          {
            Header: 'Name',
            accessor: 'show.type',
          },
        ],
      },
      {
        // Second group - Details
        Header: 'Deatils',

        // Second group columns -
        columns: [
          {
            Header: 'Language',
            accessor: 'show.language',
          },
          {
            Header: 'Gener(s)',
            accessor: 'show.genres',
            // Cell method will provide the value of the cell; we can create a custom element for the Cell
            Cell: ({ cell: { value } }: any) => <Genres values={value} />,
          },
          {
            Header: 'Runtime',
            accessor: 'show.runtime',
            // Cell method will provide the value of the cell; we can create a custom element for the Cell
            Cell: ({ cell: { value } }) => {
              const hour = Math.floor(value / 60);
              const min = Math.floor(value % 60);
              return (
                <>
                  {hour > 0 ? `${hour} hr${hour > 1 ? 's' : ''} ` : ''}
                  {min > 0 ? `${min} min${min > 1 ? 's' : ''}` : ''}
                </>
              );
            },
          },
          {
            Header: 'Status',
            accessor: 'show.status',
          },
        ],
      },
    ],
    []
  );

  return (
    <div className='positions'>
      <input className='position-search' placeholder='search' type='text' />
      <Table columns={columns} data={data} />
    </div>
  );
};

export default PositionsPanel;
