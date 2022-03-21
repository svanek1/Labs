//подключение hook-ов
import react, { useState } from 'react'
//объявляем компоненту 
const InputDefault = (props) => {
    const [value, setValue] = useState(0) //заводим состояния

    //Проверка вводимых данных, если введено больше 255, то автоматически становится 255
    const handleChange = (e) => {
        if (e.target.value > 255) {
            setValue(255)
            props.onChange(255)
            return (255)
        }
        else {
            props.onChange(e.target.value)
            setValue(e.target.value)
            return (e.target.value)

        }
    }
    return (
        <input className='inputDefault' onChange={handleChange} value={value} />
    );
}
export default InputDefault;