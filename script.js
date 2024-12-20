
let sum = 0;

const ladder = {
    up: function () { // підніматиме вас на одну сходинку
        sum += 1;
        // return sum;
        return this;

    },
    down: function () { // опускатиме вас на одну сходинку
        sum -= 1;
        // return sum;
        return this;

    },
    showStep: function () { // показує поточну сходинку
        console.log(sum);
        // console.log(this);

    }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

ladder.up().up().down().showStep();