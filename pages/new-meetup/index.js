import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

// adding a new meetup
const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandleer = async (enteredMeetupData) => {
    // відбудется запуск API з відповідною адрессою
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json(); // відповідь після запиту

    console.log(data);

    router.push('/'); // come back on home page
  };

  // Head встановлює title сторінки та її опис
  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta nema='description' content='Add your own meetups' />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandleer} />;
    </Fragment>
  );
};

export default NewMeetupPage;
