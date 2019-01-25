export class Item {
    constructor(
        public name: string,
        public price: number,
        public count: number,
        public photo: string,
        public id?: number
    ) { }
}