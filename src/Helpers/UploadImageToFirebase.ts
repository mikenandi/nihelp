import { firebase } from "./FirebaseConfig";
import randomstring from "randomstring";

async function uploadImageToFirebase(image) {
    try {
        let response = await fetch(image.uri);

        let blob = await response.blob();

        let filename = randomstring.generate(18).toLocaleLowerCase();

        let ref = await firebase.storage().ref().child(filename).put(blob);

        return ref;
    } catch (error) {
        return error.message;
    }
}

export { uploadImageToFirebase };
