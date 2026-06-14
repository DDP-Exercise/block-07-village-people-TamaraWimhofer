"use strict";

export default class Building{
    constructor(name, capacity){
        this.name = name;
        this.capacity = capacity;
        this.residents = [];
    }

    addResident(citizen){
        if(this.residents.length < this.capacity){
            this.residents.push(citizen);
            citizen.home = this;
            return true;
        } else{
            return (this.makeSpaceFor(citizen));
        }
    }

    removeResident(citizen){
        this.residents.splice(this.residents.indexOf(citizen), 1);
        citizen.home = null;
    }

    findLowestResident(){
        if(this.residents.length){
            let lowestResident = this.residents[0];
            for(const resident of this.residents){
                if(resident.rank > lowestResident.rank)
                    lowestResident  = resident;
            }
            return lowestResident;
        }
    }

    makeSpaceFor(citizen){
        let lowest = this.findLowestResident();
        if(lowest && citizen.rank < lowest.rank){
            this.removeResident(lowest);
            this.addResident(citizen);
            return true;
        }
        return false;
    }

    listAllResidents(){
        console.log("%c Residents of "+this.name+" ("+this.residents.length+"/"+this.capacity+") :", "background-color: yellow; color: black");
        for(const resident of this.residents){
            if(resident.home != null){
                console.log(String(resident));
            }
        }
    }
}