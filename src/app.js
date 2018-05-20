require('material-design-lite/material.min.css');
require('material-design-lite/material.min.js');
require('./app.css');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function() { console.log('Service Worker registered') });
}