import React from 'react'
/* スタイルシート */
import './styles/main.css';

/* コンポーネント */
import Todo from './components/Todo';

import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyCpDVm_ak6er8oTntYomE2e9pCfw5yVPDs",
    authDomain: "fir-sample-40891.firebaseapp.com",
    projectId: "fir-sample-40891",
    storageBucket: "fir-sample-40891.appspot.com",
    messagingSenderId: "244745233430",
    appId: "1:244745233430:web:528358fc6a0275108ec137"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="container is-fluid">
      <Todo />
    </div>
  );
}

export default App;
