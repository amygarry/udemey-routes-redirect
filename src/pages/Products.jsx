import {Link} from 'react-router-dom'

function Products (){
    return (
        <div>
        <h1>Products Page</h1>
        <ul>
            <li>
            <Link to="/product-details/books">book</Link>
            </li>
            <li>
            <Link to="/product-details/shoes">shoe</Link>
            </li>
            <li>
            <Link to="/product-details/wallet">wallet</Link>
            </li>
          
            
        </ul>
        </div>
    )
}

export default Products 