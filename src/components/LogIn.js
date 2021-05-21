import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

/* ライブラリ */
import CustomFirebaseStore from '../hooks/CustomFirebaseStore';

function LogIn() {
    const [value, addItems, updateItems, deleteTodos, auth, updateUser, storeUserInfo, uiConfig] = CustomFirebaseStore();
    return (
        <div className="column panel-block">
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
    );
};

export default LogIn;