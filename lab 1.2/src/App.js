import logo from './logo.svg';
import './App.css';
import LabelItem from "./components/label/LabelItem";
import InputRadio from './components/inputRadio/InputRadio';
import InputDefault from './components/inputDefault/InputDefault';
import styles from './App.module.scss';
import { useState } from 'react/cjs/react.development';
import {useEffect} from "react";


function App() {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    const [type, setType] = useState('dec');

    function decimalToHexString(number)
    {
        if (number < 0)
        {
            number = 0xFFFFFFFF + number + 1;
        }

        return number.toString(16).toUpperCase();
    }

    useEffect(() => {
        if (type === 'hex') {
            setRed(decimalToHexString(parseInt(red)));
            setGreen(decimalToHexString(parseInt(green)));
            setBlue(decimalToHexString(parseInt(blue)));
        } else {
            setRed(parseInt(red, 16));
            setGreen(parseInt(green, 16));
            setBlue(parseInt(blue, 16));
        }
    }, [type])

    useEffect(() => {
        console.log(red)
        console.log(blue)
        console.log(green)
    }, [red, blue, green])

    const onColorChange = (e, color) => {
        const { value } = e.target
        switch (color) {
            case 'red':
                setRed(value)
                break;
            case 'blue':
                setBlue(value)
                break;
            case 'green':
                setGreen(value)
                break;
        }
    }

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

   return(
       <div className={styles.content}>
           <div className={styles.content__left}>
              <LabelItem label={{title: 'Красный'}}/>
              <InputDefault value={red} type={type} onChange={(e)=>onColorChange(e, 'red')}/>
              <LabelItem label={{title: 'Зелёный'}}/>
              <InputDefault value={green} type={type} onChange={(e)=>onColorChange(e, 'green')}/>
              <LabelItem label={{title: 'Синий'}}/>
              <InputDefault value={blue} type={type} onChange={(e)=>onColorChange(e, 'blue')}/>
              <div onChange={(e) => setType(e.target.value.toLowerCase())} className={styles.container}>
                  <InputRadio radio={{title: 'Dec'}}/>
                  <InputRadio radio={{title: 'Hex'}}/>
              </div>
           </div>
           <div className={styles.content__right} style={{backgroundColor: type === 'hex' ? rgbToHex(red, green, blue) : `rgb(${red}, ${green}, ${blue})`}}>
           </div>
       </div>
    );
}

export default App;
