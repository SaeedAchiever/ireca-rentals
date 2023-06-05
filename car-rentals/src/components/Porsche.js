import React from 'react'

function Porsche() {
  return (
    <div >
            <div className='rental-body-container' id='porsche'>
        <div className='rental-body'>
            <div className='main-car'>
                <div className='rental-img'>
                    <img src='./Homepage-Model-X-Mobile-LHD.jpeg' alt='Image'/>
                </div>
                <div className='rental-img-info'>
                        <div className='rental-img-info-head'>
                        <button><a>GHC&nbsp;100 /day <span>Rent&nbsp;Me</span></a></button>
                        <h3>Porsche</h3>
                        <p><span>0</span> reviews</p>
                        </div>
                    <div className='rental-img-info-body'>
                        <ul>
                            <li>2020</li>
                            <li>Tiptronic</li>
                            <li>2500 cc</li>
                        </ul>
                        <ul>
                            <li>Petrol</li>
                            <li>5</li>
                            <li>5 Doors</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='rental-body'>
            <div className='main-car'>
                <div className='rental-img'>
                    <img src='./audi-a3-600x400.jpg'/>
                </div>
                <div className='rental-img-info'>
                        <div className='rental-img-info-head'>
                        <button><a>GHC&nbsp;205 /day <span>Rent&nbsp;Me</span></a></button>
                        <h3>Model X</h3>
                        <p><span>0</span> reviews</p>
                        </div>
                    <div className='rental-img-info-body'>
                        <ul>
                            <li>2020</li>
                            <li>Tiptronic</li>
                            <li>2500 cc</li>
                        </ul>
                        <ul>
                            <li>Petrol</li>
                            <li>4</li>
                            <li>4 Doors</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Porsche