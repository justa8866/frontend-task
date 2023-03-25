import React, { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';

import styles from './CreateColorForm.module.scss';

const CreateColorForm: FC = () => {
  const [color, setColor] = useState<string>('');

  const onColorChange: ChangeEventHandler<HTMLInputElement> = event => {
    const inputValue = event.target.value;
    const firstChar = inputValue.charAt(0);
    const lastChar = inputValue.slice(-1);
    const regex = /^[a-fA-F0-9]{1}$/i;

    if (inputValue.length === 1) {
      if (firstChar !== '#') {
        return;
      }

      setColor(firstChar);
      return;
    }

    if (inputValue.length <= 4 && regex.test(lastChar)) {
      setColor(inputValue.toUpperCase());
    }
  };

  const saveColorToLocalStorage = () => {
    const colorsUnparsed = localStorage.getItem('colors');
    const colors: string[] = JSON.parse(colorsUnparsed as string) || [];

    colors.push(color);
    localStorage.setItem('colors', JSON.stringify(colors));
    window.dispatchEvent(new Event('storage'));
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    saveColorToLocalStorage();
  };

  return (
    <div className={styles.navMargin}>
      <nav className={styles.nav}>
        <form action='' method='post' className={styles.form} onSubmit={onSubmit}>
          <label htmlFor='color'>Enter color in #rgb format: </label>
          <input
            type='text'
            name='color'
            id='color'
            placeholder='#FFF'
            required
            value={color}
            onChange={onColorChange}
          />
          <button type='submit' className={styles.button} disabled={color.length !== 4}>
            Add
          </button>
        </form>
      </nav>
    </div>
  );
};

export default CreateColorForm;
