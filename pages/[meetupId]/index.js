import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

// props приходят с getStaticProps
const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta nema='description' content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};
// генерація всіх URL адресс в процессі зборки
// для всіх значень ідентифікатора meetup які можуть вводитися користувачем
// paths повинні містити всі можливі варіанти ідентифікаторів
// fallback: false означає, что якщо ідентифікатора не має в paths то буде 404
// fallback true означає nextJs при запросі динамічно сгенерує сторінку
// спочатку це буде пуста сторінка, коли сгенерує то підгрузить
// 'blocking' означає що нічого не буде відображено допоки сторінка не буде попередньо сгенерована
export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://yak1:Yakimo2883@cluster0.tomul.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  // find дозволяє додати всі документи
  // 1{} немає критеріїв для пошуку, тобто всі документи
  // 2{} які поля повинні бути повернуті. наприклад всі поля _id тільки 1
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  // path перебираєтся весь масив meetups та формуєтся новий обьект з ключом params
  // вложенний обьект має шдетифікатор meetupId та дорівнює кожному id з массиву meetups
  // meetupId назва папки з дінамічними сторінками
  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  // fetch data for a single meetup

  // context.params - объект, где наши идентификаторы между квадратными скобками будут находиться свойства
  // и значения будут фактическими значениями закодировано в URL-адресе.
  // context.params.meetupId because pages [meetupId]
  const meetupId = context.params.meetupId;

  // console.log(meetupId); // виведется тільки при запуску в терміналі, в браузері ні. Так як виконуєтся не в клієнті

  // після того як отримали id сторінки
  const client = await MongoClient.connect(
    'mongodb+srv://yak1:Yakimo2883@cluster0.tomul.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  // пошук тільки одного єлементу по id
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  // так як id отримуєтся не як string то потрібно настроїти обьект який ми передаємо
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetupDetails;
