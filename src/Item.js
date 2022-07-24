import React, {useMemo} from 'react'

function Item ({value}) {

  const memoValue = useMemo(() => {
    console.log('value::', value)
    return value
  }, [value])
  
  return (
    <div>
      {memoValue}
    </div>
  )
}

export default Item