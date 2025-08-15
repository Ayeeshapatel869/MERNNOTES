import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h1>name:{props.username}</h1>
        <h2>age:{props.age}</h2>
        <p> description:{props.descripton}</p>

    </div>
  )
}

export default Card