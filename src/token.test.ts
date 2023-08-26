// @vitest-environment jsdom

import { assert, expect, test } from 'vitest'
import {displayToken} from './token'

test('a 6 digit token is displayed', () => {
    const token = displayToken('ABCDEFGHIJKLMNOP')
    expect(token.length).toBe(6)
})

test('displayed totp token is numeric only', () => {
    const token = displayToken('ABCDEFGHIJKLMNOP')
    expect(isNaN(+token)).toBeFalsy()
})