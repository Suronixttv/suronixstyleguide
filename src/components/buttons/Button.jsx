import React from 'react'

function Button({ primary, label}) {
  let className= "btn ";
  if(primary){
  className+="btn-primary "
  }else{
  className+="btn-secondary "
  }

  
  return <button className={className}>{label}</button>
}

export default Button
