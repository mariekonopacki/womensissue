import React from "react"
import styled from "styled-components"



const Featuredpiece = styled.div`
height: 275px;
width: 920px;
margin: 20px;
margin-bottom: 90px;
margin-top: 50px;

`

export default ({ children }) => (
    <Featuredpiece>
      {children}
    </Featuredpiece>
)
