export interface CartItem{
    id: string
    product_code : string
    skucode : string
    qty : number
}

export class initialCartItem{
    static initialCartItem(){
        return {
            id: "",
            product_code: "",
            skucode: "",
            qty : 0
        }
    }
}