import MainLayout from 'components/layouts/MainLayout';
import CustomMonitor from 'components/monitor/CustomMonitor';
import CryptoQuoteList from 'components/quotelist/CryptoQuoteList';
import StockQuoteList from 'components/quotelist/StockQuoteList';
import Head from 'next/head';
import styles from './index.module.css';

export default function Dashboard() {
  return (
    <>
      <Head></Head>
      <MainLayout>
        <div className={styles.bodyContainer}>
          <div className={styles.quotesContainer}>
            <StockQuoteList title="Stocks"></StockQuoteList>
            <CryptoQuoteList title="Crypto"></CryptoQuoteList>
          </div>
          <CustomMonitor></CustomMonitor>
        </div>
      </MainLayout>
    </>
  );
}
