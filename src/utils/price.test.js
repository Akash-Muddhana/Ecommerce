import {it,expect,describe} from 'vitest'
import { formatMoney } from './price'
describe('format money',()=>{
    it('formats money into 2 decimals',()=>{
    expect(formatMoney(1990)).toBe('$19.90')
})
    it('gives 2 decimal points',()=>{
        expect(formatMoney(10000)).toBe('$100.00')
    })
})
