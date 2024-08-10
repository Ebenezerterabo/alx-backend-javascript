import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstname, lastname, filename) {
  const promiseSettled = Promise.allSettled([signUpUser(firstname, lastname),
    uploadPhoto(filename)]);
  return promiseSettled;
}
