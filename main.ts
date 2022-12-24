

//testet, welcher Button gedrückt wurde

basic.forever(function() {
    if (input.buttonIsPressed(Button.AB)) { //wenn A+B gedrückt wurde (zusammen)
        basic.clearScreen();
        basic.showString("A+B");
    } else if (input.buttonIsPressed(Button.A)) { //wenn A gedrückt wurde
        basic.clearScreen();
        basic.showString("A");
    } else if (input.buttonIsPressed(Button.B)) { //wenn B gedrückt wurde
        basic.clearScreen();
        basic.showString("B");
    }
})
