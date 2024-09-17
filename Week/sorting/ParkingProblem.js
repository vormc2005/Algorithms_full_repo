// let availableSpots = []

class ParkingLot{
    constructor(big, medium, small){
        this.big = big,
        this.medium = medium,
        this.small = small,
        this.availableSpots = [big, medium, small]      

    }  
    //index in the availableSpots  0 = big, 1 - medium, 2=small
    addCars(carType){
        if(carType < 1 || carType > 3){
            return false
        }
        
        const index = carType -1;

        if(this.availableSpots[index] ===0){
            return false
        }

        this.availableSpots[index]--;
        // console.log(this.availableSpots)
        return true 
    }

}




let newLot = new ParkingLot(1,1,3)
console.log(newLot)

console.log(newLot.addCars(1))
console.log(newLot)