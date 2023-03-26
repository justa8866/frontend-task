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

  const checkIfColorValueNumberIsCorrect = (colorNumber: number): number => {
    if (colorNumber >= 0 && colorNumber <= 255) {
      return colorNumber;
    }

    return 0;
  };

  const checkIfSaturationValueNumberIsCorrect = (saturationNumber: number): number => {
    if (saturationNumber >= 0 && saturationNumber <= 100) {
      return saturationNumber;
    }

    return 0;
  };

  useEffect(() => {
    getColorsFromLocalStorage();
  }, []);

  window.addEventListener('storage', () => getColorsFromLocalStorage());

  return (
    <>
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
          min={0}
          max={255}
          required
          value={filterRedValue}
          onChange={event =>
            setFilterRedValue(checkIfColorValueNumberIsCorrect(parseInt(event.target.value)))
          }
        />
        <label htmlFor='green'>Green: </label>
        <input
          type='number'
          className={styles.input}
          name='green'
          id='green'
          placeholder='0-255'
          min={0}
          max={255}
          required
          value={filterGreenValue}
          onChange={event =>
            setFilterGreenValue(checkIfColorValueNumberIsCorrect(parseInt(event.target.value)))
          }
        />
        <label htmlFor='blue'>Blue: </label>
        <input
          type='number'
          className={styles.input}
          name='blue'
          id='blue'
          placeholder='0-255'
          min={0}
          max={255}
          required
          value={filterBlueValue}
          onChange={event =>
            setFilterBlueValue(checkIfColorValueNumberIsCorrect(parseInt(event.target.value)))
          }
        />
        <label htmlFor='saturation'>Saturation: </label>
        <input
          type='number'
          className={styles.input}
          name='saturation'
          id='saturation'
          placeholder='0-100'
          min={0}
          max={100}
          required
          value={filterSaturationValue}
          onChange={event =>
            setFilterSaturationValue(
              checkIfSaturationValueNumberIsCorrect(parseInt(event.target.value)),
            )
          }
        />
      </form>

      <ColorsList
        filterRedValue={filterRedValue}
        filterGreenValue={filterGreenValue}
        filterBlueValue={filterBlueValue}
        filterSaturationValue={filterSaturationValue}
      />
    </>
  );
};

export default DisplayColorForm;
