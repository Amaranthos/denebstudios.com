import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyDdsuPFjR6kZcdaY56ejzGMQOVL7CC0siU",
	authDomain: "denebstudios-com.firebaseapp.com",
	databaseURL: "https://denebstudios-com.firebaseio.com",
	projectId: "denebstudios-com",
	storageBucket: "denebstudios-com.appspot.com",
	messagingSenderId: "233059675477"
};

export const fire = firebase.initializeApp(config);
export const database = firebase.database();
export const storage = firebase.storage();