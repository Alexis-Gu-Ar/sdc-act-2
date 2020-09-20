var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Object.defineProperty(Animal.prototype, "firstName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "greeting", {
        get: function () {
            return "hello my name is " + this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, isEnglish) {
        var _this = _super.call(this, name) || this;
        _this.isEnglish = isEnglish;
        return _this;
    }
    Cat.prototype.makeSound = function () {
        console.log((this.isEnglish ? "meow " : "miiau ") + this.greeting);
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("guau " + this.greeting);
    };
    return Dog;
}(Animal));
var myCat = new Cat("Tom", false);
var myDog = new Dog("Doggy");
function makeAnimalSound(animal) {
    animal.makeSound();
}
makeAnimalSound(myCat);
makeAnimalSound(myDog);
//# sourceMappingURL=main.js.map