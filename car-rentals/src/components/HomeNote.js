import React from 'react'
import "./HomeNote.css"

function HomeNote() {
  return (
    <div className='home-note-container'>
      <div className='home-note'>
        <div className='main-notes float'>
            <h2>car support</h2>
            <p>This is a small note that enlighten 
               you on the heading you just saw 
               above you. Have a wonderful day 
               and remember this is but a demo. 
               Stay blessed. Saeed Achiever here
            </p>
        </div>


        <div className='main-notes no-float'>
            <h2>lots of location</h2>
            <p>This is a small note that enlighten 
               you on the heading you just saw 
               above you. Have a wonderful day 
               and remember this is but a demo.
               Stay blessed. Saeed Achiever here
            </p>
        </div>

        <div className='main-notes no-float me'>
            <h2>reserve anytime</h2>
            <p>This is a small note that enlighten 
               you on the heading you just saw 
               above you. Have a wonderful day 
               and remember this is but a demo. 
               Stay blessed. Saeed Achiever here
            </p>
        </div>

        <div className='main-notes float'>
            <h2>best pricing</h2>
            <p>This is a small note that enlighten 
               you on the heading you just saw 
               above you. Have a wonderful day 
               and remember this is but a demo. 
               Stay blessed. Saeed Achiever here
            </p>
        </div>
      </div>
    </div>
  )
}

export default HomeNote
