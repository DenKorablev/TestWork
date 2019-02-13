export class AddProductsService {

    public isAddProduct = true;
    public photoUrl = '/assets/images/not-img.jpg';
    public selectedCategory = null;

    addProd(): boolean {
        return this.isAddProduct = true;
    }

    editProd(): boolean {
        return this.isAddProduct = false;
    }
}
