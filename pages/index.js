import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

// Head дозволяє додавати метатеги в HTML в розділ HEAD
const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Meetups page</title>
        <meta
          nema='description'
          content='Browse a huge list of highly active React meetups'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// виконаєтся до const HomePage
// зазвичай виконуєтся код який повинен виконатися на сервері
// виконаєтся тільки при зборці і не коли з боку клієнта
// export const getStaticProps = () => {}
export async function getStaticProps() {
  /**
   * here can be run some code
   * fetch data
   * smth
   * after result will be returned on props
   */
  const client = await MongoClient.connect(
    'mongodb+srv://yak1:Yakimo2883@cluster0.tomul.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  // метод find верне всі документи // в массив
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  // always return an object
  // object with props, and this props will be a props in HomePage
  // revalidate properties its time in second, how often pages will be generated after deployment
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

// alternative
// краще використовувати коли потрібен доступ до одного з об'єкту context - res or req
// або данні що змунюють сторінку надходять дуже часто, декілька разів на сек
// можливий недолік - очікування коли сторінка сгенеруєтся при кожному запиті
// will return the same object like getStaticProps
// but page pre-generated for every incoming request

//  export async function getServerSideProps(context) {
//      const req = context.req // request object
//      const res = context.res // responce object wich will be returned

// // mb fetch data from an API

// return {
//     props: {
//         meetups: DUMMY_MEETUPS
//     }
// }

//  }

export default HomePage;
