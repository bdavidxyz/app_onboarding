import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'

function Home({ number, increase, decrease }) {
  return (
    <div>
      Home sweet home:
    </div>
  )
}

export default connect()(Home)
