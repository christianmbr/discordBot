/* eslint-disable no-undef */
import assert from 'assert'
import { sayJoke } from '../utils/jokesBook.js'

describe('jokesBook', () => {
  describe('sayJoke', () => {
    it('should return a joke', () => {
      assert.strictEqual(typeof sayJoke(), 'string')
    })
  })
})
