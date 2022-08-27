import { describe, expect, it } from 'vitest'
import { splitLine } from '../src/utils'

const lineTest = 'FOO=BAR'
const commentTest = '# COMMENT'

describe('splitLine', () => {
  it('should parse a line', () => {
    const res = splitLine(lineTest)
    expect(res).toEqual('FOO=')
  })

  it('should not change line when the line is a comment', () => {
    const res = splitLine(commentTest)
    expect(res).toEqual(commentTest)
  })
})
