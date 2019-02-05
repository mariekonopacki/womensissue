import React from "react"
import styled from "styled-components"



const Circlebutton = styled.div`
  border: none;
  color: #808080	;
  padding-bottom: 15px;
  text-align: right;
  right: 25px;
  text-decoration: none;
  position: absolute;
  bottom: 10px;
  z-index: 100;
`


export default ({ children }) => (
    <Circlebutton>
      {children}
    </Circlebutton>
)
