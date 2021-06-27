class ParkingSystem {
  carSlots = new Array(3).fill(0)
  constructor (big: number, medium: number, small: number) {
    this.carSlots[0] = big
    this.carSlots[1] = medium
    this.carSlots[2] = small
  }

  addCar (carType: number): boolean {
    const nextSlot = carType - 1
    if (this.carSlots[nextSlot] === 0) {
      return false
    } else {
      this.carSlots[nextSlot] -= 1
      return true
    }
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
