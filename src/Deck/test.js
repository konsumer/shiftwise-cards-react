import test from 'tape'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

import Deck from './index'

const sortAscending = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]
const sortSuit = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48]

test('Deck', (it) => {
  it.test('should load a full deck', () => {
    it.plan(4)
    const d = TestUtils.renderIntoDocument(<Deck />)
    const cards = TestUtils.scryRenderedDOMComponentsWithClass(d, 'Card').map((d) => {
      return [d.getElementsByClassName('n')[0].innerHTML, d.getElementsByClassName('s')[0].innerHTML]
    })
    it.equals(cards.length, 52)
  })

  it.test('sortAscending', () => {
    it.plan(5)
    const d = TestUtils.renderIntoDocument(<Deck />)
    d.sortAscending()
    it.deepEqual(d.state.deck, sortAscending)
  })

  it.test('sortAscendingSuit', () => {
    it.plan(6)
    const d = TestUtils.renderIntoDocument(<Deck />)
    d.sortAscendingSuit()
    it.deepEqual(d.state.deck, sortSuit)
  })
})
