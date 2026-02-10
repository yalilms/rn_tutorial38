import { productos } from "@/model/Types";
import { Platform } from "react-native";
import axios from "axios";

export async function consultarProductos():Promise<productos> {
    const IP = Platform.OS === "android" ? "10.0.2.2" : "localhost"
    const url = `http://${IP}:3000/productos`
    const respuesta = await axios.get(url)
    return respuesta.data
}