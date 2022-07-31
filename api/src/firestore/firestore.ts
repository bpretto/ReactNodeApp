import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// export GOOGLE_APPLICATION_CREDENTIALS="/home/bernardo/Área de Trabalho/Work time/Projetos/ReactNodeApp/api/serviceAccountKey.json"

initializeApp({
    credential: applicationDefault(),
});

export const db = getFirestore();
