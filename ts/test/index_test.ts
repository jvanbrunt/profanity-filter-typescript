import { strict as assert} from 'assert'
import { ProfanityFilter, ProfanityResult } from '../src/index'

test('containsProfanity()', () => {
    let profanityFilter = new ProfanityFilter();
    let result = profanityFilter.containsProfanity("shit");

    assert.equal(result.containsProfanities, true);
    assert.ok(result.profanities.indexOf("shit") > -1);
})

test('containsProfanity() has no profanity', ()=> {
    let profanityFilter = new ProfanityFilter();
    let result = profanityFilter.containsProfanity("nothing");

    assert.ok(result.containsProfanities == false);
    assert.ok(result.profanities.length == 0)
})