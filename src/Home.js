import { useState } from 'react'

export function Home() {
    // let name = 'mario';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    function handleClick() {
        setName('luigi')
        setAge(30);
    }


    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}