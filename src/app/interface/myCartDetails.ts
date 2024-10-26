import { productImg } from "./productImg"
import { ProductVariant } from "./productVariant"

export interface MyCartDetail {
    "id": string,
    "name": string,
    "catId": string,
    "imgUrl": productImg[],
    "variants": ProductVariant[]
}

export class InitialMycartDetail {
    static InitialMycartDetail(){
        return {
            "id": "",
            "name": "",
            "catId": "",
            "imgUrl": [],
            "variants": []
        }
    }
}