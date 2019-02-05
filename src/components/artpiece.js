import React from "react"
import styled from "styled-components"



const Artpiece = styled.div`
  position: relative;
`


export default ({ children }) => (
  <Artpiece>
    {children}
  </Artpiece>
)
