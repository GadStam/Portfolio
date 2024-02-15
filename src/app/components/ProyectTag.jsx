import React from 'react'

const ProyectTag = ({name, onClick, isSelected}) => {
    const buttonSyle = isSelected
    ? "text-white border-primary-500" : "text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    <button 
    className={`${buttonSyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
    onClick={()=> onClick(name)}>
        {name}
    </button>
  )
}

export default ProyectTag