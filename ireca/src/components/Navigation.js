import React from 'react'

function Navigation () {

    function toggleSidebar() {
        var sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
    }

  return (
    <React.Fragment>
        <div class="navigation-container">
    <div class="logo">
        <img src='./images/logo_mobile.png' />
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
      <button onClick={toggleSidebar}>Menu</button>
    </div>
		
	  </div>
    </React.Fragment>
  )
}

export default Navigation
