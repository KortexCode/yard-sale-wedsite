import React from 'react'

function useObserver(product, imgNotFound){

    
    let observer = new IntersectionObserver(entries => {
        /* console.log("todas las entradas", entries); */
        entries.filter(entry => entry.isIntersecting).forEach(entryImg => {

            const src = entryImg.target.getAttribute("data-src");
            
            entryImg.target.setAttribute("alt", product.title);
            if(!src.length)
                entryImg.target.setAttribute("src", imgNotFound);
            else
                entryImg.target.setAttribute("src", product.images[0]);
            
            observer.unobserve(entryImg.target);   
        })
    });
    return observer;
}

export {useObserver}