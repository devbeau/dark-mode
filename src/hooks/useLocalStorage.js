import {useState} from 'react';

export default function useLocalStorage (key, value) {

let [storedValue, setStoredValue] = useState(() => {
    
    let item = window.localStorage.getItem(key)

    return item ? JSON.parse(item) : value
});

function setValue (value){
    setStoredValue(value);
    window.localStorage.setItem(key, value);
}

return [storedValue, setValue];
}