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
// import { Sorter } from './Sorter';
// import { NumbersCollection } from './NumbersCollection';
// import { CharactersCollection } from './CharactersCollection';
var LinkedList_1 = require("./LinkedList");
/** Numbers sort */
// const numbersCollection = new NumbersCollection([55, 3, -5, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);
/** String of characters sort */
// const charactersCollection = new CharactersCollection('xaaybibud');
// charactersCollection.sort();
// console.log(charactersCollection.data);
/** Linked List sort */
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
