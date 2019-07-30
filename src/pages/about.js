import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Navbar from '../components/sidenav'
import Editorsnote from '../sound/editorsnote.mp3'


const About = () => (
  <Layout>
    <SEO title="About" />
    <Navbar></Navbar>
    <div class="aboutcontent">
      <div class="backHome">
        <a href="/">
          <small> ← Back to home</small>
        </a>
      </div>
      <h2>About the Women's Issue</h2> <br /><br />
      <p>The Women’s Issue is a special fifth issue of the Harvard Advocate. The Women’s Issue was conceived with the goal of being a literary and artistic platform to explore the stereotypical narrative of what it means to be a “woman” and the actual. The issue primarily features writing and art from the Harvard undergraduate community as well as professional contributors. The Women’s Issue is published under the guidance of faculty advisor Laura van den Berg and with the generous support from Advocate alumni, Harvard’s Office for the Arts, and Harvard’s Women’s Center.</p>
      <div class="about">
        <a href="/editorsnote"><p class="transcript"><i>An Interview with the Editors — Read the full transcript <u>here</u></i></p></a>
        <audio controls>
          <source src={Editorsnote} type="audio/mp3"></source>
          Your browser does not support the audio element.
        </audio>
      </div>

      <div class="masthead">
        <p><strong>Editorial Board</strong></p>
        <p>Sabrina Li '20, Editor<br />
        Owen Ojo '19, Managing Editor<br />
        Laura van de Berg, Faculty Advisor<br />
        Nicole Araya '20, Art Editor<br />
        Emma Stone '19, Design Editor<br />
        Cassandra Luca '21, Fiction Editor<br />
        Eva Rosenfeld '21, Personal Essay Editor<br />
        Sophia Mautz '21, Poetry Editor<br />
        Marie Konopacki '21, Technology Editor
        </p><br />

        <p><strong>Art</strong></p>
        <p>Nicole Araya '20<br />
        Carlos Agredano '20<br />
        Sinead Danagher '21<br />
        Hannah Barbash-Taylor '21<br />
        Georgia Messinger '22</p><br/>

        <p><strong>Design</strong></p>
        <p>Emma Stone '19<br />
        Priya Amin '19<br />
        Tiffani Driscoll '19<br />
        Eleanor Grueskin '22<br />
        Jenny Huang '20<br />
        Rachel Janfaza '20<br />
        Caitlin Jones '21<br />
        Te Palandijan '21<br />
        Jeanine Zheng '20</p><br />

        <p><strong>Fiction</strong></p>
        <p>Cassandra Luca '21<br />
        Zoe Almeida '20<br />
        Madeleine Joung '20<br />
        Grace Li '19<br />
        Siqi Liu '19<br />
        Alyssa Resar '19</p><br />

        <p><strong>Personal Essay</strong></p>
        <p>Eva Rosenfeld '21<br />
        Alyssa Britton '21<br />
        Caroline Tsai '20<br />
        Josette Abugov '22<br />
        Elyse Pham '22<br />
        Liana Henderson-Semel '19<br />
        Jessenia Class '20<br />
        LG Fadiman '21<br />
        Diana Meyers '21<br />
        Una Corbett '20<br />
        Christie Jackson '20</p><br />

        <p><strong>Poetry</strong></p>
        <p>Sophia Mautz '21<br />
        Marta Lasota '20<br />
        Carl Denton '19<br />
        Norah Storniolo '21<br />
        Najya Williams '20<br />
        Nataliya Palinchak '20</p><br />
      </div>
    </div>



  </Layout>
)

export default About
