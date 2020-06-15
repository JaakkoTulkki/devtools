require('./app');

if (module.hot) {
    module.hot.accept('./app.js', function() {
        require('./app');
    });
}

