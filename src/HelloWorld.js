import React, {useState, useMemo } from 'react'
import Item from './Item'

function HelloWorld () {
  const [keys] = useState([1, 2, 3, 4, 5])
  const [values, setValues] = useState({1: 'first', 2: 'second', 3: 'third', 4: 'forth', 5: 'fifth'})
  function change () {
    setValues({...values, 1: values[1] === 'X-change' ? 'first' : 'X-change'})
  }

  return (
    <div>
      <button onClick={change}>change</button>
      {
        keys && keys.map(item => {
          console.log('item', item)
          return <Item key={item} value={values[item]} />
        })
      }
    </div>
  )

}

export default HelloWorld