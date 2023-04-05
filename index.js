function receivesAFunction(spy) {
    return spy();
}

const addition = receivesAFunction((name) => 
console.log(`Good morning ${name}`)
);

function returnsANamedFunction() {
    return function introduction () {
        console.log('My name is Alex');
    };
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log(`Good morning`)
    }
}