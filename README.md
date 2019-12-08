# logDonkey
a simple logging tool that logs based on a set log level

### install
``` npm i log-donkey ```

### example

```javascript
// set the log level
logDonkey.setLogLevel(logDonkey.levels[DEBUG]);

// log an error
logDonkey.error("this is an error message");

// log a warning
logDonkey.warning("this is a warning message");

// log info
logDonkey.info("logging some info");

// log a debug message
logDonkey.debug("this is a debug message");
```

### LogLevels
```
ERROR - prints ERROR

WARN - prints ERROR and WARN

INFO - prints INFO, WARN, and ERROR

DEBUG - prints DEBUG, INFO, WARN, and ERROR
```