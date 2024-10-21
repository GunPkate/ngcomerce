export interface MyCart{
    customerId: string
    itemId: string
    date: Date
}

export class InitialMyCart{
    static initialMyCart(){
        return {
            customerId: "",
            itemId: "",
            date: new Date()
        }
    }
}