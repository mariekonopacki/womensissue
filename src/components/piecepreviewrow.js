import React from "react"
import styled from "styled-components"


const PreviewRow = styled.div`
  display: inline-block;
  margin-top: 50px;
`

export default ({ children }) => (
  <PreviewRow>
    {children}
  </PreviewRow>
)
