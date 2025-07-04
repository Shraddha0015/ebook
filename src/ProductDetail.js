import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "./useApi";


function ProductDetail() {
    const param = useParams();
    const { product: prod, loading: load } = useApi(`http://localhost:3000/products/${param.id}`);
    console.log(prod);
    console.log(load);
    const nevigate = useNavigate();
    return (<>
        {/*  <p>ProductDetail {param.id}</p>*/}

        {
            load && <div class="spinner-border text-danger" id="sp"></div>
        }

        <div className="card" style={{ width: 350 }} id='card'>
            <img className="card-img-top" src={prod.img} alt="Card image" />
            <div className="card-body">
                <h4 className="card-title">{prod.id}</h4>
                <p className="card-text">{prod.name}</p>
                <p className="card-text">{prod.price}</p>
                <p className="card-text">{prod.category}</p>
                <p className="card-text">{prod.description}</p>



                <a href="#" className="btn btn-primary">AddToCart</a>
                <button className="btn btn-link" onClick={() => {
                    setTimeout(() => {
                        nevigate('/product');
                    }, 2000)

                }
                }>Go Back</button>
                {/*<Link to={`/readmore/${props.id}`}>ReadMore</Link>*/}
            </div>
        </div>
    </>)
}

export default ProductDetail;