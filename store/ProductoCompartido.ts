import { producto } from "@/model/Types"
import { create } from "zustand"

type ProductoCompartido = {
    producto:producto
    setProducto: (p:producto) => void
}

const PRODUCTO_INICIAL = {
    id:"0",
	nombre:"",
	categoria:"",
	icono:"",
	precio:0
}
export useProducto = create<ProductoCompartido> ( set => {(
    PRODUCTO_INICIAL:producto,
    setProducto: (p:producto) => {
        set({producto:p})
    }
)}

)