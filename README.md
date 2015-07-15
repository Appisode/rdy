# API #
```javascript
var rdy = require('rdy')(2, function() {
    console.log("Everything's initialized!");
    http.listen(80);
});

// Assume these are defined and take a callback function    
openDatabase(rdy);
prepareCache(rdy);
```