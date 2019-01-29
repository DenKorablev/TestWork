export class AddProductsService {

    public isAddProduct = true;
    public photoUrl = '';

    addProd(): boolean {
        return this.isAddProduct = true;
    }

    editProd(): boolean {
        return this.isAddProduct = false;
    }
}
