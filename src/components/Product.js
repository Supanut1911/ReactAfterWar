import React ,{Component} from 'react'

//functional_Component
// const Product = (props) =>{
//     const {productname,productprice} = props
//     return (
//         <div>
//             <h2>{productname} Price :{productprice}</h2> <br />
//         </div>
//     )
// }

// export default Product


//Class_Component
class Product extends Component {


    constructor(props){
        super(props)
        console.log(props.productname);
        
    }


    
    render(){
        const {productname,productprice} = this.props
        return (
            <div>
                <h1>productName:{productname}</h1>
                <h2> productPrice = {productprice}</h2>

                </div>

            )
    }

}
export default Product


