const logDonkey = require("./logDonkey.js");

describe("Testing setLogLevel!", function(){
    it("should default to ERROR logLevel", function(){
        expect(logDonkey.getLogLevel()).toBe(logDonkey.levels.ERROR)
    })

    it("should be able to set logLevels to different levels", function(){
        Object.keys(logDonkey.levels).forEach(function checkSetLogLevel(level){
            logDonkey.setLogLevel(logDonkey.levels[level])
            expect(logDonkey.getLogLevel()).toBe(logDonkey.levels[level])
        })
    })
})
