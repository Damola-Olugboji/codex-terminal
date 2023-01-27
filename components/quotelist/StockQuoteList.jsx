import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'react95';
const tickers = require('../../src/stocktickers');

const StockQuoteList = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // create an array to store the API call promises
    const promises = [];

    // loop through the tickers and make an API call for each one
    tickers.forEach((ticker) => {
      promises.push(
        fetch(`https://generic709.herokuapp.com/stockc/${ticker}`)
          .then((response) => response.json())
          .then((data) => {
            setData((prevData) => ({ ...prevData, [ticker]: data }));
          })
      );
    });

    // wait for all API calls to complete
    Promise.all(promises).then(() => {
      // update the component's state with the data
    });
  }, [tickers]);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Ticker</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell disabled>Change</TableHeadCell>
            <TableHeadCell disabled>Volume</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickers.map((ticker) => {
            const stockData = data[ticker];

            return (
              <TableRow key={ticker}>
                <TableDataCell style={{ textAlign: 'center' }}>
                  <p>{ticker}</p>
                </TableDataCell>
                <TableDataCell>
                  {stockData ? stockData.price : '...'}
                </TableDataCell>
                <TableDataCell>
                  {stockData ? stockData.change : '...'}
                </TableDataCell>
                <TableDataCell>
                  {stockData ? stockData.volume : '...'}
                </TableDataCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default StockQuoteList;
