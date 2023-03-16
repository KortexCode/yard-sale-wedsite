import React from 'react'
import closeIcon from '@icons/icon_close.png';

function ProductInShoppingCart({product, shoppingList, setShoppingList}) {

    const handleDelteProduct = () => {
        let productList = [...shoppingList];
        //se busca el indice del producto a eliminar 
        const indexToDeleted = productList.findIndex((article)=>{
            return article.id === product.id;
        })
        productList.splice(indexToDeleted, 1);
        setShoppingList(productList);
    }

    return (

        <div className="shopping-cart">
            <figure>
                <img src={`${product.images[0]}`} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img src={closeIcon} alt="close" onClick={handleDelteProduct} className="shopping-cart__arrow_close"/>
        </div>
    )
}

export { ProductInShoppingCart }