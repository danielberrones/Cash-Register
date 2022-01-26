var Stack = function() {
    this.count = 0;
    this.storage = {};

    // push
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // pop
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // size
    this.size = function() {
        return this.count;
    }

    // peek
    this.peek = function() {
        return this.storage[this.count - 1];
    }
}

let myStack = new Stack();
myStack.push(15);
// console.log(myStack.size())
myStack.push(true)
myStack.push('alpha')
myStack.push(683)
myStack.push(undefined)
myStack.push([])


// console.log(myStack.storage)
// console.log(myStack.pop())
// myStack.pop()
console.log(myStack.storage)


