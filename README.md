# logDonkey
a simple logging tool that logs based on a set log level

### install
``` npm i log-donkey ```

### example

```javascript
const log = require("log-donkey");

// set the log level
log.setLogLevel(log.levels.DEBUG);

// log an error
log.error("this is an error message");

// log a warning
log.warn("this is a warning message");

// log info
log.info("logging some info");

// log a debug message
log.debug("this is a debug message");
```
### es6 module example

```javascript
import log from "log-donkey"

log.setLogLevel(log.levels.DEBUG);

log.debug("some debug message here")

```

### LogLevels
```
ERROR - prints ERROR

WARN - prints ERROR and WARN

INFO - prints INFO, WARN, and ERROR

DEBUG - prints DEBUG, INFO, WARN, and ERROR
```