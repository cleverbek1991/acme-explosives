"use strict";

function loading() {
	loadCategories().then(
		loadTypes().then(
			loadProducts(), () => {
				console.log('Error');
			}));
}

loading();