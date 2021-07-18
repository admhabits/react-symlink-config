import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
	apiKey : "AiyZaYuKUklwJKHlkaweuidJKHESJH",
	databaseURL: "http://localhost:9000?ns=hosting-poject",
	projectId: "hosting-poject"
};

firebase.initializeApp(config);

export const db = firebase.database();
export default firebase;