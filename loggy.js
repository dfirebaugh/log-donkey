const ERROR = 0;
const WARNING = 1;
const INFO = 2;
const DEBUG = 3;

/**
 * loggy logs based on a set log level
 * 
 * @method setLogLevel sets the logLevel
 * @method getLogLevel gets the current logLevel
 * @method error logs an error
 * @method warning logs a warning
 * @method info logs an info message
 * @method debug logs a debug
 */
module.exports = (function loggy(){
    let logLevel = ERROR;

    const levels = {
        ERROR,
        WARNING,
        INFO,
        DEBUG
    }

    return {
        setLogLevel,
        getLogLevel,
        levels,
        error,
        warning,
        debug,
        info
    }

    function setLogLevel(LEVEL = 0){
        logLevel = LEVEL;

        info("setting logLevel to ", Object.keys(levels)[LEVEL])

        return logLevel;
    }

    function getLogLevel(){
        return logLevel
    }

    function error(...args){
        if(loglevel < ERROR)
            return

        return console.error.bind(global.console)
    }

    function warning(...args){
        if(logLevel < WARNING)
            return

        console.warning("warning: ", ...args)
    }

    function info(...args){
        if(logLevel < INFO)
            return function (){}

        return console.info.bind(global.console)
    }

    function debug(...args){
        if(logLevel < DEBUG)
            return

        console.debug("debug: ", ...args)
    }
})()