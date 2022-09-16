function parent() {
    let message = 'Hello world';

    function child() {
        console.log(message);
    }

    // pass function back but don't execute yet
    return child;
}

// assign a var to the parent function (like instantiating an object)
let myFunction = parent();

// now execute the function we set up
myFunction();
myFunction();