import React from 'react'
import './SmallNote.css'
function SmallNote() {
  return (
    <div>
      <div className='small-note-container'>
        <div className='minor-note'>
            <h2>we are aware of</h2>
            <p>
                The difference in the details and
                thats why our car rental services,
                in the tourism and business industry 
                stand out for their quality and good
                taste, to offer you a unique experience.
            </p>
        </div>
        <div className='call-qoute-note'>
            <h2>
                place a call <span>0596116171</span>
            </h2>
            <button>get a quote</button>
        </div>
      </div>
    </div>
  )
}

export default SmallNote
