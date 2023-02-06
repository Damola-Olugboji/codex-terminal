import React from 'react';
import { Button, Window, WindowContent, WindowHeader } from 'react95';
import styles from './defaultwindow.module.css';
const DefaultWindow = ({ toolbar, title, children }) => {
  return (
    <Window resizable className="window">
      <WindowHeader className={styles.windowTitle}>
        <span>{title}</span>
        <Button>
          <span className="close-icon" />
        </Button>
      </WindowHeader>
      {/* <Toolbar>
        <Button variant="menu" size="sm">
          File
        </Button>
        <Button variant="menu" size="sm">
          Edit
        </Button>
        <Button variant="menu" size="sm" disabled>
          Save
        </Button>
      </Toolbar> */}
      <WindowContent>{children}</WindowContent>
    </Window>
  );
};

export default DefaultWindow;
