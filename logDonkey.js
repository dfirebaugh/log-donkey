const ERROR = 0;
const WARNING = 1;
const INFO = 2;
const DEBUG = 3;

/**
 * logDonkey logs based on a set log level
 * 
 * @method setLogLevel sets the logLevel
 * @method getLogLevel gets the current logLevel
 * @method error logs an error
 * @method warning logs a warning
 * @method info logs an info message
 * @method debug logs a debug
 */
module.exports = (function logDonkey(){
    let logLevel = ERROR; // default logLevel is ERROR

    const levels = {
        ERROR,
        WARNING,
        INFO,
        DEBUG
    }

    return {
        setLogLevel,
        getLogLevel,
        levels: Object.freeze(levels), // freezing levels so that they can't be modified
        error,
        warning,
        debug,
        info
    }

    /**
     * setLogLevel sets the logLevel for logDonkey
     * 
     * @param {number} LEVEL 
     * @example
     * 
     * logDonkey.setLogLevel(logDonkey.levels["DEBUG"])
     * 
     * @returns logLevel as a number
     */
    function setLogLevel(LEVEL = 0){
        logLevel = LEVEL;

        info("setting logLevel to ", Object.keys(levels)[LEVEL])

        return logLevel;
    }

    /**
     * getLogLevel returns the logLevel that is currently set.
     * @returns logLevel as a number
     */
    function getLogLevel(){
        return logLevel
    }

    /**
     * error logs an error if the logLevel is set to log errors
     * 
     * @param  {...any} args -- whatever gets passed will be logged as the error
     */
    function error(...args){
        if(loglevel < ERROR)
            return

        return console.error.bind(global.console)
    }

    /**
     * warning logs a warning if the logLevel is set to log warnings
     * 
     * @param  {...any} args -- whatever gets passed in will be logged as a warning
     */
    function warning(...args){
        if(logLevel < WARNING)
            return

        console.warning("warning: ", ...args)
    }

    /**
     * info logs as info is logLevel is set to log info
     * 
     * @param  {...any} args -- whatever gets passed in will be logged as info
     */
    function info(...args){
        if(logLevel < INFO)
            return

        console.info("info: ", ...args)
    }

    /**
     * debug logs passed in arguments as debug, but only if the logLevel is set to DEBUG
     * 
     * @param  {...any} args -- whatever is passed in will logged as debug
     */
    function debug(...args){
        if(logLevel < DEBUG)
            return

        console.debug("debug: ", ...args)
    }
})()