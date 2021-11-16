import { Routes ,Route } from 'react-router-dom';
import ProductList from './Catalog/ProductList';

export default function Content() {
    return (
        <main className="container">
            <Route exact path="/catalog/:id(\d+)" element={ProductList} />
        </main>
    );
}