import React from 'react'
import Item from './Item'

export default function Box(props) {
    const items = props.data.map(
        (singleData, index)=> {
            return <Item removeHndler= { props.removeHandler} key={index} id={index} item={singleData.item} time={singleData.time} />
        }
    )
  return (
    <div className='P-3'>
        {items}
       { /*<Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
  <Item/>*/}
    </div>
  )
}