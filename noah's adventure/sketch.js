let timer = 0

let optionOne = true
let optionTwo = false

let tint01 = 0
let tint02 = 0
let tint2551 = 255
let tint2552 = 255
let tint2553 = 255

let chap1Page = 2

function preload() {

  //load backgrounds
  bedroom = loadImage('bedroom.png')
  house_kitchen = loadImage('house_kitchen.png')
  bathroom = loadImage('bathroom.jpg')
  hall = loadImage('hall.jpg')
  crosswalk = loadImage('crosswalk.jpg')
  panda = loadImage('panda.png')
  panda_kitchen = loadImage('panda_kitchen.png')


  //load sprites
  peanut = loadImage('peanut.png')
  noah = loadImage('noah.png')
  noah_panda = loadImage('noah_panda.png')
  chef = loadImage('chef.png')
  dragon_key = loadImage('dragon_key.jpg')

  font = loadFont('font.ttf')

}


function setup() {
  createCanvas(1000, 700)
  textFont(font)
}

function draw() {

  background(0)

///*
  if (chap1Page === 0) {

    if (frameCount % 30 == 0 ) {
      timer = timer + 1
    }

    if (timer > 4) {
      tint01 += 2
      tint(255, tint01)
      imageMode(CENTER)
      image(peanut, width/2, height/3.77, peanut.width/5, peanut.height/5)
    }

    if (timer > 8) {
      tint02 += 2
      stroke(255, 255, 255, tint02)
      strokeWeight(8)
      fill(0)
      rect(150, 400, 700, 300)
    }

    if (timer > 14) {
      bigtext()
      text("Do you eat the peanut butter?", 163, 440)
    }

    if (timer > 16) {
      nametext()
      text("Use arrow keys to \nselect and press \nenter", 50, 50)

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Yes", 163, 600)

        bigtext()
        text("- No", 163, 640)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

        if (keyIsDown(ENTER)) {
          timer = 0
          tint01 = 0
          tint02 = 0
          chap1Page = 1
        }

      }

      if (optionTwo === true) {

        bigtext()
        text("- Yes", 163, 600)

        fill(255, 255, 0)
        text("- No", 163, 640)

          if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
          }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            tint01 = 0
            tint02 = 0
            chap1Page = 2
            timer = 0
          }
        }
      }
    }

    if (chap1Page === 1) {

      if (frameCount % 30 == 0) {
          timer = timer + 1
        }

        tint2551 -= 2
        tint(255, tint2551)
        imageMode(CENTER)
        image(peanut, width/2, height/3.77, peanut.width/5, peanut.height/5)

        tint2552 -= 2
        stroke(255, 255, 255, tint2552)
        strokeWeight(8)
        fill(0)
        rect(150, 400, 700, 300)

        bigtext()
        tint2553 -= 2
        fill(255, 255, 255, tint2553)
        text("Yum.", 163, 440)

        if (timer > 5) {
          tint01 += 1.5
          tint(255, tint01)
          imageMode(CORNER)
          image(bedroom, 0, 0, bedroom.width*1.5, bedroom.height*1.5)

        }

        if (timer > 13) {
         textbox()
        }

        if (timer > 15 && timer < 24) {
          bigtext()
          text("You wake up in your bedroom to \nthe sound of an alarm clock.", 163, 440)
        }

        if (timer > 18 && timer < 24) {
          text("You’re tired from last night’s \npasta-eating frenzy.", 163, 500)
        }

        if (timer > 21 && timer < 24) {
          text("You remember it’s your first \nday working at Panda.", 163, 560)
        }

        if (timer > 24) {
          bigtext()
          text("Hit snooze?", 163, 440)
        }

        if (timer > 27) {

          if (optionOne === true) {

            fill(255, 255, 0)
            text("- Yes", 163, 600)

            bigtext()
            text("- No", 163, 640)

            if (keyIsDown(DOWN_ARROW)) {
              optionOne = false
              optionTwo = true
            }

            if (keyIsDown(ENTER)) {
              timer = 0
              tint2551 = 255
              tint2552 = 255
              tint2553 = 255
              tint01 = 0
              chap1Page += 2
            }

          }

          if (optionTwo === true){

            text("- Yes", 163, 600)

            fill(255, 255, 0)
            text("- No", 163, 640)

            if (keyIsDown(UP_ARROW)) {
              optionOne = true
              optionTwo = false
            }

            if (keyIsDown(ENTER)) {
              optionOne = true
              optionTwo = false
              tint2551 = 255
              tint2552 = 255
              tint2553 = 255
              tint01 = 0
              chap1Page += 3
              timer = 0
            }

          }
        }
    }

  if (chap1Page === 2) {

    if (frameCount % 30 == 0 ) {
      timer = timer + 1
    }

    tint2551 -= 2
    tint(255, tint2551)
    imageMode(CENTER)
    image(peanut, width/2, height/3.77, peanut.width/5, peanut.height/5)

    tint2552 -= 2
    stroke(255, 255, 255, tint2552)
    strokeWeight(8)
    fill(0)
    rect(150, 400, 700, 300)

    bigtext()
    tint2553 -= 2
    fill(255, 255, 255, tint2553)
    text("Have fun suffering from protein \ndeficiency, loser.", 163, 440)

    if (timer > 5) {
      imageMode(CORNER)
      tint(255, 255)
      image(bedroom, 0, 0, bedroom.width*1.5, bedroom.height*1.5)
    }

    if (timer > 6) {
     textbox()
    }

    if (timer > 8 && timer < 18) {
      bigtext()
      text("You wake up in a cold sweat.", 163, 440)
    }

    if (timer > 11 && timer < 18) {
      text("You’re tired from last night’s \npasta-eating frenzy.", 163, 480)
    }

    if (timer > 14 && timer < 18) {
      text("You remember it’s your first day \nworking at Panda.", 163, 550)
    }

    if (timer > 18) {
      bigtext()
      text("Hit snooze?", 163, 440)
    }

    if (timer > 21) {

      if (optionOne === true) {

        fill(255, 255, 0)
        text("- Yes", 163, 600)

        bigtext()
        text("- No", 163, 640)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

        if (keyIsDown(ENTER)) {
          tint2551 = 255
          tint2552 = 255
          tint2553 = 255
          chap1Page += 1
          timer = 0
        }

      }

      if (optionTwo === true){

        text("- Yes", 163, 600)

        fill(255, 255, 0)
        text("- No", 163, 640)

        if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
        }

        if (keyIsDown(ENTER)) {
          optionOne = true
          optionTwo = false
          chap1Page += 2
          timer = 0
        }

      }

    }

  }

  if (chap1Page === 3) {
    if (frameCount % 30 == 0 ) {
      timer = timer + 1
    }

    image(bedroom, 0, 0, bedroom.width*1.5, bedroom.height*1.5)
    textbox()

    if (timer > 1){
      bigtext()
      text("You lay awake in bed anyways because \nyou’re nervous for the first shift.", 163, 440)
    }

    if (timer > 7){
      image(house_kitchen, 0, 0, house_kitchen.width*1.55, house_kitchen.height*1.55)
      textbox()
    }

    if (timer > 9){
      bigtext()
      text("You stand in front of the fridge, looking \nfor breakfast.", 163, 440)
    }

    if (timer > 13) {
      text("What will you choose?", 50, 450)
    }

    if (timer > 16){

      if (optionOne === true){
        fill(255, 255, 0)
        text("- Cold meatloaf", 50, 520)

        bigtext()
        text("- Shredded cheese", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

        if (keyIsDown(ENTER)) {
          chap1Page += 2
          timer = 0
        }

      }

      if (optionTwo === true) {
        text("- Cold meatloaf", 50, 520)
        fill(255, 255, 0)
        text("- Shredded cheese", 50, 560)

        if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
        }

        if (keyIsDown(ENTER)) {
          optionOne = true
          optionTwo = false
          chap1Page += 3
          timer = 0
        }
      }
    }
  }

  if (chap1Page === 4) {

    if (frameCount % 30 == 0 ) {
      timer = timer + 1
    }

    image(bedroom, 0, 0, bedroom.width*1.5, bedroom.height*1.5)
    textbox()

    if (timer > 1){
      bigtext()
      text("Good choice. You put on your red \nuniform and get ready to face the day.", 163, 440)
    }

    if (timer > 7){
      image(house_kitchen, 0, 0, house_kitchen.width*1.55, house_kitchen.height*1.55)
      textbox()
    }

    if (timer > 9){
      bigtext()
      text("You stand in front of the fridge, looking \nfor breakfast.", 163, 440)
    }

    if (timer > 13) {
      text("What will you choose?", 50, 450)
    }

    if (timer > 16){

      if (optionOne === true){
        fill(255, 255, 0)
        text("- Cold meatloaf", 50, 520)

        bigtext()
        text("- Shredded cheese", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

        if (keyIsDown(ENTER)) {
          chap1Page += 1
          timer = 0
        }

      }

      if (optionTwo === true) {
        text("- Cold meatloaf", 50, 520)
        fill(255, 255, 0)
        text("- Shredded cheese", 50, 560)

        if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
        }

        if (keyIsDown(ENTER)) {
          optionOne = true
          optionTwo = false
          chap1Page += 2
          timer = 0
        }
      }
    }
  }

  if (chap1Page === 5) {

    if (frameCount % 30 == 0 ) {
      timer = timer + 1
    }

    image(house_kitchen, 0, 0, house_kitchen.width*1.55, house_kitchen.height*1.55)
    textbox()

    if (timer > 1) {
      bigtext()
      text("It goes perfectly with your coffee. You \nbriefly consider becoming a chef.", width/3.95, height/1.66)
    }

    if (timer > 7) {
      image(bathroom, 0, 0, bathroom.width*1.5, bathroom.height*1.5)
      textbox()
    }

    if (timer > 8) {
      bigtext()
      text("After your healthy breakfast, you brush  \nyour teeth.", width/3.95, height/1.66)
    }

    if (timer > 12) {
      text("Do you floss?", 50, 450)
    }

    if (timer > 15) {

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Yes", 50, 520)

        bigtext()
        text("- No", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

        if (keyIsDown(ENTER)) {
          chap1Page = 7
          timer = 0
        }

      }

      if (optionTwo === true) {

        bigtext()
        text("- Yes", 50, 520)

        fill(255, 255, 0)
        text("- No", 50, 560)

          if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
          }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            chap1Page = 8
            timer = 0
          }
        }
    }
  }

  if (chap1Page === 6) {

    if (frameCount % 30 == 0 ) {
      timer = timer + 1
    }

    image(house_kitchen, 0, 0, house_kitchen.width*1.55, house_kitchen.height*1.55)
    textbox()

    if (timer > 1) {
      bigtext()
      text("The mozzarella mixed with cheddar makes \nfor a perfect blend. You consider packing \nsome for lunch too.", width/3.95, height/1.66)
    }

    if (timer > 8) {
      image(bathroom, 0, 0, bathroom.width*1.5, bathroom.height*1.5)
      textbox()
    }

    if (timer > 9) {
      bigtext()
      text("After your healthy breakfast, you brush  \nyour teeth.", width/3.95, height/1.66)
    }

    if (timer > 13) {
      text("Do you floss?", 50, 450)
    }

    if (timer > 15) {

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Yes", 50, 520)

        bigtext()
        text("- No", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

        if (keyIsDown(ENTER)) {
          chap1Page = 7
          timer = 0
        }

      }

      if (optionTwo === true) {

        bigtext()
        text("- Yes", 50, 520)

        fill(255, 255, 0)
        text("- No", 50, 560)

          if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
          }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            chap1Page = 8
            timer = 0
          }
        }
    }
  }

  if (chap1Page === 7) {

    if (frameCount % 30 == 0 ) {
      timer = timer + 1
    }

    image(bathroom, 0, 0, bathroom.width*1.5, bathroom.height*1.5)
    textbox()

    if (timer > 1) {
      bigtext()
      text("9/10 dentists now approve of you. The \nother one is seeking new ways to give you \ngingivitis.", width/3.95, height/1.66)
    }

    if (timer > 9) {
      image(hall, 0, 0, hall.width*1.8, hall.height*1.8)
      textbox()
    }

    if (timer > 10) {
      bigtext()
      text("At the door, you look at two pairs of \nshoes.", width/3.95, height/1.66)
    }

    if (timer > 14) {
      text("Which do you wear?", 45, 450)
    }

    if (timer > 16) {

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Black Air Force Ones", 45, 520)

        bigtext()
        text("- Clown shoes", 45, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

        if (keyIsDown(ENTER)) {
          chap1Page = 9
          timer = 0
        }

      }

      if (optionTwo === true) {

        bigtext()
        text("- Black Air Force Ones", 45, 520)

        fill(255, 255, 0)
        text("- Clown shoes", 45, 560)

          if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
          }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            chap1Page = 10
            timer = 0
          }
        }
    }
  }

  if (chap1Page === 8) {

    if (frameCount % 30 == 0 ) {
      timer = timer + 1
    }

    image(bathroom, 0, 0, bathroom.width*1.5, bathroom.height*1.5)
    textbox()

    if (timer > 1) {
      bigtext()
      text("A dentist appears behind you in the \nmirror. “You’re bleeding because you \ndon’t floss” he says as he roundhouse \nkicks you in the mouth. Ouch!", width/3.95, height/1.66)
    }

    if (timer > 11) {
      image(hall, 0, 0, hall.width*1.8, hall.height*1.8)
      textbox()
    }

    if (timer > 12) {
      bigtext()
      text("At the door, you look at two pairs of \nshoes.", width/3.95, height/1.66)
    }

    if (timer > 16) {
      text("Which do you wear?", 50, 450)
    }

    if (timer > 19) {

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Black Air Force Ones", 50, 520)

        bigtext()
        text("- Clown shoes", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

        if (keyIsDown(ENTER)) {
          chap1Page = 9
          timer = 0
        }

      }

      if (optionTwo === true) {

        bigtext()
        text("- Black Air Force Ones", 50, 520)

        fill(255, 255, 0)
        text("- Clown shoes", 50, 560)

          if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
          }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            chap1Page = 10
            timer = 0
          }
        }
    }
  }

  if (chap1Page === 9) {

    if (frameCount % 30 == 0 ) {
      timer = timer + 1
    }

    image(hall, 0, 0, hall.width*1.8, hall.height*1.8)
    textbox()

    if (timer > 1) {
      bigtext()
      text("And you want to make a good impression?", width/3.95, height/1.66)
    }

    if (timer > 10) {
      image(crosswalk, 0, 0, crosswalk.width/1.3, crosswalk.height/1.3)
      textbox()
    }

    if (timer > 11 && timer < 23) {
      bigtext()
      text("It’s now 8:10 and your training begins at \n8:15. you’re still quite far from the \nrestaurant. You’re approaching a stop \nsign with a crosswalk. An old woman is \ncrossing.", width/3.95, height/1.66)
    }

    if (timer > 23) {
      bigtext()
      text("Do you speed through the sign?", 50, 370)
    }

    if (timer > 26) {

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Yes", 50, 520)

        bigtext()
        text("- No", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

        if (keyIsDown(ENTER)) {
          chap1Page = 11
          timer = 0
        }

      }

      if (optionTwo === true) {

        bigtext()
        text("- Yes", 50, 520)

        fill(255, 255, 0)
        text("- No", 50, 560)

          if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
          }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            chap1Page = 12
            timer = 0
          }
        }
    }
  }

  if (chap1Page === 10) {

    if (frameCount % 30 == 0 ) {
      timer = timer + 1
    }

    image(hall, 0, 0, hall.width*1.8, hall.height*1.8)
    textbox()

    if (timer > 1) {
      bigtext()
      text("These ones suit you quite nicely.", width/3.95, height/1.66)
    }

    if (timer > 10) {
      image(crosswalk, 0, 0, crosswalk.width/1.3, crosswalk.height/1.3)
      textbox()
    }

    if (timer > 11 && timer < 23) {
      bigtext()
      text("It’s now 8:10 and your training begins at \n8:15. you’re still quite far from the \nrestaurant. You’re approaching a stop \nsign with a crosswalk. An old woman is \ncrossing.", width/3.95, height/1.66)
    }

    if (timer > 23) {
      bigtext()
      text("Do you speed through the sign?", 50, 370)
    }

    if (timer > 26) {

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Yes", 50, 520)

        bigtext()
        text("- No", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

        if (keyIsDown(ENTER)) {
          chap1Page = 11
          timer = 0
        }

      }

      if (optionTwo === true) {

        bigtext()
        text("- Yes", 50, 520)

        fill(255, 255, 0)
        text("- No", 50, 560)

          if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
          }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            chap1Page = 12
            timer = 0
          }
        }
    }
  }


  if (chap1Page === 11) {

    if (frameCount % 30 == 0) {
        timer = timer + 1
      }

    image(crosswalk, 0, 0, crosswalk.width/1.3, crosswalk.height/1.3)
    textbox()

    if (timer > 1) {
      bigtext()
      text("Granny Smith had a heart attack because \nof your speed. Have fun living that one \ndown.", width/3.95, height/1.66)
    }

    if (timer > 8) {
      image(panda, 0, 0, panda.width/1.05, panda.height/1.05)
      textbox()
    }

    if (timer > 9 && timer < 18) {
      bigtext()
      text("You’re finally at Panda.", width/3.95, height/1.66)
    }

    if (timer > 13 && timer < 18) {
      text("You are approached by an unknown \nemployee.", 45, 410)
    }

    if (timer > 18 && timer < 22) {

      nameboxLeft()

      nametext()
      text("???", 45, 325)

      //dialouge
      bigtext()
      text("Hi. You must be the new cashier.", width/3.95, height/1.66)
      image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)

    }

    if (timer > 21){

      image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)

      nameboxLeft()

      nametext()
      text("Noah", 45, 325)

      bigtext()
      text("Hi. You must be the new cashier.", width/3.95, height/1.66)
      text("I'm Noah.", 45, 410)

    }

    if (timer > 25){

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Yes, I'm the new employee.", 45, 520)

        bigtext()
        text("- Nope, I just wanted to wear a uniform \nand pretend to work.", 45, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

        if (keyIsDown(ENTER)) {
          chap1Page = 13
          timer = 0
        }

      }

      if (optionTwo === true) {

        bigtext()
        text("- Yes, I'm the new employee.", 45, 520)

        fill(255, 255, 0)
        text("- Nope, I just wanted to wear a uniform \nand pretend to work.", 45, 560)

          if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
          }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            chap1Page =14
            timer = 0
          }

        }
      }
    }

    if (chap1Page === 12) {

      if (frameCount % 30 == 0) {
          timer = timer + 1
        }

      image(crosswalk, 0, 0, crosswalk.width/1.3, crosswalk.height/1.3)
      textbox()

      if (timer > 1) {
        bigtext()
        text("You feel good about following traffic \nlaws. You’re so busy thinking about your \ngood driving habits that you fly through \nthe next sign.", width/3.95, height/1.66)
      }

      if (timer > 9) {
        image(panda, 0, 0, panda.width/1.05, panda.height/1.05)
        textbox()
      }

      if (timer > 10 && timer < 19) {
        bigtext()
        text("You’re finally at Panda.", width/3.95, height/1.66)
      }

      if (timer > 14 && timer < 19) {
        text("You are approached by an unknown \nemployee.", 45, 410)
      }

      if (timer > 19 && timer < 23) {

        nameboxLeft()
        nametext()
        text("???", 45, 325)

        //dialouge
        bigtext()
        text("Hi. You must be the new cashier.", width/3.95, height/1.66)
        image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)

      }

      if (timer > 22){

        image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)

        //name box
        nameboxLeft()

        nametext()
        text("Noah", 45, 325)

        bigtext()
        text("Hi. You must be the new cashier.", 45, 370)
        text("I'm Noah.", 45, 410)

      }

      if (timer > 25){
        text("- Yes, I'm the new employee.", 45, 520)
        text("- Nope, I just wanted to wear a uniform \nand pretend to work.", 45, 560)

        if (optionOne === true) {

          bigtext()
          fill(255, 255, 0)
          text("- Yes, I'm the new employee.", 45, 520)

          bigtext()
          text("- Nope, I just wanted to wear a uniform \nand pretend to work.", 45, 560)

          if (keyIsDown(DOWN_ARROW)) {
            optionOne = false
            optionTwo = true
          }

          if (keyIsDown(ENTER)) {
            chap1Page = 13
            timer = 0
          }

        }

        if (optionTwo === true) {

          bigtext()
          text("- Yes, I'm the new employee.", 45, 520)

          fill(255, 255, 0)
          text("- Nope, I just wanted to wear a uniform \nand pretend to work.", 45, 560)

            if (keyIsDown(UP_ARROW)) {
            optionOne = true
            optionTwo = false
            }

            if (keyIsDown(ENTER)) {
              optionOne = true
              optionTwo = false
              chap1Page =14
              timer = 0
            }

          }
        }
      }

    if (chap1Page === 13) {

      image(panda, 0, 0, panda.width/1.05, panda.height/1.05)
      image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)

      if (frameCount % 30 == 0) {
        timer = timer + 1
      }

      nameboxLeft()
      nametext()
      text("Noah", 45, 325)

      textbox()

      if (timer > 1) {
        bigtext()
        text("Nice.", width/3.95, height/1.66)
      }

      if (timer > 4){
        text("Do you want to come see where you'll be \nworking?", 45, 410)
      }

      if (timer > 7) {

        if (optionOne === true) {

          bigtext()
          fill(255, 255, 0)
          text("- Sure", 45, 520)

          bigtext()
          text("- Nah", 45, 560)

          if (keyIsDown(DOWN_ARROW)) {
            optionOne = false
            optionTwo = true
          }

          if (keyIsDown(ENTER)) {
            timer = 0
            chap1Page = 15
          }

        }

        if (optionTwo === true) {

          bigtext()
          text("- Sure", 45, 520)

          fill(255, 255, 0)
          text("- Nah", 45, 560)

            if (keyIsDown(UP_ARROW)) {
            optionOne = true
            optionTwo = false
            }

            if (keyIsDown(ENTER)) {
              timer = 0
              optionOne = true
              optionTwo = false
              chap1Page = 16
            }

          }

      }


    }

    if (chap1Page === 14) {

      image(panda, 0, 0, panda.width/1.05, panda.height/1.05)
      image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)

      if (frameCount % 30 == 0) {
        timer = timer + 1
      }

      nameboxLeft()
      nametext()
      text("Noah", 45, 325)

      textbox()

      if (timer > 1) {
        bigtext()
        text("Wow.", width/3.95, height/1.66)
      }

      if (timer > 3){
        text("Sarcastic.", 45, 410)
      }

      if (timer > 6){
        text("Anyways, I was told to show you around.", 45, 450)
      }

      if (timer > 9) {
        if (optionOne === true) {

          bigtext()
          fill(255, 255, 0)
          text("- Okay", 45, 520)

          bigtext()
          text("- Nah", 45, 560)

          if (keyIsDown(DOWN_ARROW)) {
            optionOne = false
            optionTwo = true
          }

          if (keyIsDown(ENTER)) {
            timer = 0
            chap1Page += 1
          }

        }

        if (optionTwo === true) {

          bigtext()
          text("- Okay", 45, 520)

          fill(255, 255, 0)
          text("- Nah", 45, 560)

            if (keyIsDown(UP_ARROW)) {
            optionOne = true
            optionTwo = false
            }

            if (keyIsDown(ENTER)) {
              timer = 0
              optionOne = true
              optionTwo = false
              chap1Page = 16
            }

          }

      }
    }

    if (chap1Page === 15) {

      if (frameCount % 30 == 0) {
          timer = timer + 1
        }

      image(panda, 0, 0, panda.width/1.05, panda.height/1.05)
      textbox()

      if (timer > -1 && timer < 6) {
        nameboxLeft()
        nametext()
        text("Noah", 45, 325)
        image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)
      }

      if (timer > 1 && timer < 6) {
        bigtext()
        text("Right this way.", width/3.95, height/1.66)
      }

      if (timer > 6 && timer < 14) {
        bigtext()
        text("While Noah is showing you how the cash \nregister works, you hear a scream come \nfrom the storeroom.", width/3.95, height/1.66)
      }

      if (timer > 14) {
        nameboxLeft()
        nametext()
        text("Noah", 45, 325)
        image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)
        bigtext()
        text("Woah, what was that? We should check \nthat out.", width/3.95, height/1.66)
      }

      if (timer > 18){

        if (optionOne === true) {

          bigtext()
          fill(255, 255, 0)
          text("- Definitely ", 45, 520)

          bigtext()
          text("- Nah, it's probably fine.", 45, 560)

          if (keyIsDown(DOWN_ARROW)) {
            optionOne = false
            optionTwo = true
          }

        if (keyIsDown(ENTER)) {
            chap1Page = 17
            timer = 0
         }

        }

        if (optionTwo === true) {

          bigtext()
          text("- Definitely ", 45, 520)

          fill(255, 255, 0)
          text("- Nah, it's probably fine.", 45, 560)

          if (keyIsDown(UP_ARROW)) {
            optionOne = true
            optionTwo = false
          }

            if (keyIsDown(ENTER)) {
              optionOne = true
              optionTwo = false
              chap1Page = 18
              timer = 0

            }
        }
      }

  }

  if (chap1Page === 16) {

    if (frameCount % 30 == 0) {
        timer = timer + 1
      }

    image(panda, 0, 0, panda.width/1.05, panda.height/1.05)
    textbox()

    if (timer > -1 && timer < 9) {
      nameboxLeft()
      nametext()
      text("Noah", 45, 325)
      image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)
    }

    if (timer > 1 && timer < 9) {
      bigtext()
      text("Really?", width/3.95, height/1.66)
    }

    if (timer > 4 && timer < 9) {
      text("Well, this is mandatory so too bad.", 45, 410)
    }

    if (timer > 9 && timer < 16) {
      bigtext()
      text("While Noah is showing you how the cash \nregister works, you hear a scream come \nfrom the storeroom.", width/3.95, height/1.66)
    }

    if (timer > 16) {
      nameboxLeft()
      nametext()
      text("Noah", 45, 325)
      image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)
      bigtext()
      text("Woah, what was that? We should check \nthat out.", width/3.95, height/1.66)
    }

    if (timer > 20){

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Definitely ", 45, 520)

        bigtext()
        text("- Nah, it's probably fine.", 45, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

      if (keyIsDown(ENTER)) {
          chap1Page = 17
          timer = 0
       }

      }

      if (optionTwo === true) {

        bigtext()
        text("- Definitely ", 45, 520)

        fill(255, 255, 0)
        text("- Nah, it's probably fine.", 45, 560)

        if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
        }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            chap1Page = 18
            timer = 0

          }
      }
    }

}

