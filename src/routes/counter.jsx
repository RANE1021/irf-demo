import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Button } from 'react-bootstrap';
import "../index.css";

function Counter() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        return setCount(count + 1);
    };

    const decreaseCount = () => {
        return setCount(count - 1);
    };

    return (
        <div>
            <NavBar />
            <div className="route-container">
                <h1>Count: {count}</h1>
                    <div>
                        <Button variant="secondary" onClick={increaseCount} >+</Button>{' '}
                        <Button variant="dark" onClick={decreaseCount} >-</Button>{' '}
                    </div>
            </div>
        </div>
    )
};

export default Counter;
