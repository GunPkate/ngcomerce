import { InitialProductDetail, ProductDetail } from "./productDetail"
import { productImg } from "./productImg"
import { ProductVariant } from "./productVariant"

export interface Product {
    id: String 
    name: String
    cat_id: String 
    details: ProductDetail
    variants: ProductVariant[]
    imgUrl: productImg[]
}

export class InitialProduct {
    static InitialProduct(): Product{
        return {
            id: "", 
            name: "",
            cat_id: "", 
            details: InitialProductDetail.InitialProductDetail(),
            variants: [],
            imgUrl: []
        }
    }
}

