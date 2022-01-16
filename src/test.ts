import {sayHello} from "./index";

describe.skip("SayHello", () => {
    it('should greet benji', () => {
        expect(sayHello("Benji")).toBe("Hello Benji")
    })
})