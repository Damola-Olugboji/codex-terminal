import DefaultWindow from 'components/window/DefaultWindow';
import { useEffect, useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TextInput,
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

const StockQuoteList = ({ title }) => {
  const [ticker, setTicker] = useState({
    value: '',
  });
  const [data, setData] = useState([]);

  const handleChange = (e) => setTicker({ value: e.target.value });
  const addTicker = () => {
    if (tickers.indexOf(ticker.value) !== -1) {
      return;
    } else {
      tickers.push(ticker.value);
    }
  };
  const clearList = () => {
    tickers.length = 3;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      grab();
    }, 1000);

    return () => clearInterval(interval);
  });

  const grab = async () => {
    for (const singleTicker of tickers) {
      const res1 = await fetch(
        `https://generic709.herokuapp.com/stockc/${singleTicker}`
      );
      let quote;
      try {
        quote = await res1.json();
      } catch (e) {
        console.log(e);
        return;
      }
      quote['rand'] = randchars[Math.floor(Math.random() * 10)];
      setData((data) => ({ ...data, [singleTicker]: quote }));
    }
  };

  return (
    <div className={styles.quoteContainer}>
      <DefaultWindow title={title}>
        <div className={styles.tickerPicker}>
          <TextInput
            value={ticker.value}
            placeholder="Enter ticker..."
            onChange={handleChange}
            fullWidth
          />
          <Button onClick={addTicker} style={{ marginLeft: 4 }}>
            Add
          </Button>
        </div>
        <Button onClick={clearList} className={styles.clearButton} fullWidth>
          {' '}
          Clear Ticker List
        </Button>
        <Table className={styles.quoteTable}>
          <TableHead className={styles.quoteTableHead}>
            <TableRow>
              <TableHeadCell>Ticker</TableHeadCell>
              <TableHeadCell>Price</TableHeadCell>
              <TableHeadCell disabled>Change</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className={styles.quoteTableBody}>
            {tickers.map((ticker) => {
              const stockData = data[ticker];
              return (
                <TableRow key={ticker} id={ticker}>
                  <TableDataCell style={{ textAlign: 'center' }}>
                    <p>{stockData ? ticker + stockData.rand : '...'}</p>
                  </TableDataCell>
                  <TableDataCell>
                    ${stockData ? stockData.price : '...'}
                    {/* {randchars[Math.floor(Math.random() * 10)]} */}
                  </TableDataCell>
                  <TableDataCell>
                    {stockData ? stockData.change : '...'}
                  </TableDataCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </DefaultWindow>
    </div>
  );
};

export default StockQuoteList;
