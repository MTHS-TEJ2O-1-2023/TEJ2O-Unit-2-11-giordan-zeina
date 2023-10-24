/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Giordan Zeina
 * Created on: Oct 2023
 * This program on "start", generate 2 random integers from 0 to 99
 * on button "A", show the 1st number
 * on button "B", show the 2nd number
 * on "shake", show either:
 * 1st < 2nd
 * 1st > 2nd
*/

// Variables
const randomNumberOne: number = randint(0, 99)
const randomNumberTwo: number = randint(0, 99)

// Clean up
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  basic.showString('#1:')
  basic.showNumber(randomNumberOne)
  basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  basic.showString('#2:')
  basic.showNumber(randomNumberTwo)
  basic.showIcon(IconNames.Happy)
})

// input
input.onGesture(Gesture.Shake, function () {
  basic.clearScreen()

  // output
  if (randomNumberOne < randomNumberTwo) {
    basic.showNumber(randomNumberOne)
    basic.showString('<')
    basic.showNumber(randomNumberTwo)
    basic.showIcon(IconNames.Sad)
  } else {
    basic.showNumber(randomNumberOne)
    basic.showString('>')
    basic.showNumber(randomNumberTwo)
    basic.showIcon(IconNames.Sad)
}
})
