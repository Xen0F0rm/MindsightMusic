import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

export const marchingRef = generateEndpoint("marching");
export const concertRef = generateEndpoint("concert");
export const supplementalRef = generateEndpoint("supplemental");
export const newsRef = generateEndpoint("news");
export const drillRef = generateEndpoint("drill");
export const aboutRef = generateEndpoint("about");

function generateEndpoint(name) {
    return firebase.database().ref().child(name);
}