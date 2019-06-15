import React, {useState} from 'react'

export default function RegisterForm() {
    const [input, setInput] = useState({});

    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target
        setInput(input => ({
            ...input,
            [name]: value
        }))
    }
    return (
        <div className="flex flex-col justify-between h-full">
                <p className="text-blue-top font-semibold text-xs">
                Register
                </p>
                <form className="flex flex-col justify-around rounded flex-1 mt-2 mb-2">
                <input
                    className="bg-white border-2 rounded text-base appearance-none w-full py-2 px-2 text-blue-top focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Email@email.com"
                    value={input.email}
                    onChange={handleChange}
                />
                <input
                    className="bg-white border-2 rounded text-base appearance-none w-full py-2 px-2 text-blue-top focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Password"
                    value={input.password}
                    onChange={handleChange}
                />
                 <input
                    className="bg-white border-2 rounded text-base appearance-none w-full py-2 px-2 text-blue-top focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Confirm Password"
                    value={input.password}
                    onChange={handleChange}
                />
                </form>
                <div>
                    <button className="px-4 py-2 text-xs bg-green-light text-white border rounded m-1">
                    Submit
                    </button>
                </div>
            </div>
    )
}