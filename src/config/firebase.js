import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

export const aboutRef = generateEndpoint("about");
export const concertRef = generateEndpoint("concert");
export const drillRef = generateEndpoint("drill");
export const marchingRef = generateEndpoint("marching");
export const newsRef = generateEndpoint("news");
export const supplementalRef = generateEndpoint("supplemental");

function generateEndpoint(name) {
    return firebase.database().ref().child(name);
}