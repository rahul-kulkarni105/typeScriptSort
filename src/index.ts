/**
 * class Sorter {
 *   collection: number[];
 *
 *   constructor(collection: number[]) {
 *     this.collection = collection;
 *   }
 * }
 * Above is 100% equivalent to below implementation with Public modifier
 *
 * class Sorter {
 *  constructor(public collection: number[]) {}
 * }
 */

import { Sorter } from './Sorter';
// import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

/** Numbers sort */
// const numbersCollection = new NumbersCollection([55, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

/** String of characters sort */
const charactersCollection = new CharactersCollection('xaaybibud');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
