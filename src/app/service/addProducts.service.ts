export class AddProductsService {

    public isAddProduct = true;

    addProd(): boolean {
        return this.isAddProduct = true;
    }

    editProd(): boolean {
        return this.isAddProduct = false;
    }
}
