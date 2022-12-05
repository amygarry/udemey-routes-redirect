import {useParams} from 'react-router-dom'

function ProductDetails (){

    const params= useParams()
    return (
        <section>
            <p>{params.product_id}</p>
            <ul>
                <li>all of the things you need to know about the product are written right here.</li>
            </ul>
        </section>
    )
}

export default ProductDetails