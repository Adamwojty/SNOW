import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getShopCollection } from '../config/redux/actions';
import firestore from '../config/firebase/firebase';

export const useStoreFireBase = (collection) => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const handleDataFromFireBase = () => {
    const skisCollections = firestore.collection(collection);
    const documentsCollection = (doc) => {
      return { id: doc.id, ...doc.data() };
    };
    const subscribe = skisCollections.onSnapshot((snapshot) => {
      const dataFromCollection = snapshot.docs.map(documentsCollection);
      setItems(dataFromCollection);
      dispatch(getShopCollection(dataFromCollection));
    });
    return () => subscribe;
  };
  useEffect(() => {
    handleDataFromFireBase();
  }, [collection]);
  return items;
};
