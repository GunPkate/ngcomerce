export interface MyCart{
    customerId: string
    itemId: string
    date: Date
}

export class MyCart{
    static initialMyCart(){
        return {
            customerId: "",
            itemId: "",
            date: new Date()
        }
    }
}