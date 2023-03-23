import React, { useEffect } from 'react'
//Este hook funciona como una paginación con límite de 50 elementos que mostrará de 10
//en 10 mientras se hace se llega al final del scroll.
function usePagination(){
    const [pagination, setPagination] = React.useState({
      offset: 0,
      limit: 10,  
    });
    let {limit} = {...pagination};
    useEffect(()=>{
        window.addEventListener("scroll", infinityScroll, {passive : false});
        
        function infinityScroll(){
           
            //Se extrae el máximo scroll segúnla vista actual
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            if(maxScroll === window.scrollY){
                limit+=10;
                setPagination({...pagination, ...{limit}} )
            } 
        }
        return ()=>{
            window.removeEventListener("scroll", infinityScroll);
        }
    },);
    return {pagination, setPagination}
}

export {usePagination}
