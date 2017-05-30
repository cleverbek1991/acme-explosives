"use strict";

let loadProducts = () => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        request.open('GET', 'products.json');
        request.send();

        request.addEventListener("load", (e) => {
            let productsData = JSON.parse(e.target.responseText).products;
            console.log(productsData);
            resolve();
        });

        request.addEventListener("error", () => {
            console.log('error');
            reject();
        });
    });
};