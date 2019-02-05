import React from "react"
import styled from "styled-components"



const Shortenfeatured = styled.div`
   margin-top: 30px;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 4; /* number of lines to show */
   line-height: 1.6em;        /* fallback */
   // max-height: 8em;
`

const Excerpttext = styled.div`
  font-size: 1em;
`

export default ({ children }) => (
  <Shortenfeatured>
    <Excerpttext>{children}</Excerpttext>
  </Shortenfeatured>
)
