import { useState, useEffect } from 'react';
import ProductListItem from '../ProductListItem/main';
import ProductDetails from '../ProductDetails/main';
import './ProductView.css';

function ProductView({ products }) {
    const [sideOpen, setSideOpen] = useState(
        localStorage.getItem('sideOpen') || true);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // automatically open the side panel when a product is selected
    // by setting sideOpen to true
    useEffect(() => {
        // open side panel only when product is selected
        if (selectedProduct) {
            setSideOpen(true);
            localStorage.setItem('sideOpen', true);
        }
    }, [selectedProduct]);

    // when panel is closed, any product selection should be cleared
    useEffect(() => {
        // deselect product when side panel is closed
        if (!sideOpen) {
            setSelectedProduct();
            localStorage.setItem('sideOpen', false);
        }
    }, [sideOpen]);

    return(
        <div className="product-view">
            <div className="product-main-area">
                <h1>Products</h1>
                <div className="product-list">
                    {products.map(product => (
                        <ProductListItem
                        key={product.id}
                        product={product}
                        isSelected={product.id === selectedProduct?.id}
                        onClick={() => setSelectedProduct(product)}
                        />
                    ))}
                </div>
            </div>

            {/* side panel  */}
            <div className="product-side-panel">
                <div className="product-side-panel-toggle-wrapper">
                    <div className="product-side-panel-toggle"
                         onClick={() => setSideOpen(!sideOpen)}>
                        {sideOpen ? '>': '<'}
                    </div>
                </div>
                <ProductDetails product={selectedProduct} visible={sideOpen} />
            </div>
        </div>
    );
}

export default ProductView;
