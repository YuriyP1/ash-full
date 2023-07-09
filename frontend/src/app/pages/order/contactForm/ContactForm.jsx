import { TextField } from '@mui/material';
import { useState } from 'react';
// import PhoneMask from './phoneMask/PhoneMask';
// import { FilledInput } from '@mui/material';
//Phone mask
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './style.scss'
import { useSelector } from 'react-redux';
import { SERVER_ADRESS } from '../../../../serverAdress';
import thankyouPopup from '../../../components/thankyouPopup';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

export default function ContactForm () {

  const navigate = useNavigate();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [deliveryType, setDeliveryType] = useState("Доставка");
    const [house, setHouse] = useState("");
    const [entrance, setEntrance] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

  
    const store = useSelector(state => state)

    const handleSubmit = (event) => {

      event.preventDefault();
      const contactData = {
        name,
        phone,
        deliveryType,
        address,
        house,
        entrance,
        positions: store.store.store,
        fullPrice: store.store.sum
      };

      if (name === '' || phone === '') {
        setErrorMessage('Please fill out both name and phone fields.');
      } else {
        setErrorMessage(false)
      
      // Здесь можно написать логику отправки данных на сервер или их сохранения в локальном состоянии приложения.
      // Например, можно создать объект с данными и передать его в функцию-обработчик или контекст приложения.
      console.log(store.store)

      fetch(`${SERVER_ADRESS}/api/send-order`, {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactData)
      }) 
      .then(response => response.text())
      .then(contactData => {
        console.log('Успех:', contactData);
        navigate('/');
        thankyouPopup(contactData)
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
      
      // fetch('http://localhost:3000/api/db/user', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(contactData)
      // })
      // .then(response => response.json())
      // .then(contactData => {
      //   console.log('Успех:', contactData);
      // })
      // .catch((error) => {
      //   console.error('Ошибка:', error);
      // });




    // Очистка полей после отправки формы
      setName("");
      setPhone("");
      setAddress("");
    //   setDeliveryType("");

      }
    };


    const handleDeliveryTypeChange = (e) => {
      console.log(e)
      setDeliveryType(e);
    };

    const send = () =>{
        // fetch('http://localhost:3000/api/send-order')
        // fetch('http://185.235.218.108:3001/api/order')

        const data = {
            name: 'John Doe',
            phone: '+1 555-123-4567'
          };

    }

    return (
        <form onSubmit={handleSubmit} className="contactForm">
             {/* <div className='title'>
              Форма швидкого замовлення
             </div> */}
            {/* <label htmlFor="name">Форма швидкого замовлення</label> */}
            <input
                className='contactForm-input'
                type="text"
                id="name"
                value={name}
                placeholder="Ім'я"
                onChange={(event) => setName(event.target.value)}
            />
            <PhoneInput
                country={'ua'}
                // value={'(050) 687-59-30'}
                onChange={phone => setPhone({ phone })}
            />
            <div className="contactForm-deliveryType">
              <div className={`first center ${deliveryType === 'Доставка' ? "active" : ''}`}
                onClick={()=>handleDeliveryTypeChange("Доставка")}
              >
                Доставка
              </div>
              <div className={`second center ${deliveryType === 'Самовивіз' ? "active" : ''}`}
                onClick={()=>handleDeliveryTypeChange("Самовивіз")}
              >
                Самовивіз
              </div>
                {/* <label>
                    <input
                        type="radio" 
                        value="Доставка"
                        checked={deliveryType === "Доставка" }
                        onChange={handleDeliveryTypeChange}
                    />
                    <p>Доставка</p>
                </label> */}
                {/* <label>
                    <input
                        type="radio"
                        value="Самовивіз"
                        checked={deliveryType === "Самовивіз"}
                        onChange={handleDeliveryTypeChange}
                    />
                    <p>Самовывоз</p>
                </label> */}
            </div>
            {/* <br /> */}
    
            <br />
            {
                deliveryType === 'Доставка' ? 
                <>
                    <label htmlFor="address">АДРЕСА</label>
                    <input
                        className='contactForm-input'
                        type="text"
                        id="address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                    <div className="contactForm-adress_detail">
                        <input
                            className='contactForm-input detail'
                            type="text"
                            id="house"
                            placeholder="БУДИНОК"
                            value={house}
                            onChange={(event) => setHouse(event.target.value)}
                        />
                        <input
                            className='contactForm-input detail'
                            type="text"
                            // id="в"
                            placeholder="ПІД'ЇЗД"
                            value={entrance}
                            onChange={(event) => setEntrance(event.target.value)}
                        />
                    </div>
                    <div className='cost'>
                      Вартість доставки {store.store.sum > 500 ? 0 : 60} грн
                    </div>
                </>
                :
                <></>
            }
            {/* <Link to="/"> */}
              <button type="submit" onClick={send}>Замовити</button>
            {/* </Link> */}
            {errorMessage && <div className='error'>{errorMessage}</div>}
        </form>
        
    )
}