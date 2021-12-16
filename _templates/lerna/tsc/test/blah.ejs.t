---
to: packages/<%= name%>/test/blah.test.ts
---

import { sum } from '../src'

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2)
  })
})
