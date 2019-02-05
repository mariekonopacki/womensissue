import React from "react"
import styled from "styled-components"



const Shorten = styled.div`
   margin-top: 20px;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 7; /* number of lines to show */
   line-height: 1.6em;        /* fallback */
   // max-height: 4em;
`

const Excerpttext = styled.div`
  font-size: 1em;
`

export default ({ children }) => (
  <Shorten>
    <Excerpttext>{children}</Excerpttext>
  </Shorten>
)
