import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import useData from '../../hooks/useData';

import axios from 'axios';

import './PositionsPanel';
import Table from '../Table/Table';
import { Styles } from './PositionsPanel.styles';

const PositionsPanel = () => {
  const [data, setData] = useState([]);

  // const [loading, data] = useData('https://rest.coinapi.io/v1/assets', {
  //   method: 'GET',
  //   headers: { 'X-CoinAPI-Key': process.env.REACT_APP_COINAPI_KEY },
  // });

  useEffect(() => {
    (async () => {
      const result = await axios('https://api.tvmaze.com/search/shows?q=snow');
      setData(result.data);
    })();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios('https://rest.coinapi.io/v1/assets', {
  //       method: 'GET',
  //       headers: { 'X-CoinAPI-Key': process.env.REACT_APP_COINAPI_KEY },
  //     });

  //     // const response = await fetch(url, {...headers});
  //     const data = await response.data;
  //     console.log('hook data', typeof data);
  //     setData(data);
  //   };
  //   fetchData();
  // }, []);

  console.log('positions', data);

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

  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: 'Crypto Currency',

  //       columns: [
  //         {
  //           Header: 'Name',
  //           accessor: 'asset_id',
  //         },
  //         {
  //           Header: 'Name',
  //           accessor: 'name',
  //         },
  //       ],
  //     },
  //     {
  //       // Second group - Details
  //       Header: 'Deatils',

  //       // Second group columns -
  //       columns: [
  //         {
  //           Header: 'Language',
  //           accessor: 'data_quote_start',
  //         },
  //         {
  //           Header: 'Gener(s)',
  //           accessor: 'data_quote_start',
  //           // Cell method will provide the value of the cell; we can create a custom element for the Cell
  //           // Cell: ({ cell: { value } }: any) => <Genres values={value} />,
  //         },
  //         // {
  //         //   Header: 'Runtime',
  //         //   accessor: 'show.runtime',
  //         //   // Cell method will provide the value of the cell; we can create a custom element for the Cell
  //         //   Cell: ({ cell: { value } }) => {
  //         //     const hour = Math.floor(value / 60);
  //         //     const min = Math.floor(value % 60);
  //         //     return (
  //         //       <>
  //         //         {hour > 0 ? `${hour} hr${hour > 1 ? 's' : ''} ` : ''}
  //         //         {min > 0 ? `${min} min${min > 1 ? 's' : ''}` : ''}
  //         //       </>
  //         //     );
  //         //   },
  //         // },
  //         {
  //           Header: 'Status',
  //           accessor: 'data_quote_start',
  //         },
  //       ],
  //     },
  //   ],
  //   []
  // );

  const columns = useMemo(
    () => [
      {
        Header: 'Crypto Currency',

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
      <Styles>
        {data.length === 0 ? (
          <h3>Loading....</h3>
        ) : (
          // data.map((info: any) => {
          // <h1>Table</h1>
          <Table columns={columns} data={data} />
          // })
        )}
      </Styles>
    </div>
  );
};

export default PositionsPanel;
