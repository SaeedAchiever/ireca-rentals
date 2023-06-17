import React from 'react'
import "./Navigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Navigation () {

    function toggleSidebar() {
        var sidebar = document.getElementById('sidebar');
          sidebar.classList.toggle('open');
    }

  return (
    <React.Fragment>
        <div class="navigation-container">
    <div class="logo">
        <img src='./logo_mobile.png' />
    </div>
		<div class="sidebar" id="sidebar">
		  <ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Products</a></li>
			<li><a href="#">Contact</a></li>
		  </ul>
		</div>
    <div  class="toggle-button">
      <button onClick={toggleSidebar}><FontAwesomeIcon icon={faBars} /></button>
    </div>
		
	  </div>
    </React.Fragment>
  )
}

export default Navigation
