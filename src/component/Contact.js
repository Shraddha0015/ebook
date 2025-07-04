import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Contact() {
    const {theme}=useContext(ThemeContext);
    console.log(theme);
    const [error, setError] = useState({});



    const [FormData, setFormdata] = useState(
        {
            "uname": '',
            "email": '',
            "password": '',
            "addreess": '',
            "country": '',
            "subscribe": false
        }
    );
    const handlesubmit = (event) => {

        event.preventDefault();
        setError({})
        if (FormData.uname === '' || FormData.uname === null) {

            setError
                (
                    {
                        name: 'Name cannot be blank or null'

                    }

                );


            //  console.log(uname);
        }

        if (FormData.email === '') {
            setError({
                email: 'email is mandatory'
            });
        }

        if (FormData.password.length <= 3 || FormData.password >= 9) {


            setError({
                password: 'please enter valid password'
            });
        }

        if (FormData.subscribe===false)
        {
            setError({
                subscribe:'please suscribe'
            });
        }
    }

    const handleChange = (event) => {
        setFormdata({
            ...FormData,
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value

        })

    }

    return (<>
        <p>Contant Page</p>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder="enter name"
                name="uname"
                value={FormData.uname}
                onChange={handleChange}

            />
            <span style={{ color: 'red' }}>{error && error.name}</span>

            <br></br>

            <input type="text" placeholder="enter email"
                name="email"
                value={FormData.email}
                onChange={handleChange}

            />
            <span style={{ color: 'red' }}>{error && error.email}</span>
            <br></br>
            <input type="text" placeholder="enter password"
                name="password"
                value={FormData.password}
                onChange={handleChange}
            />
            <span style={{ color: 'red' }}>{error && error.password}</span>
            <br></br>

            <textarea
                rows={4}
                cols={10}
                name="address"
                value={FormData.address}
                onChange={handleChange}

            />
            <br></br>
            <select
                name="country"
                value={FormData.country}
                onChange={handleChange}
            >
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="INDIA">INDIA</option>
                <option value="JAPAN">"JAPAN"</option>

            </select>
            <br></br>
            <input type="checkbox"
                name="subscribe"
                checked={FormData.subscribe}
                onChange={handleChange}
            />
              <span style={{ color: 'red' }}>{error && error.subscribe}</span>


            <button className="btn btn-success">submit</button>


        </form>
        <p>Data :{JSON.stringify(FormData)}</p>

    </>);
}

export default Contact;