class Products {
	constructor() {
		this.items = {};
		this.mainContainer = document.getElementById("productContainer");
		this.breadTitle = document.getElementById("breadTitle");
		this.productsTitle = document.getElementById("productsTitle");
	}

	async fetchCategoriesLis(list) {
		this.mainContainer.innerHTML = "";
		const response = await fetch(`http://localhost:8888/api/V1/categories/${list}`);
		const data = await response.json();
		this.items = data;
		this.propsToProductsItem();
		this.breadTitleFind(list);
	}

	propsToProductsItem() {
		const items = this.items.items;
		for (let i = 0; i < items.length; i++) {
			let specialPrice = items[i].specialPrice;
			let price = items[i].price;

			if (!specialPrice) {
				specialPrice = price.toFixed(2);
				specialPrice = "R$" + specialPrice;
				price = "";
			} else {
				specialPrice = "R$" + specialPrice.toFixed(2);
				price = "R$" + price;
			}

			const template = `
                            <div class="products-item">
                                <div class="products-item-img"><img src="${items[i].image}" alt="${items[i].path}" /></div>
                                <div class="products-item-title"><h2>${items[i].name}</h2></div>
                                <div class="products-item-price"><span class="products-old-price">${price.replace(".", ",")}</span> <span class="products-new-price">${specialPrice.replace(".", ",")}</span></div>
                                <button type="button">Comprar</button>
                            </div>
                    `;

			this.mainContainer.insertAdjacentHTML("afterbegin", template);
		}
	}

	breadTitleFind(list) {
		if (list === 1) {
			this.breadTitle.textContent = "Camisetas";
			this.productsTitle.textContent = "Camisetas";
		} else if (list === 2) {
			this.breadTitle.textContent = "Calças";
			this.productsTitle.textContent = "Calças";
		} else if (list === 3) {
			this.breadTitle.textContent = "Sapatos";
			this.productsTitle.textContent = "Sapatos";
		}
	}
}
