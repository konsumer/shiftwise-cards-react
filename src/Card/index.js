/* global __WEBPACK__ */

import React from 'react'

if (__WEBPACK__) {
  require('./index.css')
}

export default class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      val: props.val % 52
    }
  }

  // pure function: return the suit character for this card
  suit () {
    return ('qwre')[this.state.val % 4] // spades, clubs, hearts, diamonds
  }

  // pure function: return the symbol (A-K)
  symbol () {
    return ('1234567890asd')[Math.floor(this.state.val / 4)]
  }

  // pure function: return the color of this card
  color () {
    return (this.state.val % 4) > 1 ? 'red' : 'black'
  }

  render () {
    const val = this.symbol()
    const suit = this.suit()
    var c = `v${val} s${suit}`
    if (this.props.className) {
      c = `${c} ${this.props.className}`
    }
    return (<div className={`Card ${c}`}>
      <div className='top'>
        <span className='val'>{val}</span>
        <span className='suit'>{suit}</span>
      </div>
      <div className='bottom'>
        <span className='val'>{val}</span>
        <span className='suit'>{suit}</span>
      </div>
    </div>)
  }
}

Card.propTypes = {
  className: React.PropTypes.string,
  val: React.PropTypes.number
}
