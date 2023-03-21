import React from 'react'
//Este hook se encarga generar una carga lazy de las imágenes de cada producto en el home
function useObserver(product, imgNotFound){

    let observer = new IntersectionObserver(entries => {
        /* console.log("todas las entradas", entries); */
        entries.filter(entry => entry.isIntersecting).forEach(entryImg => {

            const  src = product.images[0];
            const textValidation = src.substring(0,5);//Si comienza con https no es una img válida
            
            entryImg.target.setAttribute("alt", product.title);//Añadimos el aly
            if(textValidation != "https")//Validamos si tiene fuente válida o no
                entryImg.target.setAttribute("src", imgNotFound);
            else
                entryImg.target.setAttribute("src", src);
            
            observer.unobserve(entryImg.target); //Dejamos de observar
        })
    });
    return observer;
}

export {useObserver}