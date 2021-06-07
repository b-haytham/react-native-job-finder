import React, { useCallback, useState } from "react"
import { StyleSheet } from "react-native"

import Slider from 'rn-range-slider';

import Label from "./components/Label";
import Notch from "./components/Notch";
import Rail from "./components/Rail";
import RailSelected from "./components/RailSelected";
import Thumb from "./components/Thumb";

interface PriceSliderProps {
    minValue: number
    maxValue: number
    lowValue: number
    highValue: number
    onValueChange(low: number, height: number): void
}

const PriceSlider: React.FC<PriceSliderProps> = ({onValueChange, maxValue, minValue, lowValue, highValue}) => {
  
  const [low, setLow] = useState(lowValue);
  const [high, setHigh] = useState(highValue);
  const [min, setMin] = useState(minValue);
  const [max, setMax] = useState(maxValue);
  
  const renderThumb = useCallback(() => <Thumb/>, []);
  const renderRail = useCallback(() => <Rail/>, []);
  const renderRailSelected = useCallback(() => <RailSelected/>, []);
  const renderLabel = useCallback(value => <Label text={value}/>, []);
  const renderNotch = useCallback(() => <Notch/>, []);


    return (
    <Slider
      style={styles.slider}
      min={min}
      max={max}
      step={1}
      disableRange={false}
      floatingLabel={true}
      renderThumb={renderThumb}
      renderRail={renderRail}
      renderRailSelected={renderRailSelected}
      renderLabel={renderLabel}
      renderNotch={renderNotch}
      onValueChanged={onValueChange}
    />
    )
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'stretch',
      padding: 12,
      flex: 1,
      backgroundColor: '#555',
    },
    slider: {
    },
    button: {
    },
    header: {
      alignItems: 'center',
      backgroundColor: 'black',
      padding: 12,
    },
    horizontalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    text: {
      color: 'white',
      fontSize: 20,
    },
    valueText: {
      width: 50,
      color: 'white',
      fontSize: 20,
    },
  });

export default PriceSlider