import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

export const todosRef = generateEndpoint("todos");

function generateEndpoint(name) {
    return firebase.database().ref().child(name);
}