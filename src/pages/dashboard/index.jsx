import MainLayout from 'components/layouts/MainLayout';
import QuoteList from 'components/quotelist/StockQuoteList';
import Head from 'next/head';
import styles from './index.module.css';

export default function Dashboard() {
  return (
    <>
      <Head></Head>
      <MainLayout>
        <div className={styles.bodyContainer}>
          <div className={styles.quotesContainer}>
            <QuoteList></QuoteList>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
