import React from 'react'

const Card = ({children}) => {
  return (
    <div className='p-4 dark:bg-slate-800 rounded-2xl shadow-md'>{children}</div>
  )
}

export default Card