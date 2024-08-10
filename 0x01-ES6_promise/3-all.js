import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const allPromises = Promise.all([uploadPhoto(), createUser()]);
  allPromises
    .then((results) => {
      // Destrucuring the array results
      const [photo, user] = results;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    }).catch(() => {
      console.log('Signup system offline');
    });
}
