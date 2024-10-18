export interface ProductDetail {
    id                :string   
    price             :number
    promotion_price   :number
    name              :string
    description       :string
    rating            :string 
}

export class InitialProductDetail {
    static InitialProductDetail(): ProductDetail{
        return {
            id: "",
            price: 0,
            promotion_price: 0,
            name: "",
            description: "",
            rating: "",
        }
    }
}
