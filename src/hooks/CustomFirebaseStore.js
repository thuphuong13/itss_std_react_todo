import React from 'react';
import firebase from 'firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
const CustomFirebaseStore = () => {
    const [value, loading, error] = useCollectionData(
        firebase.firestore().collection('todos')
    );
    const auth = firebase.auth();
    console.log(value);
    const addItems = async (items) => {
        await firebase
            .firestore()
            .collection('todos')
            .doc(`${items.id}`)
            .set(items);
    };
    const updateItems = async (newItem) => {
        console.log(newItem);
        await firebase
            .firestore()
            .collection('todos')
            .doc(`${newItem.id}`)
            .update({ done: !newItem.done });
    };
    const deleteTodos = async () => {

        value.map((item) =>
            firebase
                .firestore()
                .collection('todos')
                .doc(`${item.id}`)
                .delete()
        )
    };

    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: "/",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
    }

    const storeUserInfo = async (user) => {
        const { uid } = user;
        const userDoc = await firebase.firestore().collection("users").doc(uid).get();
        if (!userDoc.exists) {
            await firebase.firestore().collection("users").doc(uid).set({ name: user.displayName });
            return {
                name: user.displayName,
                id: uid,
            };
        } else {
            return {
                id: uid,
                ...userDoc.data(),
            };
        }
    }

    const updateUser = async (user, image) => {
        try {
            const userDoc = await firebase.firestore().collection("users").doc(user.id).get();
            if (userDoc.exists) {
                await firebase.firestore().collection("users").doc(user.id).update({ ...userDoc.data(), image: image });
            }
        } catch (err) {
            console.log(err);
        }
    }
    return [value, addItems, updateItems, deleteTodos, auth, updateUser, storeUserInfo, uiConfig];
};

export default CustomFirebaseStore;