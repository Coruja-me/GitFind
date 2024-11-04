import React from 'react'
import './styles.css'

export default function ItemList({title, desc}) {
  return (
    <div className='itemList'>
        <strong>{title}</strong>
        <p>{desc}</p>
        <hr />
    </div>
  )
}
