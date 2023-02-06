import { Monitor } from 'react95';
import styles from './custommonitor.module.css';

const CustomMonitor = () => {
  return (
    <div className={styles.monitor}>
      <Monitor backgroundStyles={{ background: 'blue' }}></Monitor>
    </div>
  );
};

export default CustomMonitor;
