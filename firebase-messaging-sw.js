// Firebase Messaging Service Worker
// פלס"מ לוגיסטיקה — גדוד 1824

importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCLm8QoQmms1odVF6QwT5byZNdMgbkEeqc",
  authDomain: "plasam-1824.firebaseapp.com",
  projectId: "plasam-1824",
  storageBucket: "plasam-1824.firebasestorage.app",
  messagingSenderId: "869600923706",
  appId: "1:869600923706:web:0f96630661f566b4ede503"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('Background message:', payload);
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title || 'פלס"מ לוגיסטיקה', {
    body: body || '',
    icon: icon || '/icon-192.png',
    badge: '/icon-192.png',
    dir: 'rtl',
    lang: 'he',
    tag: payload.data?.tag || 'palsam',
    data: payload.data || {},
    actions: [
      { action: 'open', title: 'פתח' }
    ]
  });
});

// Handle notification click
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://palsamyishai.github.io/palsam-logistics')
  );
});
