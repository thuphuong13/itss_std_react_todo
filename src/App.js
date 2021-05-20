import React from 'react';

/* スタイルシート */
import './styles/main.css';

/* コンポーネント */
import Todo from './components/Todo';
// Your web app's Firebase configuration
import firebase from 'firebase';

import { useAuthState } from 'react-firebase-hooks/auth';

// // Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCpDVm_ak6er8oTntYomE2e9pCfw5yVPDs',
  authDomain: 'fir-sample-40891.firebaseapp.com',
  projectId: 'fir-sample-40891',
  storageBucket: 'fir-sample-40891.appspot.com',
  messagingSenderId: '244745233430',
  appId: '1:244745233430:web:528358fc6a0275108ec137',
};
firebase.initializeApp(firebaseConfig);

// const [MyIconReactionComment] = useDocumentData<any>(
// firebase
// .firestore()
// .collection('posts')
// .doc(`${props.idPost}`)
// .collection('comments')
// .doc(`${props.idComment}`)
// .collection('reactionComments')
// .doc(`${User.uid}`)
// );
// const [
// socialAccounts,
// loadingSocialAccounts,
// errorWhenLoadSocialAccounts,
// ] = useCollectionData<ISocialAccount>(
// firebase
// .firestore()
// .collection('social-accounts')
// .where('user_id', '==', uid.uid)
// );
// const logout = () => {
// firebase.auth().signOut();
// };

function App() {
  const [user, loading, error] = useAuthState(firebase.auth());
  const login = async () => {

    var provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  };
  console.log(user);
  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (!user) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <button
          onClick={() => login()}
          style={{
            marginTop: '5rem',
            padding: '20px',
            backgroundColor: '#fff',
            fontWeight: 'bold',
          }}
        >
          Sign in with google
</button>
      </div>
    );
  }

  return (
    <div className="container is-fluid">
      <Todo />
    </div>
  );
}

export default App;