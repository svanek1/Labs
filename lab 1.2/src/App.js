import logo from './logo.svg';
import './App.css';
import LabelItem from "./components/label/LabelItem";
import InputRadio from './components/inputRadio/InputRadio';
import InputDefault from './components/inputDefault/InputDefault';
import styles from './App.module.scss';
import {
    useState
} from 'react/cjs/react.development';

//объявление компоненты
function App() {
    //заводим состояния
    const [red, setRed] = useState()
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    //получаем значение вл всех полях и присваиваем как Background 
    return ( <
        div className = {
            styles.content
        } >
        <
        div className = {
            styles.content__left
        } >
        <
        LabelItem label = {
            {
                title: 'Красный'
            }
        }
        /> <
        InputDefault onChange = {
            (value) => setRed(value)
        }
        /> <
        LabelItem label = {
            {
                title: 'Зелёный'
            }
        }
        /> <
        InputDefault onChange = {
            (value) => setGreen(value)
        }
        /> <
        LabelItem label = {
            {
                title: 'Синий'
            }
        }
        /> <
        InputDefault onChange = {
            (value) => setBlue(value)
        }
        /> <
        div className = {
            styles.container
        } >
        <
        InputRadio radio = {
            {
                title: 'Dec'
            }
        }
        /> <
        InputRadio radio = {
            {
                title: 'Hex'
            }
        }
        /> <
        /div> <
        /div>

        <
        div className = {
            styles.content__right
        }
        style = {
            {
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
            }
        } >
        <
        /div> <
        /div>
    );
}

export default App;