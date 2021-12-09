import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import Card from '../../components/organisms/card'
import Main from '../../components/template/main'
import { ProductsProvider, UseProducts } from '../../context'

const ShowProduct = ({ navigation }: any) => {
  const { data } = UseProducts()

  const [products, setProducts] = useState<Products[]>([])

  useEffect(() => {
    axios.get('http://192.168.1.100:3333/product/all')
      .then(({ data }) => setProducts(data))
      .catch((error) => {
        console.log('Are use static data 😋', error)
      })
  }, [])

  const renderItem = ({ item }:any) => (
    <Card onPress={() => navigation.navigate('Detalhes', item)} key={item?.id} {...item} />
  );

  return (
    <Main>
        <FlatList
          data={products}
          renderItem={ renderItem}
        />
    </Main>
  )
}

export default ShowProduct
