const log = require("./logDonkey.js");

describe("Testing setLogLevel!", function(){
    it("should default to ERROR logLevel", function(){
        expect(log.getLogLevel()).toBe(log.levels.ERROR)
    })

    it("should be able to set logLevels to different levels", function(){
        Object.keys(log.levels).forEach(function checkSetLogLevel(level){
            log.setLogLevel(log.levels[level])
            expect(log.getLogLevel()).toBe(log.levels[level])
        })
    })
})

describe("Testing basic logs", function(){
    // it("should log error", function (){
    //     expect(log.error("some stuff in here", "    another thing")).toMatchSnapshot();
    // })
    it("should log warn", function(){
        expect(log.warn("should log warn", "some more things here"));
    })
    it("should log info", function(){
        expect(log.info("logging to info", "some more stuffz" , "\n\n\nmore info here")).toMatchSnapshot();
    })
    it("should log debug", function(){
        expect(log.debug("logging to debug", "some more stuffz" , "\n\nxxx\nmore debug here")).toMatchSnapshot();
    })
})
