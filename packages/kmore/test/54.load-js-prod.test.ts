import { basename } from '@waiting/shared-core'
import * as assert from 'power-assert'

import { tbList2 } from './config/test.config2'


const filename = basename(__filename)

describe.only(filename, () => {

  describe('Should loading tables works', () => {
    it('normal', () => {
      assert(tbList2 && Object.keys(tbList2).length)
      console.log(JSON.stringify(tbList2, null, 2))
    })
  })

})
