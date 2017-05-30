"use strict";

let loadCategories = function() {
    return new Promise((resolve, reject) => {

        let request = new XMLHttpRequest();

        request.open('GET', 'categories.json');
        request.send();

        request.addEventListener("load", (e) => {
            let categoriesData = JSON.parse(e.target.responseText).categories;
            let selectCategory = document.getElementById('select');
            console.log(categoriesData);
            resolve(categoriesData);
        });

        request.addEventListener("error", () => {
            console.log('error');
            reject();
        });
    });
};