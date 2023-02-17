import database from '@react-native-firebase/database';
import {ITask} from '../types';
import Auth from './Auth';

const currentUser = Auth.getCurrentUser();
const uid = currentUser?.uid;

const configure = () => {
  // database().setPersistenceEnabled(true);
};

const store = (task: ITask) => {
  return database().ref(`/uptodo/${uid}/${task.id}`).set(task);
};

const update = (task: ITask) => {
  return database().ref(`/uptodo/${uid}/${task.id}`).update(task);
};

const remove = (id: number) => {
  return database().ref(`/uptodo/${uid}/${id}`).remove();
};

const get = (id: number) => {
  return database().ref(`/uptodo/${uid}/${id}`).once('value');
};

const getAll = () => {
  return database().ref(`/uptodo/${uid}`).once('value');
};

const RealtimeDatabase = {store, configure, update, remove, get, getAll};

export default RealtimeDatabase;
