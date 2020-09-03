import useLocalStorage from './useLocalStorage'
;

export default function useDarkMode(key, value){

    const [darkMode, setDarkMode] = useLocalStorage(key, value);

    function toggleDarkMode (){
        setDarkMode(!darkMode);
    }

    return [darkMode, toggleDarkMode];
}   