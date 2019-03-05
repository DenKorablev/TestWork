export class Item {
    constructor(
        public name: string,
        public price: number,
        public count: number,
        public photo: string,
        public category: string[] = [],
        public id?: number
    ) { }
}
