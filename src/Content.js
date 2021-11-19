import { Routes ,Route } from 'react-router-dom';
import ProductList from './Catalog/ProductList';
import ProductPage from './Components/Product/Product';

export default function Content() {
    return (
        <main className="container">
            <Route path="/product/">
                <ProductPage /> 
            </Route>
            <Route path="/catalog/:id(\d+)" element={ProductList} />
        </main>
    );
}