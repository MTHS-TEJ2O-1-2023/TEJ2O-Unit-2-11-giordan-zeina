/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Oct 2023
 * This program ...
*/

let randomNumberOne: number = randint(0, 99)
let randomNumberTwo: number = randint(0, 99)

// Clean up
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
  basic.showNumber(randomNumberOne)
})

input.onButtonPressed(Button.B, function() {
  basic.showNumber(randomNumberTwo)
})

input.onGesture(Gesture.Shake, function() {
  
if (true) {
    
} else {
    
}
})  