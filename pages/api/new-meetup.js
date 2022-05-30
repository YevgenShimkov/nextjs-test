import { MongoClient } from 'mongodb';

// /api/new-meetup name file its path segments in URL
// виконается кожного разу коли приходить запрос на даний маршрут
// POST  /api/new-meetup
// req - data for request. Можно достать header,body or methods
// res - response for request? for sending back response
async function handler(req, res) {
  // тільки якщо POST
  if (req.method === 'POST') {
    const data = req.body;
    // will back a promise
    const client = await MongoClient.connect(
      'mongodb+srv://yak1:Yakimo2883@cluster0.tomul.mongodb.net/?retryWrites=true&w=majority'
    );
    const db = client.db(); // отримуємо доступ до DB

    // db  приходять у вигляді коллекції, витягуємо потрібний документ
    //
    const meetupsCollection = db.collection('meetups');

    // додаєтся один док в колекцію.  Цей документ є обьектом for exmpl data {title: , id:, ets...}
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close(); // close db

    // відправляєтся відповідь на запрос.
    // json може містити додаткову інфу

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
