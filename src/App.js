import React, { useEffect, useState } from 'react'

/* スタイルシート */
import './styles/main.css';

/* コンポーネント */
import Todo from './components/Todo';
import Login from "./components/LogIn";
// import Upload from "./components/Upload";
// Your web app's Firebase configuration
import firebase from 'firebase';

import { useAuthState } from 'react-firebase-hooks/auth';
import CustomFirebaseStore from './hooks/CustomFirebaseStore';

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
  // const [user, loading, error] = useAuthState(firebase.auth());
  const [value, addItems, updateItems, deleteTodos, auth, updateUser, storeUserInfo, uiConfig] = CustomFirebaseStore();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setLoading(false);
      let newUser = null;
      if (user) {
        newUser = await storeUserInfo(user);
      }
      setUser(newUser);
    });
  }, []);

  const logout = () => {
    auth.signOut();
  };

  const handleImageChanged = async downlodUrl => {
    await updateUser(user, downlodUrl);
  }

  const HeaderContent = () => {
    if (user) {
      return (
        <div class="navbar-end">
          <div class="navbar-item">
            {/* <Upload userImage={user.image} onSletctedImage={handleImageChanged} /> */}
            {user.name}
          </div>
          <div class="navbar-item">
            <button class="button is-danger is-light is-small" onClick={logout} > Logout</button>
          </div>
        </div >
      )
    } else {
      return (<Login />)
    }
  }

  return (
    <div className="container is-fluid">
      <header class="navbar">
        {loading ? (
          <p>
            LOADING.....
          </p>
        ) : (
          <HeaderContent />
        )}
      </header >
      <div>
        {user && <Todo />}
      </div>
    </div >
  );
}

export default App;