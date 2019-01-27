export class Item {
    constructor(
        public name: string = "12",
        public price: number = 0,
        public count: number,
        public photo: string,
        public id?: number
    ) { }
}