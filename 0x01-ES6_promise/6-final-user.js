import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstname, lastname, filename) {
  const promiseSettled = Promise.allSettled([signUpUser(firstname, lastname),
    uploadPhoto(filename)]);
  return promiseSettled
    .then((results) => {
      if (results.status === 'fulfilled') {
        return { status: results.status, value: results.value };
      }
      return { status: results.status, value: results.reason };
    });
}
