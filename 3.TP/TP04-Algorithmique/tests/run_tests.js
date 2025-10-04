
const assert = require('assert');
const { sum, isPrime, reverseString, factorial } = require('../algos.js');

function grade() {
  let score = 0;
  let total = 10; // 10 points

  // sum
  try { assert.strictEqual(sum(2,3),5); score+=1; } catch {}
  try { assert.strictEqual(sum(-2,3),1); score+=1; } catch {}

  // isPrime
  try { assert.strictEqual(isPrime(2), true); score+=1; } catch {}
  try { assert.strictEqual(isPrime(9), false); score+=1; } catch {}

  // reverseString
  try { assert.strictEqual(reverseString('abc'), 'cba'); score+=1; } catch {}
  try { assert.strictEqual(reverseString(''), ''); score+=1; } catch {}

  // factorial
  try { assert.strictEqual(factorial(0), 1); score+=1; } catch {}
  try { assert.strictEqual(factorial(5), 120); score+=1; } catch {}
  try { assert.strictEqual(factorial(1), 1); score+=1; } catch {}

  return { score, total };
}

if (require.main === module) {
  const res = grade();
  console.log(JSON.stringify(res));
}

module.exports = { grade };
