import { useEffect, useState } from "react";
import Productlist from "./Productlist";
import { useApi } from "./useApi";

function App() {
    //  const [Products, setProducts] = useState('');
    const [url, setUrl] = useState(`http://localhost:3000/products`)
    const { product: Products, loading: load } = useApi(url);
    console.log(load);


    // useEffect(() => {
    //     fetch(url)
    //         .then(d => d.json())
    //         .then(res => setProducts(res));

    // }, [url]);

    return (
        <>
            <h1 id='a'>My E Book</h1>
            {
                load && <p>Loading</p>
            }
            <div id="btn1">
                <button className="btn btn-success"
                    onClick={() => setUrl(`http://localhost:3000/products`)}>
                    All</button>
                <button className="btn btn-danger"
                    onClick={() => setUrl(`http://localhost:3000/products?category=laptop`)}>
                    laptop</button>
                <button className="btn btn-warning"
                    onClick={() => setUrl(`http://localhost:3000/products?category=mobile`)}>
                    mobile</button>
                <button className="btn btn-primary"
                    onClick={() => setUrl(`http://localhost:3000/products?category=watch`)}>
                    watches</button>
                <button className="btn btn-secondary"
                    onClick={() => setUrl(`http://localhost:3000/products?category=tv`)}>
                    tv</button>
                <br></br>


            </div>
            {
                load && <div class="spinner-border text-danger"></div>
            } <br></br>

            <Productlist product12={Products} />
        </>);
}

export default App;