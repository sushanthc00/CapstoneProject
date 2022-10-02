import React from 'react';
import Picture from '../components/images/Marvel.jpg';
import Spidey from '../components/images/Spider.jpg';
import IronMan from '../components/images/IronMan.jpg';
import BlackPanther from '../components/images/BP.jpg';
import Cap from '../components/images/Cap.jpg';
import Hulk from '../components/images/Hulk.jpg';
import './Marvel.css';

function Marvel() {
  return (
    <div className='marvel-display'>
        <div className='picture-container'>
            <img className='marvel-pic' src={Spidey}></img>
            <img className='marvel-pic' src={BlackPanther}></img>
            <img className='marvel-pic' src={Picture}></img>      
            <img className='marvel-pic' src={Cap}></img>
            <img className='marvel-pic' src={IronMan}></img>
            <img className='marvel-pic' src={Hulk}></img>


        </div> 
        
    </div>
  )
}

export default Marvel