/* global __WEBPACK__ */

import React from 'react'

if (__WEBPACK__) {
  require('./index.css')
}

import Card from '../Card'

export default class Deck extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      'deck': [],
      'columns': 0,
      'stacked': true
    }

    for (let i = 52; i--; i) {
      this.state.deck.push(i)
    }

    // no-state shuffle
    this.state.deck.sort((a, b) => {
      return 0.5 - Math.random()
    })
  }

  // sort cards in ascending numeric order
  sortAscending () {
    const out = this.state.deck.sort((a, b) => {
      return a - b
    })
    this.setState({
      'deck': out,
      'columns': 4
    })
  }

  // sort cards in ascending order, by suit
  sortAscendingSuit () {
    this.sortAscending()
    const out = []
    for (let x = 4; x--; x) {
      for (let i in this.state.deck) {
        if (i % 4 === x) {
          out.push(this.state.deck[i])
        }
      }
    }
    this.setState({
      'deck': out,
      'columns': 13
    })
  }

  // randomize cards
  shuffle () {
    const out = this.state.deck.sort((a, b) => {
      return 0.5 - Math.random()
    })
    this.setState({
      'deck': out,
      'columns': 0
    })
  }

  // stack or unstack cards
  stack () {
    this.setState({'stacked': !this.state.stacked})
  }

  render () {
    return (<div className={`Deck${this.state.stacked ? ' stacked' : ''}`}>
      <button onClick={this.stack.bind(this)}>{this.state.stacked ? 'unstacked' : 'stacked'}</button>
      <button onClick={this.shuffle.bind(this)}>shuffle</button>
      <button onClick={this.sortAscending.bind(this)}>sort</button>
      <button onClick={this.sortAscendingSuit.bind(this)}>sort by suit</button>
      <div className='cards'>
        {this.state.deck.map((v, i) => {
          return <Card key={v} val={v} className={this.state.columns && i % this.state.columns === 0 ? 'row' : ''} />
        }) }
      </div>
    </div>)
  }
}
