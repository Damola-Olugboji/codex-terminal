import CustomButton from 'components/buttons/CustomButton';
import { Toolbar, Window, WindowContent, WindowHeader } from 'react95';
import styles from './mainlayout.module.css';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Window className={styles.window}>
        <WindowHeader></WindowHeader>
        <Toolbar noPadding className={styles.toolbar}>
          <CustomButton
            buttonText="Dashboard"
            href="/dashboard"
            variant="thin"
          />
          <CustomButton
            buttonText="Fundamental"
            href="/"
            variant="thin"
            disabled
          />
          <CustomButton
            buttonText="Portfolio"
            href="/"
            variant="thin"
            disabled
          />
          <CustomButton href="/" variant="thin" square></CustomButton>
        </Toolbar>
        <WindowContent>{children}</WindowContent>
      </Window>
    </div>
  );
};

export default MainLayout;
