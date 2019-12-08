const loggy = require("./loggy.js");

describe("Testing setLogLevel!", function(){
    it("should default to ERROR logLevel", function(){
        expect(loggy.getLogLevel()).toBe(loggy.levels.ERROR)
    })

    it("should be able to set logLevels to different levels", function(){
        Object.keys(loggy.levels).forEach(function checkSetLogLevel(level){
            loggy.setLogLevel(loggy.levels[level])
            expect(loggy.getLogLevel()).toBe(loggy.levels[level])
        })
    })
})
