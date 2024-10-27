import { productImg } from "./productImg"
import { ProductVariant } from "./productVariant"

export interface MyCartDetail {
    name: string
    color: string
    color_code: string
    size: string
    qty: number
    img_url: string	
}

export class InitialMycartDetail {
    static InitialMycartDetail(){
        return {
            name: "",
            color: "",
            color_code: "",
            size: "",
            qty: 0,
            img_url: "",	
        }
    }
}