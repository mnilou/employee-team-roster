const Employee = require("./Employee")

// @ponicode
describe("getName", () => {
    let inst

    beforeEach(() => {
        inst = new Employee("Jean-Philippe", "a1969970175", "bed-free@tutanota.de")
    })

    test("0", () => {
        let callFunction = () => {
            inst.getName()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getId", () => {
    let inst

    beforeEach(() => {
        inst = new Employee("Michael", "a1969970175", "something@example.com")
    })

    test("0", () => {
        let callFunction = () => {
            inst.getId()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getEmail", () => {
    let inst

    beforeEach(() => {
        inst = new Employee("Michael", 12345, "bed-free@tutanota.de")
    })

    test("0", () => {
        let callFunction = () => {
            inst.getEmail()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getRole", () => {
    let inst

    beforeEach(() => {
        inst = new Employee("Edmond", 56784, "bed-free@tutanota.de")
    })

    test("0", () => {
        let callFunction = () => {
            inst.getRole()
        }
    
        expect(callFunction).not.toThrow()
    })
})
