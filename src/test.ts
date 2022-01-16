import {sayHello} from "./index";

describe("SayHello", () => {
    it('should greet benji', () => {
        expect(sayHello("Benji")).toBe("Hello Benji")
    })
})