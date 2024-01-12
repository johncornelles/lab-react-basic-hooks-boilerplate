import { useContext, useState, useEffect } from 'react';
import { MyContext } from './Context';

function Content() {
    const [count, setCount] = useState(0);
    const [showContent, changeShowContent] = useState(false);
    const { darkTheme, toggleTheme } = useContext(MyContext);

    const themeStyle = {
        backgroundColor: darkTheme ? 'black' : 'white',
        color: darkTheme ? 'white' : 'black',
        padding: '2rem',
        margin: '2rem',
    };

    useEffect(() => {
            alert(`Let me ${showContent ? 'show' : 'hide'} it, please wait!`);
    }, [showContent]);

    return (
        <div>
            <button className='toggle' onClick={() => toggleTheme(!darkTheme)}>Toggle</button>
            <div className='holder2' style={themeStyle}>
                {showContent && (
                    <p>I am John and I am gonna guide you throughout this excursion</p>
                )}
                <button onClick={() => changeShowContent(!showContent)}>Content</button>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>Like</button>
            </div>
        </div>
    );
}

export default Content;