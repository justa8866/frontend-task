import React, { FC, useEffect, useState } from 'react';
import ColorBox from '../ColorBox';
import ColorsList from '../ColorsList';

import styles from './DisplayColorForm.module.scss';

const DisplayColorForm: FC = () => {
  const [colors, setColors] = useState<string[]>([]);
  const [filterRedValue, setFilterRedValue] = useState<number>(0);
  const [filterGreenValue, setFilterGreenValue] = useState<number>(0);
  const [filterBlueValue, setFilterBlueValue] = useState<number>(0);
  const [filterSaturationValue, setFilterSaturationValue] = useState<number>(0);

  const getColorsFromLocalStorage = () => {
    const colorsUnparsed = localStorage.getItem('colors');
    const colors: string[] = JSON.parse(colorsUnparsed as string) || [];

    setColors(colors);
  };

  useEffect(() => {
    getColorsFromLocalStorage();
  }, []);

  window.addEventListener('storage', () => getColorsFromLocalStorage());

  return (
    <div>
      <div className={styles.boxesColorContainer}>
        {colors.map((color, index) => (
          <ColorBox key={index} index={index} color={color} showHidden={true} />
        ))}
      </div>

      <form action='' method='post' className={styles.form}>
        <label htmlFor='red'>Red: </label>
        <input
          type='number'
          className={styles.input}
          name='red'
          id='red'
          placeholder='0-255'
          required
          value={filterRedValue}
          onChange={event => setFilterRedValue(parseInt(event.target.value))}
        />
        <label htmlFor='green'>Green: </label>
        <input
          type='number'
          className={styles.input}
          name='green'
          id='green'
          placeholder='0-255'
          required
          value={filterGreenValue}
          onChange={event => setFilterGreenValue(parseInt(event.target.value))}
        />
        <label htmlFor='blue'>Blue: </label>
        <input
          type='number'
          className={styles.input}
          name='blue'
          id='blue'
          placeholder='0-255'
          required
          value={filterBlueValue}
          onChange={event => setFilterBlueValue(parseInt(event.target.value))}
        />
        <label htmlFor='saturation'>Saturation: </label>
        <input
          type='number'
          className={styles.input}
          name='saturation'
          id='saturation'
          placeholder='0-255'
          required
          value={filterSaturationValue}
          onChange={event => setFilterSaturationValue(parseInt(event.target.value))}
        />
      </form>

      <ColorsList
        filterRedValue={filterRedValue}
        filterGreenValue={filterGreenValue}
        filterBlueValue={filterBlueValue}
        filterSaturationValue={filterSaturationValue}
      />
    </div>
  );
};

export default DisplayColorForm;
