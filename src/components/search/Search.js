import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'

function Search() {
  return (
    <div name='book' className='search'>
        <div className='container'>
            <div className='left'>
                <h2>SOME BIG TITLE</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='search-col-2'>
                    <div className='box'>
                        <div>
                            <img src={Gold} alt='/' style={{marginRight: '1rem'}}/>
                        </div>
                        <div>
                            <h3>WORLD MEGA TITLE</h3>
                            <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div>
                            <h3>THIS IS RIGHT BOX</h3>
                            <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS</p>
                            <button>ORDER NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='promo'>
                    <h4 className='save'>GET AN ADDITIONAL SALE</h4>
                    <p className='timer'>12 HOURS LEFT</p>
                    <p className='offers'>VIEW THIS OFFER</p>
                </div>
                <form>
                    <div className='input-wrap'>
                        <label>Destination</label>
                        <select>
                            <option value='1'>Grande</option>
                            <option value='1'>Maldives</option>
                            <option value='1'>Bora</option>
                            <option value='1'>Key West</option>
                            <option value='1'>Barbados</option>
                        </select>
                    </div>
                    <div className='date'>
                        <div className='input-wrap'>
                            <label>Check-in</label>
                            <input type='date'/>
                        </div>
                        <div className='input-wrap'>
                            <label>Check-Out</label>
                            <input type='date'/>
                        </div>
                        <button>Rates & Availibilities</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Search