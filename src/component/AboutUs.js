import { useState } from "react";
import { useForm } from "react-hook-form";

function AboutUs() {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        console.log(`${data.username} ${data.email} ${data.password} ${data.age} ${data.address} ${data.country} ${data.subscribe}`);


    };


    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="enter name"
                //  name="uname"
                // value={FormData.uname}

                {...register('username', {
                    required: 'This is rquired feild', minLength: {
                        value: 4,
                        message: 'min length should be 4'
                    },
                    maxLength: {
                        value: 9,
                        message: 'max length should be 9'
                    }

                })}

            />
            {errors.username && <span style={{ color: 'red' }}>{errors.username.message}This feild is rqeuired</span>}




            <br></br>

            <input type="text" placeholder="enter email"
                //  name="email"
                //   value={FormData.email}
                {...register('email', { required: true })} />

            {errors.email && <span style={{ color: 'red' }}>This feild is rqeuired</span>}



            <br></br>
            <input type="text" placeholder="enter password"
                // name="password"
                //value={FormData.password}
                {...register('password', { pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/ })}
            />

            {errors.password && <span style={{ color: 'red' }}>password should be strong</span>}



            <br></br>



            <textarea
                rows={4}
                cols={10}
                //  name="address"
                //  value={FormData.address}
                {...register('address')} />




            <br></br>

            <input type="text" placeholder="enter your age"
                {...register('age', {
                    min: {
                        value: 18,
                        message: 'age should be greater than 18'
                    },
                    max: {
                        value: 68,
                        message: 'max age should be 68'
                    }
                })} />


            {errors.age && <span style={{ color: 'red' }}>{errors.age.message}</span>}

            <br></br>


            <select   {...register('country')}
            // name="country"
            // value={FormData.country}


            >
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="INDIA">INDIA</option>
                <option value="JAPAN">"JAPAN"</option>

            </select>

            <br></br>
            <input type="checkbox"
                //   name="subscribe"
                // checked={FormData.subscribe}
                {...register('subscribe')} />





            <button className="btn btn-success">submit</button>


        </form>

    </>);
}

export default AboutUs;