import '../FinishPurchase/FinishPurchase.css';
import React, { useState, useContext } from 'react';
import { collection, addDoc } from 'firebase/firestore'
import {db} from '../../firebaseConfig/firebaseConfig'
import { ProductsContext } from '../../CartContext/CartContext';

const initialState= {
    name: "",
    lastName: "",
    address: ""
}

const FinishPurchase = () => {

    let { addedProducts, total } = useContext(ProductsContext);

    const [values, setValues] = useState(initialState);

    const getValues = (e) => {
        const {value, name} = e.target;
        setValues({...values, [name]: value});
    }

    const submit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "purchases"), {
            buyer: values, items: addedProducts, total:`${total}`
        });
        console.log(docRef.id);
        setValues(initialState);
    }

    return(
        <>
            <form className="form" onSubmit={submit}>
                <div className="form-floating mb-3 inputContainer">
                    <input type="text" name="name" value={values.name} onChange={getValues} className="form-control" id="floatingName" placeholder="Name" />
                    <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating mb-3 inputContainer">
                    <input type="text" name="lastName" value={values.lastName} onChange={getValues} className="form-control" id="floatingLastName" placeholder="Last name" />
                    <label htmlFor="floatingLastName">Last name</label>
                </div>
                <div className="form-floating mb-3 inputContainer">
                    <input type="text" name="address" value={values.address} onChange={getValues} className="form-control" id="floatingAddress" placeholder="Address" />
                    <label htmlFor="floatingAddress">Address</label>
                </div>
                <button className="formButton">Send</button>
            </form>
        </>
    )
}

//FALTA ARMAR EL CONDICIONAL PARA QUE APAREZCA QUE YA SE TOMO EL PEDIDO Y QUE NO PIERDAN SU ID DE COMPRA. TMB FALTA PONER LA FECHA EN DOCREF
//tambien falta que cuando se de en el send, se desaparezcan los productos del carrito 

export default FinishPurchase;