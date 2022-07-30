import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "../../serviceAccount.json";

initializeApp({
    credential: cert(serviceAccount),
});

export const db = getFirestore();
