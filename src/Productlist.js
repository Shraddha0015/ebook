import Product from "./Product";

function Productlist(props) {
    const p = props.product12;
    console.log(p);
    return (
        <>
            <h3 id='b'>Product List</h3>

            { /*<p>Product List</p>
            <Product {...p[0]}/>
            <Product {...p[1]}/>*/ }

            {
                p && p.map((p1, ind) => {
                    console.log(ind);
                    return (<Product{...p1} key={ind} />)
                })

            }



        </>

    );
}

export default Productlist;

