
export function Home() {

    function handleClick() {
        console.log('hello ninjas')
    }
    function handleClickAgain(name) {
        console.log('hello ' + name)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('mario')}>Click me again</button>
        </div>
    )
}