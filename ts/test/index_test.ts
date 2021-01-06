import { strict as assert} from 'assert'
import { ProfanityFilter, ProfanityResult } from '../src/index'

test('containsProfanity()', () => {
    let result = new ProfanityFilter().containsProfanity("fuck");
    assert.equal(result.containsProfanities, true);
    assert.ok(result.profanities.indexOf("fuck") > -1);
})

test('containsProfanity() finds two profanities', () => {
    let result = new ProfanityFilter().containsProfanity("shit fuck");
    assert.equal(result.containsProfanities, true)
    assert.ok(result.profanities.indexOf("shit") >  -1);
    assert.ok(result.profanities.indexOf("fuck") > -1);
})

test('containsProfanity() has no profanity', ()=> {
    let result = new ProfanityFilter().containsProfanity("nothing");
    assert.ok(result.containsProfanities == false);
    assert.ok(result.profanities.length == 0)
})

test('maskProfanitys() return astericks ', () => {
    let result = new ProfanityFilter().maskProfanities("shit happens");
    assert.equal(result, "**** happens")
})