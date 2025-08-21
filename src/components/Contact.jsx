import React from "react"

const Contact = () => {
  return (
    <div>
        <h1 className="fornt-bold text-3xl p-4 m-4">Conatct Us</h1>
        <form action="">
          <input 
            type="text"
            className="border border-black p-2 m-2"
            placeholder="Please enter your name"
          />
          <input 
            type="text"
            className="border border-black p-2 m-2"
            placeholder="Please enter your message"
          />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
        </form>
    </div>
  )
}

export default Contact
