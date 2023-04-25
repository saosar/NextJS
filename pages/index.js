import {useState} from 'react'

const index = () => {

    const[userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        e.preventDefault()

        setUserInput(e.target.value)
        // console.log(userInput)
    }
    return (
        <div>
            <h1>Next JS Todo List</h1>
            <form>
                <input type="text" onChange={handleChange}/> <button>Submit</button>
            </form>
        </div>

    )
}

export default index