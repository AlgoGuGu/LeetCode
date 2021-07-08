class MyHashMap {
    map: Map<number, number> = null;
    constructor () {
      this.map = new Map()
    }

    put (key: number, value: number): void {
      this.map.set(key, value)
    }

    get (key: number): number {
      const item = this.map.get(key)
      return item === undefined ? -1 : item
    }

    remove (key: number): void {
      this.map.delete(key)
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
