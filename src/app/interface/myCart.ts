export interface MyCart{
    id: string
    product_code : string
    skucode : string
    qty : number
}

export class initialMyCart{
    static initialMyCart(){
        return {
            id: "",
            product_code: "",
            skucode: "",
            qty : 0
        }
    }
}