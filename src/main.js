import { useEffect, useState } from 'react';

function Main() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div className="Main">
            <p> You Clicked {count} Times</p>
            <button onClick={() => { setCount(count + 1) }}>
                +
            </button>
        </div>
    );
}

export default Main;
