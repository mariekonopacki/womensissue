import React from "react"
import styled from "styled-components"


const Artpreviewrow = styled.div`
  display: block;
  height: 375px;
  float: left;
  margin-top: 10px;

`

export default ({ children }) => (
  <Artpreviewrow>
    {children}
  </Artpreviewrow>
)
