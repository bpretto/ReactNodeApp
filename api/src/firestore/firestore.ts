import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// export GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json"

initializeApp({
    credential: applicationDefault(),
});

export const db = getFirestore();
