$(document).ready(function(){
    // Creamos clase de productos
    class Product{
        constructor(name, price, date){
            this.name =name;
            this.price = price;
            this.date= date;
        }
    }
    class UI{
        addProducts(product){
            const productList = $('.list-products');
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="flex-direccion-row card text-center mb-4">
                <div class="card-body text-left">
                    <strong>Product</strong>: ${product.name} -
                    <strong>Price</strong>: ${product.price} - 
                    <strong>Year</strong>: ${product.date}
                    <a href="#" class="btn btn-danger float-right" name="delete" id="delete">Delete</a>
                </div>
            </div>
            `;
            productList.append(element);
        }
        resetForm() {
            $('#product-form')[0].reset();
        }
        deleteProduct(e){
            const btnDelete = $('#delete');
            if(e.name === 'delete'){
                btnDelete.parent().parent().parent().remove();
                this.showMessage('Product Deleting Successfully', 'danger')
            }
        }
        showMessage(textMessage, cssClass){
            $('.mensaje').append('<div class="divNuevo"></div>');
            const show = $('.divNuevo');
            show.addClass(' message alert w-100 alert-'+ cssClass);
            show.text(textMessage);
            setTimeout(function(){
                $('.message').remove();
            }, 3000);
        }
    }
    // RECIBIMOS DATOS DE FORULARIO
    $('#product-form').on('submit', function(e) {
        const name = $('#name').val(),
        price = $('#price').val(),
        date = $('#date').val();
        const product = new Product(name, price, date);
        const ui = new UI;
        if(name === '' || price === '' || date === ''){
            return ui.showMessage('Pleace complete fields', 'danger')
        }
        ui.showMessage('Product Added Successfully', 'success');
        ui.addProducts(product);
        ui.resetForm();
        e.preventDefault();
    });
    $('.list-products').on('click', function(e){
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();

    });
    
});