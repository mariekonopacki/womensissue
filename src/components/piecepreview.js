import React from "react"
import styled from "styled-components"



const PieceBox = styled.div`
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
  margin: 25px;
  height: 300px;
  padding: 25px;
  border-top: solid 3px #F7E490;
  position: relative;
  overflow: hidden;
`


export default ({ children }) => (
  <div class="column" style={{ float: `left`, width: `33.33%` }}>
    <PieceBox>
      {children}
    </PieceBox>
  </div>
)
