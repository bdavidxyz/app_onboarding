import React from 'react'
import { Button } from 'react-bootstrap';

export default function Obd2() {
  return <div className='container Obd2-container'>
          <div className='jumbotron '>
            <div className='row'> 
              <Button className='btn btn-primary'>Action 1</Button>
              <Button className='btn btn-primary'>Action 2</Button>
            </div>
            <div className='row'> 
              <Button className='btn btn-primary'>Action 3</Button>
              <Button className='btn btn-primary'>Action 4</Button>
            </div>          
          </div>
        </div>
}