if (chap1Page === 17) {

  if (frameCount % 30 == 0) {
      timer = timer + 1
    }

  image(panda, 0, 0, panda.width/1.05, panda.height/1.05)
  textbox()

  if (timer > 2) {
    image(panda_kitchen, 0, 0, panda_kitchen.width*1.5, panda_kitchen.height*1.5)
    textbox()
  }

  if (timer > 3) {
    bigtext()
    text("You and Noah rush to the kitchen.", width/3.95, height/1.66)
  }

  if (timer > 7) {
    text("The head chef is the one wailing.", 50, 410)
  }

  if (timer > 11) {
    bigtext()
    text("Ask him what’s wrong?", 50, 450)
  }

  if (timer > 14){

    if (optionOne === true) {

      bigtext()
      fill(255, 255, 0)
      text("- Yes ", 50, 520)

      bigtext()
      text("- No", 50, 560)

      if (keyIsDown(DOWN_ARROW)) {
        optionOne = false
        optionTwo = true
      }

    if (keyIsDown(ENTER)) {
        chap1Page = 19
        timer = 0
     }

    }

    if (optionTwo === true) {

      bigtext()
      text("- Yes", 50, 520)

      fill(255, 255, 0)
      text("- No", 50, 560)

      if (keyIsDown(UP_ARROW)) {
        optionOne = true
        optionTwo = false
      }

        if (keyIsDown(ENTER)) {
          optionOne = true
          optionTwo = false
          chap1Page = 20
          timer = 0

        }
    }
  }

}

