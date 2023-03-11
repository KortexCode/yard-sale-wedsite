import React from 'react'

function useComposeState(initialItem){

    const {state, _setState} = React.state(initialItem);


    const setState = (state)=>{
      _setState([])
    }
    return{
        state,
        setState,

    }
        

    

}

export {useComposeState}

