const express = require('express');
const path = require('path');
const userRouter = require('./routes/user.routes')
const bodyParser = require('body-parser');
const TelegramApi = require('node-telegram-bot-api');
const cors = require('cors');
const { createDiffieHellmanGroup } = require('crypto');
const token ='6077774598:AAEJJaRdxoFdvp_A_RIn7CrOeS9nIqj1Zmw'

const bot = new TelegramApi(token, {polling: true})
const app = express();
//DB
app.use('/api/db', userRouter)


// FOUNDERS
const YURA = 1535962876



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));

const PORT = 3015;

let count = 0

app.listen(PORT, (error)=>{
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

// app.get('/api/send-order', (req, res)=>{
//     count = count + 1
//     // console.log('send message')
//     bot.sendMessage(YURA, `NEW ЗАМОВЛЕННЯ ${count}`)
// })

// app.post('/api/send-order', (req, res) => {
//   const data = req.body;
//   console.log(data);
//   res.send('POST запрос принят');
// });

app.post('/api/send-order', (req, res) => {
  const {
    name,
    phone,
    deliveryType,
    address,
    house,
    entrance,
    positions,
    fullPrice,
   } = req.body;

  const titles = positions.map(item => item.title);

  const result = positions.map(item => `      ${item.title} ${item.amount} шт`).join(',\n');

  console.log(phone)

  bot.sendMessage(YURA,
    `
    ЗАМОВЛЕННЯ!${count}\n
    Ім'я: ${name}
    Телефон: ${phone.phone}
    Тип доставки: ${deliveryType}
    Адреса: ${address}
    Будинок: ${house}
    Під'їзд: ${entrance} \n
    Позиції:
${result}
      _____________________
      Сума до сплати: ${fullPrice} грн
    
    `
    )


  // res.send('POST запрос принят');
  res.status(200).send("Дякуємо за замовлення! Ми скоро зв'яжемось!");
});

app.post('/api/fast-call', (req, res) => {
  const {
    phone,
   } = req.body;

  bot.sendMessage(YURA,
    `
      Швидке замовлення: ${phone}
    `
    )


    res.status(200).send("Дякуємо! Ми скоро зв'яжемось!");
});




// app.use('/api', router);
app.use(express.static(path.join(__dirname, '/../frontend/build')));

app.get('*', (_, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type, Authorization',
  );

  res.contentType('text/html; charset=utf-8');

  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});






bot.on('message', msg=>{
    const text = msg.text;
    const id = msg.chat.id;

    if(text === '/start'){
        bot.sendMessage(id, `Добро пожаловать в ASH`)
    }
})