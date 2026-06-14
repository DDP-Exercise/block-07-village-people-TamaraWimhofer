"use strict";

/**
 * Create a Citizen class. Each Citizen should have
 * - a name
 * - a rank, randomly of 2, 3 and 4.
 * - a home (building), which is by default null.
 *
 * Write a toString() Method, to prepare your citizens
 * for the citizen Dictionary.
 *
 */

export default class Citizen{
    constructor(name){
        this.name = name;
        this.rank = Math.floor((Math.random()*3)+2);
        this.home = null;
    }

    toString(){
        return `${this.name}, Citizen, Rank ${this.rank}`;
    }

}

