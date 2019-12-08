const ERROR = 0;
const WARN = 1;
const INFO = 2;
const DEBUG = 3;

/**
 * logDonkey logs based on a set log level
 * 
 * @method setLogLevel sets the logLevel
 * @method getLogLevel gets the current logLevel
 * @method error logs an error
 * @method WARN logs a warning
 * @method info logs an info message
 * @method debug logs a debug
 */
module.exports = (function logDonkey(){
    let logLevel = ERROR; // default logLevel is ERROR

    const levels = {
        /**
         * ERROR - prints ERROR
         */
        ERROR,
        /**
         * WARN - prints ERROR and WARN
         */
        WARN,
        /**
         * INFO - prints INFO, WARN, and ERROR
         */
        INFO,
        /**
         * DEBUG - prints DEBUG, INFO, WARN, and ERROR 
         */
        DEBUG
    }

    return {
        setLogLevel,
        getLogLevel,
        levels: Object.freeze(levels), // freezing levels so that they can't be modified
        error,
        warn,
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
     * @return logLevel as a number
     */
    function setLogLevel(LEVEL = 0){
        logLevel = LEVEL;

        info("setting logLevel to ", Object.keys(levels)[LEVEL])

        return logLevel;
    }

    /**
     * getLogLevel return the logLevel that is currently set.
     * @return {number} logLevel as a number
     */
    function getLogLevel(){
        return logLevel
    }

    /**
     * error logs an error if the logLevel is set to log errors
     * 
     * @param  {...any} args -- whatever gets passed will be logged as the error
     * @return {string} arguments passed in with error concatenated
     */
    function error(...args){
        if(logLevel < ERROR)
            return

        console.error("error: ", ...args)
        return `error: ${[...args]}`
    }

    /**
     * warn logs a warning if the logLevel is set to log warnings
     * 
     * @param  {...any} args -- whatever gets passed in will be logged as a warning
     * @return {string} arguments passed in with warn concatenated
     */
    function warn(...args){
        if(logLevel < WARN)
            return

        console.warn("warn: ", ...args)
        return `warn: ${[...args]}`
    }

    /**
     * info logs as info is logLevel is set to log info
     * 
     * @param  {...any} args -- whatever gets passed in will be logged as info
     * @return {string} arguments passed in with info concatenated
     */
    function info(...args){
        if(logLevel < INFO)
            return

        console.info("info: ", ...args)
        return `info: ${[...args]}`
    }

    /**
     * debug logs passed in arguments as debug, but only if the logLevel is set to DEBUG
     * 
     * @param  {...any} args -- whatever is passed in will logged as debug
     * @return {string} arguments passed in with debug concatenated
     */
    function debug(...args){
        if(logLevel < DEBUG)
            return

        console.debug("debug: ", ...args)
        return `debug: ${[...args]}`
    }
})()