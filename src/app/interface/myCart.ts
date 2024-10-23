export interface MyCart{
    id: string
    customerId: string
    itemId: string
    date: Date | null
}

export class InitialMyCart{
    static initialMyCart(){
        return {
            id: "",
            customerId: "",
            itemId: "",
            date: null
        }
    }
}