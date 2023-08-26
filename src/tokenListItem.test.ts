// @vitest-environment jsdom

import { expect, test } from 'vitest'
import { tokenListitem } from './tokenListItem'


test('displays correct account name', () => {
    const div: HTMLDivElement = document.createElement('div')
    tokenListitem('Github', 'ABCDEFGHIJKLMNOP', div);
    expect(div.innerHTML).toContain('Github')
})

