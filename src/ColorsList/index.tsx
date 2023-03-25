import React, { Component } from 'react';
import ColorBox from '../ColorBox';

import styles from './ColorsList.module.scss';

interface ColorsListStates {
  colors: string[];
}

interface ColorsListProps {
  filterRedValue: number;
  filterGreenValue: number;
  filterBlueValue: number;
  filterSaturationValue: number;
}

export class ColorsList extends Component<ColorsListProps, ColorsListStates> {
  constructor(props: ColorsListProps) {
    super(props);

    this.state = {
      colors: [],
    };
  }

  componentDidMount(): void {
    this.generateDefaultColors();
  }

  generateDefaultColors(): void {
    const colors = [];

    for (let r = 0; r < 16; r++) {
      for (let g = 0; g < 16; g++) {
        for (let b = 0; b < 16; b++) {
          colors.push(`#${r.toString(16)}${g.toString(16)}${b.toString(16)}`.toUpperCase());
        }
      }
    }

    this.sortColors(colors);

    this.setState({
      colors,
    });
  }

  sortColors(colors: string[]): void {
    colors.sort((a, b) => {
      const redA = parseInt(a[1], 16);
      const redB = parseInt(b[1], 16);

      if (redA !== redB) {
        return redB - redA;
      }

      const greenA = parseInt(a[2], 16);
      const greenB = parseInt(b[2], 16);

      if (greenA !== greenB) {
        return greenB - greenA;
      }

      const blueA = parseInt(a[3], 16);
      const blueB = parseInt(b[3], 16);

      return blueB - blueA;
    });
  }

  getSaturation(red: number, green: number, blue: number): number {
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const diff = max - min;

    if (max === 0) {
      return 0;
    } else {
      return Math.round((diff / max) * 100);
    }
  }

  filterColorByUserInputs = (color: string): boolean => {
    const red = parseInt(color[1], 16) * 17;
    const green = parseInt(color[2], 16) * 17;
    const blue = parseInt(color[3], 16) * 17;
    const saturation = this.getSaturation(red, green, blue);

    if (red > this.props.filterRedValue) {
      return true;
    }

    if (green > this.props.filterGreenValue) {
      return true;
    }

    if (blue > this.props.filterBlueValue) {
      return true;
    }

    if (saturation > this.props.filterSaturationValue) {
      return true;
    }

    return false;
  };

  render(): JSX.Element {
    return (
      <div className={styles.boxesColorContainer}>
        {this.state.colors.filter(this.filterColorByUserInputs).map((color, index) => (
          <ColorBox key={index} color={color} showHidden={false} />
        ))}
      </div>
    );
  }
}

export default ColorsList;
