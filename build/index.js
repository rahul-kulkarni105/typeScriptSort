"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
// import { NumbersCollection } from './NumbersCollection';
var CharactersCollection_1 = require("./CharactersCollection");
/** Numbers sort */
// const numbersCollection = new NumbersCollection([55, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
/** String of characters sort */
var charactersCollection = new CharactersCollection_1.CharactersCollection('xaaybibud');
var sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
