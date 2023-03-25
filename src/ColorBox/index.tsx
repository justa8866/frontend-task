import React, { FC, useEffect, useRef } from 'react';

import styles from './ColorBox.module.scss';

interface ColorBoxProps {
  color: string;
  showHidden: boolean;
  index?: number;
}

const ColorBox: FC<ColorBoxProps> = ({ color, showHidden, index }) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.setProperty('--color', color);
    }
  }, [color]);

  const removeColor = () => {
    const colorsUnparsed = localStorage.getItem('colors');
    const colors: string[] = JSON.parse(colorsUnparsed as string) || [];

    colors.splice(index || -1, 1);

    localStorage.setItem('colors', JSON.stringify(colors));
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div>
      <div className={styles.colorBox} ref={boxRef}>
        {showHidden ? (
          <button type='button' className={styles.hiddenDeleteButton} onClick={() => removeColor()}>
            X
          </button>
        ) : (
          <></>
        )}
      </div>
      {color}
    </div>
  );
};

export default ColorBox;
