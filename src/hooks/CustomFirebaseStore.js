import React from 'react';
import firebase from 'firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
const CustomFirebaseStore = () => {
    const [value, loading, error] = useCollectionData(
        firebase.firestore().collection('todos')
    );
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

    return [value, addItems, updateItems];
};

export default CustomFirebaseStore;