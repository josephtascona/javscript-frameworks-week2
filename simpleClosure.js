// use a closure to control scope of var (like Java Protected var)
function parent() {
    let message = "Hello world";

    function child() {
        console.log(message);
    }

    // call the child
    child();
}

// call the parent
parent();
// console.log(message); => returns err as var only lives inside parent()

