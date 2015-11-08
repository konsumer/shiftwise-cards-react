import React from 'react'

import './index.css'

export default class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      val: props.val % 52
    }
  }

  // pure function: return the suit character for this card
  suit () {
    return ('♠♣♥♦')[this.state.val % 4]
  }

  // pure function: return the symbol (A-K)
  symbol () {
    let n = ('A234567890JQK')[Math.floor(this.state.val / 4)]
    return n === '0' ? '10' : n
  }

  // pure function: return the color of this card
  color () {
    return (this.state.val % 4) > 1 ? 'red' : 'black'
  }

  render () {
    const val = this.symbol()
    const suit = this.suit()
    var c = this.color()
    if (this.props.className) {
      c = c + ' ' + this.props.className
    }
    return (<div className={`Card ${c}`}>
      <div className='top'>
        <span className='n'>{val}</span>
        <span className='s'>{suit}</span>
      </div>
      <div className='bottom'>
        <span className='n'>{val}</span>
        <span className='s'>{suit}</span>
      </div>
    </div>)
  }
}

Card.propTypes = {
  className: React.PropTypes.string,
  val: React.PropTypes.number
}
