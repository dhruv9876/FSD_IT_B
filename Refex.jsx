import React, { useState } from 'react';

const Refex = () => {
    console.log("Object Rendered");
    const [count, setCount] = useState(0);

    function handleIncrement() {
        const newCount = count + 1;
        setCount(newCount);
        if (newCount === 5) {
            alert("Current count = " + newCount);
        }
        console.log("count =", newCount);
    }

    return (
        <div>
            <h1>UseState Example</h1>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Refex;
