import 'jest-canvas-mock'

import { LocalSession } from '../../../src/services/LocalSession/index'

describe('Should be defined', () => {
  it('has set method', () => {
    Object.hasOwn(LocalSession, 'set')
  })

  it('has get method', () => {
    Object.hasOwn(LocalSession, 'get')
  })
})
