import ProductListItem from '../ProductListItem/main';
import ProductDetails from '../ProductDetails/main';

function ProductView() {
    return(
        <div className="product-view">
            <h1>Hello from Product View!</h1>
            <ProductDetails />
            <ProductListItem />
        </div>
    );
}

export default ProductView;