if (chap1Page === 18) {

  if (frameCount % 30 == 0) {
      timer = timer + 1
    }

  image(panda, 0, 0, panda.width/1.05, panda.height/1.05)
  textbox()

  if (timer > -1 && timer < 6) {
    nameboxLeft()
    nametext()
    text("Noah", 45, 325)
    image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)
  }

  if (timer > 1 && timer < 6) {
    bigtext()
    text("Seriously? We should really go check this \nout. Let's go.", width/3.95, height/1.66)
  }

  if (timer > 6) {
    image(panda_kitchen, 0, 0, panda_kitchen.width*1.5, panda_kitchen.height*1.5)
    textbox()
  }

  if (timer > 7) {
    bigtext()
    text("You and Noah rush to the kitchen.", width/3.95, height/1.66)
  }

  if (timer > 11) {
    text("The head chef is the one wailing.", 45, 410)
  }

  if (timer > 15) {
    bigtext()
    text("Ask him what’s wrong?", 45, 450)
  }

  if (timer > 18){

    if (optionOne === true) {

      bigtext()
      fill(255, 255, 0)
      text("- Yes", 45, 520)

      bigtext()
      text("- No", 45, 560)

      if (keyIsDown(DOWN_ARROW)) {
        optionOne = false
        optionTwo = true
      }

    if (keyIsDown(ENTER)) {
        chap1Page = 19
        timer = 0
     }

    }

    if (optionTwo === true) {

      bigtext()
      text("- Yes", 45, 520)

      fill(255, 255, 0)
      text("- No", 45, 560)

      if (keyIsDown(UP_ARROW)) {
        optionOne = true
        optionTwo = false
      }

        if (keyIsDown(ENTER)) {
          optionOne = true
          optionTwo = false
          chap1Page = 20
          timer = 0

        }
      }
    }

  }

  if (chap1Page === 19) {

    if (frameCount % 30 == 0) {
        timer = timer + 1
      }

    image(panda_kitchen, 0, 0, panda_kitchen.width*1.5, panda_kitchen.height*1.5)
    textbox()

    if (timer > 0) {
      nameboxRight()
      nametext()
      text("Chef", 690, 325)
      image(chef, 550, 30, chef.width/2, chef.height/2)
    }

    if (timer > 1) {
      bigtext()
      text("My golden wok! It’s GONE!!", width/3.95, height/1.66)
    }

    if (timer > 4){

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Your what?", 50, 520)

        bigtext()
        text("- Ask Noah what the big deal is", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

      if (keyIsDown(ENTER)) {
          chap1Page = 21
          timer = 0
       }

      }

      if (optionTwo === true) {

        bigtext()
        text("- Your what?", 50, 520)

        fill(255, 255, 0)
        text("- Ask Noah what the big deal is", 50, 560)

        if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
        }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            chap1Page = 21
            timer = 0

          }
      }
    }
  }

  if (chap1Page === 20) {

    if (frameCount % 30 == 0) {
        timer = timer + 1
      }

    image(panda_kitchen, 0, 0, panda_kitchen.width*1.5, panda_kitchen.height*1.5)
    textbox()

    if (timer > 1) {
      bigtext()
      text("Are you heartless? This poor man already \nworks at Panda and you’re not going to \nask him what’s wrong?", width/3.95, height/1.66)
    }

    if (timer > 6) {

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Fine. Whatever", 45, 520)

        bigtext()
        text("- Nope", 45, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

      if (keyIsDown(ENTER)) {
          chap1Page = 19
          timer = 0
       }

      }

      if (optionTwo === true) {

        bigtext()
        text("- Fine. Whatever", 45, 520)

        fill(255, 255, 0)
        text("- Nope", 45, 560)

        if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
        }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            chap1Page = 22
            timer = 0

          }
      }
    }
  }

  if (chap1Page === 21) {

    if (frameCount % 30 == 0) {
        timer = timer + 1
      }

    image(panda_kitchen, 0, 0, panda_kitchen.width*1.5, panda_kitchen.height*1.5)
    textbox()

    if (timer > 1 && timer < 8) {
      image(noah_panda, 50, 20, noah_panda.width/2.5, noah_panda.height/2.5)
      nameboxLeft()
      nametext()
      text("Noah", 45, 325)
      bigtext()
      text("His golden wok is what makes Panda food \nso authentic. It’s necessary for a \nsuccessful recipe.", width/3.95, height/1.66)
    }

    if (timer > 8) {
      bigtext()
      text("Offer to help the chef find it?", 50, 370)
    }

    if (timer > 11){

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Yes", 50, 520)

        bigtext()
        text("- No", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

      if (keyIsDown(ENTER)) {
          chap1Page = 23
          timer = 0
       }

      }

      if (optionTwo === true) {

        bigtext()
        text("- Yes", 50, 520)

        fill(255, 255, 0)
        text("- No", 50, 560)

        if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
        }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            chap1Page = 24
            timer = 0

          }
      }
    }
  }

  if (chap1Page === 22) {

    if (frameCount % 30 == 0) {
        timer = timer + 1
      }

    image(panda_kitchen, 0, 0, panda_kitchen.width*1.5, panda_kitchen.height*1.5)
    textbox()

    if (timer > 0 && timer < 4) {
      bigtext()
      text("Noah asks the chef what's wrong.", width/3.95, height/1.66)
    }

    if (timer > 4) {
      nameboxRight()
      nametext()
      text("Chef", 690, 325)
      image(chef, 550, 30, chef.width/2, chef.height/2)
      bigtext()
      text("My golden wok! It’s GONE!!", width/3.95, height/1.66)
    }

    if (timer > 7){

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Your what?", 50, 520)

        bigtext()
        text("- Ask Noah what the big deal is", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

      if (keyIsDown(ENTER)) {
          chap1Page = 21
          timer = 0
       }

      }

      if (optionTwo === true) {

        bigtext()
        text("- Your what?", 50, 520)

        fill(255, 255, 0)
        text("- Ask Noah what the big deal is", 50, 560)

        if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
        }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            chap1Page = 21
            timer = 0

          }
      }
    }
  }

  if (chap1Page === 23) {

    if (frameCount % 30 == 0) {
        timer = timer + 1
      }

    image(panda_kitchen, 0, 0, panda_kitchen.width*1.5, panda_kitchen.height*1.5)
    textbox()

    if (timer > 1) {
      nameboxRight()
      nametext()
      text("Chef", 690, 325)
      image(chef, 550, 30, chef.width/2, chef.height/2)
      bigtext()
      text("Thank you so much! I know you just \nstarted here, but I can tell you’re going \nto be a wonderful employee.", width/3.95, height/1.66)
    }

    if (timer > 7){

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- I’m not so sure about that", 50, 520)

        bigtext()
        text("- OwO thank you Chef-San", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

      if (keyIsDown(ENTER)) {
          chap1Page = 25
          timer = 0
       }

      }

      if (optionTwo === true) {

        bigtext()
        text("- I’m not so sure about that", 50, 520)

        fill(255, 255, 0)
        text("- OwO thank you Chef-San", 50, 560)

        if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
        }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            chap1Page = 25
            timer = 0

          }
      }
    }
  }

  if (chap1Page === 24) {

    if (frameCount % 30 == 0) {
        timer = timer + 1
      }

    image(panda_kitchen, 0, 0, panda_kitchen.width*1.5, panda_kitchen.height*1.5)
    textbox()

    if (timer > 1 && timer < 5) {
      bigtext()
      text("Noah offers instead.", width/3.95, height/1.66)
    }
    if (timer > 6) {
      nameboxRight()
      nametext()
      text("Chef", 690, 325)
      image(chef, 550, 30, chef.width/2, chef.height/2)
      bigtext()
      text("Thank you so much! You two are \nwonderful employees.", width/3.95, height/1.66)
    }

    if (timer > 9){

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- I’m not so sure about that", 50, 520)

        bigtext()
        text("- OwO thank you Chef-San", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

      if (keyIsDown(ENTER)) {
          chap1Page = 25
          timer = 0
       }

      }

      if (optionTwo === true) {

        bigtext()
        text("- I’m not so sure about that", 50, 520)

        fill(255, 255, 0)
        text("- OwO thank you Chef-San", 50, 560)

        if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
        }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            chap1Page = 25
            timer = 0

          }
      }
    }
  }

  if (chap1Page === 25) {

    if (frameCount % 30 == 0) {
        timer = timer + 1
      }

    imageMode(CORNER)
    tint(255, 255)
    image(panda_kitchen, 0, 0, panda_kitchen.width*1.5, panda_kitchen.height*1.5)
    textbox()

    if (timer > -1 ) {
      nameboxRight()
      nametext()
      text("Chef", 690, 325)
      imageMode(CORNER)
      tint(255, 255)
      image(chef, 550, 30, chef.width/2, chef.height/2)
    }
    if (timer > 1 && timer < 15) {

      bigtext()
      text("I’m sure you two are wondering where you \ncan find another. You must seek a special \nstore in Toronto’s Chinatown. At the \nvery back of the store lies the golden \nwok. You need a special key to reach it, so \nI will entrust it upon you.", width/3.95, height/1.66)
    }

    if (timer > 15 && timer < 20) {
      tint01 += 3
      imageMode(CENTER)
      tint(255, tint01)
      image(dragon_key, width/2, 150, dragon_key.width/2, dragon_key.height/2)
    }

    if (timer > 19 && timer < 25) {
      imageMode(CENTER)
      tint(255, 255)
      image(dragon_key, width/2, 150, dragon_key.width/2, dragon_key.height/2)
      bigtext()
      fill(255, 255, 0)
      text("YOU GOT THE DRAGON KEY", width/3.95, height/1.66)
    }

    if (timer > 24 && timer < 29) {
      tint2551 -= 3
      imageMode(CENTER)
      tint(255, tint2551)
      image(dragon_key, width/2, 150, dragon_key.width/2, dragon_key.height/2)
    }

      if (timer > 30) {
        bigtext()
        text("Now, do you remember what you have to \ndo?", width/3.95, height/1.66)
      }


    if (timer > 33){

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Yes", 50, 520)

        bigtext()
        text("- No", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

      if (keyIsDown(ENTER)) {
          tint2551 = 255
          tint01 = 0
          chap1Page = 26
          timer = 0
       }

      }

      if (optionTwo === true) {

        bigtext()
        text("- Yes", 50, 520)

        fill(255, 255, 0)
        text("- No", 50, 560)

        if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
        }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            tint2551 = 255
            tint01 = 0
            chap1Page = 27
            timer = 0

          }
      }
    }
  }

  if (chap1Page === 26) {

    if (frameCount % 30 == 0) {
        timer = timer + 1
      }

    imageMode(CORNER)
    image(panda_kitchen, 0, 0, panda_kitchen.width*1.5, panda_kitchen.height*1.5)
    textbox()

    if (timer > 1 && timer < 7) {
      bigtext()
      text("Good, now go begin your journey.", width/3.95, height/1.66)
    }

    if (timer > 8) {
      nameboxRight()
      nametext()
      text("Chef", 690, 325)
      imageMode(CORNER)
      image(chef, 550, 30, chef.width/2, chef.height/2)
      bigtext()
      text("Now, are you ready to go?", width/3.95, height/1.66)
    }

    if (timer > 11){

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Heck yea", 50, 520)

        bigtext()
        text("- Nah son", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

      if (keyIsDown(ENTER)) {
          chap1Page = 28
          timer = 0
       }

      }

      if (optionTwo === true) {

        bigtext()
        text("- Heck yea", 50, 520)

        fill(255, 255, 0)
        text("- Nah son", 50, 560)

        if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
        }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            chap1Page = 29
            timer = 0

          }
      }
    }
  }

  if (chap1Page === 27) {

    if (frameCount % 30 == 0) {
        timer = timer + 1
      }

    imageMode(CORNER)
    image(panda_kitchen, 0, 0, panda_kitchen.width*1.5, panda_kitchen.height*1.5)
    textbox()

    if (timer > 1 && timer < 7) {
      bigtext()
      text("Too bad. I’m sure that bright kid Noah \nremembers it all, just ask him.", width/3.95, height/1.66)
    }

    if (timer > 8) {
      nameboxRight()
      nametext()
      text("Chef", 690, 325)
      imageMode(CORNER)
      image(chef, 550, 30, chef.width/2, chef.height/2)
      bigtext()
      text("Now, are you ready to go?", width/3.95, height/1.66)
    }

    if (timer > 11){

      if (optionOne === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Heck yea", 50, 520)

        bigtext()
        text("- Nah son", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne = false
          optionTwo = true
        }

      if (keyIsDown(ENTER)) {
          chap1Page = 28
          timer = 0
       }

      }

      if (optionTwo === true) {

        bigtext()
        text("- Heck yea", 50, 520)

        fill(255, 255, 0)
        text("- Nah son", 50, 560)

        if (keyIsDown(UP_ARROW)) {
          optionOne = true
          optionTwo = false
        }

          if (keyIsDown(ENTER)) {
            optionOne = true
            optionTwo = false
            chap1Page = 29
            timer = 0

          }
      }
    }
  }

  if (chap1Page === 28) {

    if (frameCount % 30 == 0) {
        timer = timer + 1
      }

    imageMode(CORNER)
    image(panda_kitchen, 0, 0, panda_kitchen.width*1.5, panda_kitchen.height*1.5)
    textbox()

    if (timer > 1 && timer < 9) {
      nameboxLeft()
      nametext()
      text("Noah", 45, 325)
      image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)
      bigtext()
      text("This is gonna be great. Let me pack up \nsome of last night’s chow mein for the \nroad.", width/3.95, height/1.66)
    }

    if (timer > 9) {
      tint01 += 3
      fill(0, 0, 0, tint01)
      rect(0, 0, 800, 600)
    }

    if (timer > 13){
      chap1Page = 30
      timer = 0
      tint01 = 0
    }
  }


  if (chap1Page === 29) {

    if (frameCount % 30 == 0) {
        timer = timer + 1
      }

    imageMode(CORNER)
    image(panda_kitchen, 0, 0, panda_kitchen.width*1.5, panda_kitchen.height*1.5)
    textbox()

    if (timer > 1) {
      bigtext()
      text("Noah drags you to the front door, picking \nup three cartons of chow mein for the \nroad.", width/3.95, height/1.66)
    }

    if (timer > 9) {
      tint01 += 3
      fill(0, 0, 0, tint01)
      rect(0, 0, 800, 600)
    }

    if (timer > 13){
      tint01 = 0
      chap1Page = 30
      timer = 0
    }
  }

