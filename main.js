class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ]
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    /* функция для общей суммы всех товаров*/
    goodSum() {
        let sum = 0;
        this.goods.forEach(item => {
            sum += item.price;
        })
    }
}

class ProductItem {
    constructor(product, img = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bhphotovideo.com%2Fimages%2Fimages2500x2500%2Fsamsung_np900x5n_x01us_15_6_notebook_9_ext_1304857.jpg&f=1&nofb=1&ipt=cafb59024124d6efa064993d8f43630df55770ba522cc3d2819d2dcc6e85e998&ipo=images') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title} </h3>
                <p>${this.price}$</p>
                <button class="buy-btn">Купить</button>
        </div>`
    }
}

const list = new ProductList();
list.fetchGoods();
list.render();


// классы для Корзины товаров и Элемента корзины товаров//

class Cart {
    addGood() {

    }

    deleteGood() {

    }

    changeGood() {

    }

    render() {

    }
}

class ElCart {
    render() {

    }
}