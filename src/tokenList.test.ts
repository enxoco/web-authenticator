// @vitest-environment jsdom

import { expect, test } from 'vitest'
import { tokenList } from './tokenList'
const tokenListElement = tokenList();

test('displays an empty list', () => {
    expect(tokenListElement).toBeDefined()
})
