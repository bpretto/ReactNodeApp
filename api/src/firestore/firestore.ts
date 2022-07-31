import "dotenv";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp({
    credential: cert({
        clientEmail:
            "firebase-adminsdk-2q3g4@reactnodeapp-fe8cb.iam.gserviceaccount.com",
        projectId: "reactnodeapp-fe8cb",
        privateKey:
            "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCWY+YojE5mJTX1\nA6kS3WgAh67xevTv1Wo8VlRkkizyrg4WxP7zAsMnKIVrVP2GlyTLm/9jYnWGzpMi\n5Vc7v1CSlAB9Z4l+zx60oFj4SfUNGV+mqOaqPFFa/fH4ulKSmHLrgco1oK+VmeaQ\nUuggQqDpz8lHoBs+aAk0VMJzrHTAMffP9VLqnZygDfx1cfbA23yjPzgJ5AVCvAgE\n0shK+C9KTMi/gIZCEmuuVVA+uLk4db2KPtc2vO4SMqLRydXlEvwqlbzdL6B5UN0L\nHmDibf+RpqB5oucUmqY2o4DnUSr32WH0/+rNkcokYQD0zQSjWNwQ4OMmIflxczaP\nXLS/VnjtAgMBAAECggEAJ4k5v50rGyVbKv98Wk5EgicpcahebhKP7C7R3uKi2GWz\npH7De4VVYpz/fjkIsXJYpQJswGbo+Lij67+ZEEb6Wp54Bn/KoMC4lMm2ugdPWdM6\n1yh+A3D5/k7WZwosnQdg5tLnIvQMVOrxty1kgt6hSPZsNt07bEuTZ+OEfz5uLvxM\ntyWUNrt1F3cs0xFDr4rrXFGBJs8ej3Oh2dgeXvWdBTyRkhbj+TUkROmn0Jxx4c/H\nBiTa1WKtQMm8+eWarbT7bGs/tLlDJ4uKlnk4cbHPb04XBcYDlB1He8w7aucq9Z9z\nXJcg6UBiUkT7gCS0V4VPtrcw7HwrrbbQiOEm0d4srQKBgQDH/3fFJvskyX0r54T1\n6F7qexUIsKDXSfyh2zhAZmygjWpjI795Jn0NYtE7hCxibI+iemXaj/FuNpD6/JoD\nQMXyma5sJdJompRB7JhpGG5WSyGvUhCgM89q6DDJ5TU9IogMQ9cnznShX1WHkqGD\nQRrI2vaCVaG4MTmaqLd384ck8wKBgQDAgGILhfneknbllzYNXAlIsS223rQ/oVD+\nopVXip7nYwpD/QMY2Do32tQz9Slq5X2T0cjlM3RQbBKdXOHlObHtAHAHLl4gXdPT\n+669yDY8NgxQgTLGZK54pFIRMscDh7CfpJx5O4KPqAGn7w6J5PllEQ13ANW4MjxW\n23YnoxjinwKBgAOGUhMMa9KrJmSWsPYwgTO6tZUwn7ULncMwfN5Nr85oj55tq9sz\nvXJ18mANJUcayLFBXPgsH0Ik/gseVoyGILb01GkdhYbIaqJ6y/jWMGOe8VoIpThd\nkWM98lYsjvKj4CfvLiSKc+3AI16/S89nX1R4321OmwoG/A/ot0sK5K/XAoGBAIj1\nDkyKhmrfI65XNcKtf4FzZUXdDrrSp9BylfQRkNqpMS2L/j8X39vLWfyZaV0/Z2fa\n8qZ3RELPkTLaWXF/6eHn1MyXJaq7drE0OG+X2VZfUcWZFinmiecVaboIuWT+jiAW\nuqjaORrB+mOjhmF/Qhyw1DadpnCFdT6Kp3at6E+bAoGBAJB7tSi0p3Y849BzNXoS\n6xVl/S/VlxRIsfgdE+L5OWqO6/5GOdLapPcGw1GkDx7RaCSXS+fewqTesuFZ8yvV\naBB7EOVLNjq4lqlyCbFmDrRswtDo1Y21ABo8Xh5ZW4+P1vQoy60UH7jEtDp05Y2C\n5M6RdpkGaxQoP8BDkggUxBJ2\n-----END PRIVATE KEY-----\n",
    }),
});

export const db = getFirestore();
