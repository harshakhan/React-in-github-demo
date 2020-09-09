const convert = require('../convert.js')
describe("function which will convert numbers and make it into a string with ₹ with comma separated values",()=>{
    test("test (1.655 equal to ₹ 1.7)",()=>{
       expect(convert("1.655")).toBe("₹1.7")
    })
    test("test (1.53 equal to ₹ 1.5)",()=>{
        expect(convert("1.53")).toBe("₹1.5")
     })
     test("test (1.33 equal to ₹ 1.3)",()=>{
        expect(convert("1.33")).toBe("₹1.3")
     })
     test("test (1.45 equal to ₹ 1.5)",()=>{
        expect(convert("1.45")).toBe("₹1.5")
     })
     test("test (1000 equal to ₹ 1,000)",()=>{
        expect(convert("1000")).toBe("₹1,000")
     })
     test("test (10000 equal to ₹ 10,000)",()=>{
        expect(convert("10000")).toBe("₹10,000")
     })
     test("test (100000 equal to ₹ 1,00,000)",()=>{
      expect(convert("100000")).toBe("₹1,00,000")
   })
   test("test (10000000 equal to ₹ 1,00,00,000)",()=>{
      expect(convert("10000000")).toBe("₹1,00,00,000")
   })
     
})