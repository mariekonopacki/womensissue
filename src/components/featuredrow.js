import React from "react"
import styled from "styled-components"


const Featuredrow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`

export default ({ children }) => (
    <Featuredrow>
      {children}
    </Featuredrow>

)
