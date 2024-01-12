// Context.js
import { createContext, useState } from 'react';

export const MyContext = createContext();

function Context(prop) {
    let {children} = prop
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(() => !darkTheme);
    };

    return (
        <MyContext.Provider value={{ darkTheme, toggleTheme }}>
            {children}
        </MyContext.Provider>
    );
}

export default Context;
