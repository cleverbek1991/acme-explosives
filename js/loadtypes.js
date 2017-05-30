"use strict";

let loadTypes = () => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        request.open('GET', 'types.json');
        request.send();

        request.addEventListener("load", (e) => {
            var typesData = JSON.parse(e.target.responseText).types;
            console.log(typesData);
            resolve(typesData);
        });

        request.addEventListener("error", () => {
            console.log('error');
            reject();
        });
    });
};