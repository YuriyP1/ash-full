import { TextField } from '@mui/material';
import { useState } from 'react';
// import PhoneMask from './phoneMask/PhoneMask';
// import { FilledInput } from '@mui/material';
//Phone mask
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './style.scss'
import { useSelector } from 'react-redux';
export default function ContactForm () {

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

      fetch('http://185.235.218.108:3000/api/send-order', {
      // fetch('http://192.168.33.64:3001/api/send-order', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactData)
      }) 
      .then(response => response.json())
      .then(contactData => {
        console.log('Успех:', contactData);
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
      setDeliveryType(e.target.value);
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
            <label htmlFor="name">Ім'я</label>
            <input
                className='contactForm-input'
                type="text"
                id="name"
                value={name}
                placeholder="Ім'я*"
                onChange={(event) => setName(event.target.value)}
            />
            <PhoneInput
                country={'ua'}
                value={'(050) 687-59-30'}
                onChange={phone => setPhone({ phone })}
            />
            <div className="contactForm-deliveryType">
                <label>
                    <input
                        type="radio" 
                        value="Доставка"
                        checked={deliveryType === "Доставка" }
                        onChange={handleDeliveryTypeChange}
                    />
                    <p>Доставка</p>
                </label>
                <label>
                    <input
                        type="radio"
                        value="Самовивіз"
                        checked={deliveryType === "Самовивіз"}
                        onChange={handleDeliveryTypeChange}
                    />
                    <p>Самовывоз</p>
                </label>
            </div>
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
                </>
                :
                <></>
            }

            <button type="submit" onClick={send}>Отправить</button>
            {errorMessage && <div className='error'>{errorMessage}</div>}
        </form>
        
    )
}