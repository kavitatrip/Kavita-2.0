import React from 'react';

const Button = ({name}) => {
  return (
    <div className="px-2 py-1 m-2 bg-gray-200 rounded-sm font-semibold">
        {name}
    </div>
  )
}

export default Button