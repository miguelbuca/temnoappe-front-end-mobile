import React, { createContext, useContext, useState, useEffect, Context } from 'react'

import axios from 'axios'
import { ContextProps } from '../interface/context'

const ProductsContext = createContext<ContextProps<Products>>({
  data: []
})

export const ProductsProvider = ({ children }: any) => {

    const [ products, setProducts ] = useState<Products[]>([])

  useEffect(() => {
    axios.get('https://192.168.1.100:3333/product/all')
      .then(({ data }) => setProducts(data))
      .catch((error) => {
        console.log('Are use static data 😋',error)
      })
    
  }, [])

  return (
    <ProductsContext.Provider value={{
        data: products
      }}>
      { children }
    </ProductsContext.Provider>
  )
}

export const UseProducts = () =>{
    const context = useContext(ProductsContext)

    if(!context) throw new Error('UseProducts munst be used within ProductsProvider.')

    const { data } = context

    return { data }

}
