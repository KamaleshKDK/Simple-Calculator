import React from 'react'

function A(props) {
    const [age, setAge] = useState(20)
const name = props.name
console.log(age)

  return (
<>

<h1>{age}</h1>
   <h1>{name}</h1>
   <button></button>
</>
  )
}

export default A


import React from 'react'

function B() {
  return (
  <A name={amit}/>
  )
}

export default B