const time_Elapsed = require('../time_Elapsed.js')
describe("It will compare a particular first timestamp to a second timestamp and return the difference in a readable time as secound",()=>{
    test("test (Mon Aug 10 2020 14:00:00 GMT+0530 - Mon Aug 10 2020 14:00:01 GMT+0530=1 second ago)",()=>{
       expect(time_Elapsed("Mon Aug 10 2020 14:00:00 GMT+0530","Mon Aug 10 2020 14:00:01 GMT+0530")).toBe("1 second ago")
    })
    test("test (Mon Aug 10 2020 14:00:00 GMT+0530 - Mon Aug 10 2020 14:00:20 GMT+0530= 20 seconds ago)",()=>{
        expect(time_Elapsed("Mon Aug 10 2020 14:00:00 GMT+0530","Mon Aug 10 2020 14:00:20 GMT+0530")).toBe("20 seconds ago")
     })
     test("test (Mon Aug 10 2020 14:00:00 GMT+0530 - Mon Aug 10 2020 14:05:00 GMT+0530= 5 minutes ago)",()=>{
        expect(time_Elapsed("Mon Aug 10 2020 14:00:00 GMT+0530","Mon Aug 10 2020 14:05:00 GMT+0530")).toBe("5 minutes ago")
     })
     test("test (Mon Aug 10 2020 14:00:00 GMT+0530 - Mon Aug 10 2020 16:40:00 GMT+0530= 2 hours ago)",()=>{
        expect(time_Elapsed("Mon Aug 10 2020 14:00:00 GMT+0530","Mon Aug 10 2020 16:40:00 GMT+0530")).toBe("2 hours ago")
     })
     test("test (Mon Aug 10 2020 14:00:00 GMT+0530 - Tue Aug 11 2020 14:01:00 GMT+0530 = 1 day ago)",()=>{
        expect(time_Elapsed("Mon Aug 10 2020 14:00:00 GMT+0530","Tue Aug 11 2020 14:01:00 GMT+0530")).toBe("1 day ago")
     })
     test("test (Mon Aug 10 2020 14:00:00 GMT+0530 - Wed Aug 12 2020 14:01:00 GMT+0530 = 2 days ago)",()=>{
        expect(time_Elapsed("Mon Aug 10 2020 14:00:00 GMT+0530","Wed Aug 12 2020 14:01:00 GMT+0530")).toBe("2 days ago")
     })
     
     
})