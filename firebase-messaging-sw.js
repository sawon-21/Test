importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBC07Wifgkr4Cpu2Wj06OmfqYqxnDXWGD4",
  authDomain: "cricket-15dee.firebaseapp.com",
  projectId: "cricket-15dee",
  messagingSenderId: "739754695271",
  appId: "1:739754695271:web:9b08ccac464ea754a792c2",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const { title, body, icon } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon
  });
});