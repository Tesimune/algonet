import React from 'react'
import TypeIt from "typeit-react";

function TextAnimation(props) {
  return (
    <div>
      <TypeIt options={{ loop: true }} >
        {props.children}
      </TypeIt>
    </div>
  )
}

export default TextAnimation