import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import './PositionsPanel';
import Table from '../Table/Table';
import { Styles } from './PositionsPanel.styles';
import useData from '../../hooks/useData';
import { API_KEY } from '../../api/coinapi/key';

const PositionsPanel = () => {
  const [data, setData] = useState([]);
  // const [loading, data] = useData('https://rest.coinapi.io/v1/assets', {
  //   method: 'GET',
  //   headers: { 'X-CoinAPI-Key': API_KEY },
  // });

  // console.log('positions panel', data);

  // const [loading, data] = useData('https://api.tvmaze.com/search/shows?q=snow');

  console.log('positions panel', data);

  useEffect(() => {
    (async () => {
      const result = await axios('https://api.tvmaze.com/search/shows?q=snow');
      setData(result.data);
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const result = await useData('https://rest.coinapi.io/v1/assets', {
  //       method: 'GET',
  //       headers: { 'X-CoinAPI-Key': API_K§EY },
  //     });
  //   })();
  // }, []);

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
        {/* {loading ? (
          <h3>Loading....</h3>
        ) : ( */}
        <Table columns={columns} data={data} />
        {/* )} */}
      </Styles>
    </div>
  );
};

export default PositionsPanel;
