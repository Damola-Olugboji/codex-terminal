import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'react95';
import styles from './stockquotelist.module.css';
const tickers = require('../../src/stocktickers');
let randchars = [
  '*',
  '%',
  '$',
  '&',
  '@',
  '!',
  '^',
  '~',
  '+',
  '?',
  '/',
  '|',
  '<',
  '>',
];

const StockQuoteList = () => {
  const [data, setData] = useState({});
  const [updatedRows, setUpdatedRows] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const promises = [];
      tickers.forEach((ticker) => {
        promises.push(
          fetch(`https://generic709.herokuapp.com/stockc/${ticker}`)
            .then((response) => response.json())
            .then((data) => {
              setData((prevData) => ({ ...prevData, [ticker]: data }));
              setUpdatedRows([...updatedRows, ticker]);
            })
        );
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    updatedRows.forEach((ticker) => {
      document.getElementById(ticker).classList.add(styles.updatedRow);
    });
  }, [updatedRows]);

  useEffect(() => {
    updatedRows.forEach((ticker) => {
      setTimeout(() => {
        document.getElementById(ticker).classList.remove(styles.updatedRow);
      }, 1000);
    });
  }, [updatedRows]);
  return (
    <div className={styles.quoteContainer}>
      <Table className={styles.quoteTable}>
        <TableHead className={styles.quoteTableHead}>
          <TableRow>
            <TableHeadCell>Ticker</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell disabled>Change</TableHeadCell>
            <TableHeadCell disabled>Volume</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className={styles.quoteTableBody}>
          {tickers.map((ticker) => {
            const stockData = data[ticker];

            return (
              <TableRow key={ticker} id={ticker}>
                <TableDataCell style={{ textAlign: 'center' }}>
                  <p>{ticker}</p>
                </TableDataCell>
                <TableDataCell>
                  ${stockData ? stockData.price : '...'}
                  {/* {randchars[Math.floor(Math.random() * 10)]} */}
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
    </div>
  );
};

export default StockQuoteList;
