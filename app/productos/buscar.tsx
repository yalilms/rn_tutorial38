import { Alert, FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon, List, Text } from 'react-native-paper'
import { producto, productos } from '@/model/Types'
import { consultarProductos } from '@/helpers/ProductosApi'
import { router } from 'expo-router'

export default function Buscar() {
    const [listaProducto, setListaProducto] =useState<productos>([])
    useEffect(accionConsultarProductos,[])
    function getFlatListItem(producto:producto): React.ReactElement {
        return <List.Item title={producto.nombre}
                    description={producto.categoria}
                    left={() => <List.Icon icon={producto.icono}/>}
                    right={() => <View>
                                    <Text variant='titleMedium'>{producto.precio}</Text>
                                </View>
                        }
                    onPress={() => router.push('/productos/detalle')}
                />
    }
    function accionConsultarProductos () {
        consultarProductos()
        .then(lista => setListaProducto(lista))
        .catch(error => Alert.alert("error", error.toString()))
    }

  return (
    <View className="p-4">
        <FlatList
            data = {listaProducto}
            keyExtractor={p => p.id}
            renderItem={ ({item}) => getFlatListItem(item)} 
        />
      <Text variant="titleLarge">Buscar</Text>
    </View>
  )
}
