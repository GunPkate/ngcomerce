export interface CartItemUI{
    id: string
    product_code : string
    skucode : string
    qty : number
    color: string
    cart_id: string
}

export class initialCartItemUI{
    static initialCartItemUI(){
        return {
            id: "",
            product_code: "",
            skucode: "",
            qty : 0,
            color: "",
            cart_id: ""
        }
    }
}