//*/
}


function textbox() {
  stroke(255)
  strokeWeight(8)
  fill(0)
  rect(150, 400, 700, 300)
}

function nameboxLeft() {
  stroke(255)
  strokeWeight(8)
  fill(0)
  rect(36, 300, 75, 35)
}

function nameboxRight() {
  stroke(255)
  strokeWeight(8)
  fill(0)
  rect(681, 300, 75, 35)
}

function nametext() {
  textAlign(LEFT)
  textSize(20)
  fill(255)
  strokeWeight(0)
}

function bigtext() {
  textAlign(LEFT)
  textSize(22)
  fill(255)
  strokeWeight(0)
}

/*
empty page template

if (chap1Page === 0) {

  if (frameCount % 30 == 0 ) {
    timer = timer + 1
  }

  if (timer > 1) {
    text("Text", 50, 370)
  }

  if (timer > 0) {

  }

  if (timer > 0) {

  }

    if (optionOne === true) {

      bigtext()
      fill(255, 255, 0)
      text("- Yes", 50, 520)

      bigtext()
      text("- No", 50, 560)

      if (keyIsDown(DOWN_ARROW)) {
        optionOne = false
        optionTwo = true
      }

      if (keyIsDown(ENTER)) {
        page += 1
        timer = 0
      }

    }

    if (optionTwo === true) {

      bigtext()
      text("- Yes", 50, 520)

      fill(255, 255, 0)
      text("- No", 50, 560)

        if (keyIsDown(UP_ARROW)) {
        optionOne = true
        optionTwo = false
        }

        if (keyIsDown(ENTER)) {
          optionOne = true
          optionTwo = false
          page += 1
          timer = 0
        }
      }
    }
  }
*/
