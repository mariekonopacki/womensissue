import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import SmallLogo from '../images/smalllogo.png'
import Logo from '../images/logo.png'
import Expand from '../images/expand.png'


export default ({ children }) => (
  <div class="sidenav">
      <div class="icons">
        <div>
          <a class="naviconlimits" href="/"><img class="navicon" src={SmallLogo}></img></a>
        </div>
        <div id="expand">
          <a class="naviconlimits" href=""><img class="navicon" src={Expand}></img></a>
          <div class="expandMenu">
            <a href="/"><div class="logo">
              <img src={Logo} alt="logo"></img>
            </div></a>
            <div class="menuText">
              <div class="menuLink"><Link to="/" activeClassName="activeSub">Home</Link></div>
              <div class="menuLink"><Link to="/" activeClassName="activeSub">Browse pieces</Link></div>
              <div class="tabbedLinks">
                  <div class="menuLink tabbed"><Link to="/art" activeClassName="active">Art</Link></div>
                  <div class="menuLink tabbed"><Link to="/fiction" activeClassName="active">Fiction</Link></div>
                  <div class="menuLink tabbed"><Link to="/personalessay" activeClassName="active">Personal Essays</Link></div>
                  <div class="menuLink tabbed"><Link to="/poetry" activeClassName="active">Poetry</Link></div>
                  <div class="menuLink tabbed"><Link to="/interview" activeClassName="active">Interviews</Link></div>
              </div>
              <div class="menuLink"><Link to="/about" activeClassName="activeSub">About</Link></div>
            </div>
          </div>
        </div>
      </div>

  </div>


)
