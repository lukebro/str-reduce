import test from 'ava';
import strReduce from './';

test('it reduces duplicate characters in a string limited by amount', t => {
	t.is(strReduce('aaabb', 2), 'aabb');
	t.is(strReduce('aaabbb', 2), 'aabb');
	t.is(strReduce('aaabbbbzzz', 2), 'aabbzz');
	t.is(strReduce('aaabbbbbbbbbbb', 10), 'aaabbbbbbbbbb');
	t.is(strReduce('AAAaaBBBBBB', 5), 'AAAaaBBBBB');
});

test('it returns an empty string when amount is zero', t => {
	t.is(strReduce('aaabb', 0), '');
	t.is(strReduce('aaabbb', 0), '');
	t.is(strReduce('aaabbbbzzz', 0), '');
	t.is(strReduce('aaabbbbbbbbbbb', 0), '');
});

test('it reduces an empty string', t => {
	t.is(strReduce('', 2), '');
	t.is(strReduce('', 10), '');
});

test('it throws an error when you do not give it a string', t => {
	t.throws(() => strReduce(['aabb'], 2), TypeError);
	t.throws(() => strReduce(['aabb'], 0), TypeError);
});

test('it works will all characters', t => {
	t.is(strReduce('@@@$$$!@!', 2), '@@$$!@!');
	t.is(strReduce('11223344556677889900--``==--~~!!@@##$$%%^^&&**(())--==<<>>//;;{{}}[[]]', 1), '1234567890-`=-~!@#$%^&*()-=<>/;{}[]');
});

test('the examples work', t => {
	t.is(strReduce('aaabb', 2), 'aabb');
	t.is(strReduce('AAaaaBBbb', 2), 'AAaaBBbb');
	t.is(strReduce('this will reduce duplicate characters', 1), 'this wil reduce duplicate characters');
	t.is(strReduce('****************************', 6), '******');
});
