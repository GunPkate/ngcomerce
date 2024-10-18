export interface productImg {
    id               :string   
    product_code     :string
    img_code         :string
    img_url          :string
}

export class  InitialProductImg {
    static InitialProductImg(){
        return {
            id: "", 
            product_code:  "",
            img_code: "",
            img_url: "",
        }
    }
  }