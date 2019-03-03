import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import SmallLogo from '../images/smalllogo.png'
import Expand from '../images/expand.png'


class SideNav extends React.Component {
  
  render() {
    return <div class="sidenav">
      <a href="/"><div class="navicon">
        <img src={SmallLogo}></img>
      </div></a>
      <a href="#" ><div class="navicon">
        <img src={Expand}></img>
      </div></a>

      <ul class="navLinksStickyHeader">
        <li class="stickyLink"><Link to="/" activeClassName="activeSub">Home</Link></li>
        <li class="dropdown">
          <div class="stickyLink"><Link to="/" activeClassName="activeSub">Browse  ⌄</Link></div>
          <div class="dropdown-set">
            <ul>
              <li class="dropdown-content"><Link to="/art" activeClassName="active">Art</Link></li>
              <li class="dropdown-content"><Link to="/fiction" activeClassName="active">Fiction</Link></li>
              <li class="dropdown-content"><Link to="/personalessay" activeClassName="active">Personal Essays</Link></li>
              <li class="dropdown-content"><Link to="/poetry" activeClassName="active">Poetry</Link></li>
              <li class="dropdown-content"><Link to="/interview" activeClassName="active">Interviews</Link></li>
            </ul>
          </div>
        </li>
        <li class="stickyLink"><Link to="/about" activeClassName="activeSub">About</Link></li>
        <li class="stickyLink donate"><Link to="/donate" activeClassName="activeSub">Donate</Link></li>
      </ul>

    </div>
  }
}
