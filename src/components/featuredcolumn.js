import React from "react"
import styled from "styled-components"


const Featuredcolumn = styled.div`
  padding: 40px;

`


export default ({ children }) => (
  <div class="columnOutline">
    <div class="featuredColumn">
      <Featuredcolumn>
        {children}
      </Featuredcolumn>
    </div>
  </div>
)
