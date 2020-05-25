


function authorDialog(){                                                       //uppgift 2
  alert("Vagish har gjort denna sida år 2020.");

}

function changecolor(color){                                                  //uppgift 3
       document.getElementById('stycke').style.backgroundColor = color;
       document.getElementById("namn").innerHTML = "Vagish";
   }

function changeImage() {                                                      //uppgift 4

       var image = document.getElementById('bilden');

       if (image.src.match("./bild1.jpg")) {
           image.src = "./bild2.jpg";
       }
       else {
           image.src = "./bild1.jpg";
       }
   }

   function minfunktion(){                                                    //uppgift 5 och 6
              var x, text;

              x = document.getElementById("name").value;

              text = "Hej " + x + "!";

              document.getElementById("demo").innerHTML = text;              // uppgift 7, här skrivs namnet in i ett dokumentet "demo"
              alert(text);

           }

    function plus(){                                                                //uppgift 8 och 9, här är koden för plus
             var siffra1 = parseFloat(document.getElementById("num1").value);
             var siffra2 =parseFloat(document.getElementById("num2").value);
             var summa = 0;
             summa = siffra1 + siffra2;
             myButton = document.getElementById("svar");
             myButton.value = summa;
           }

     function minus(){                                                              //minus
            var siffra3 = parseFloat(document.getElementById("num3").value);
            var siffra4 =parseFloat(document.getElementById("num4").value);
            var summa = 0;
            summa = siffra3 - siffra4;
            myButton = document.getElementById("svar2");
            myButton.value = summa;
            }

    function gånger(){                                                              //multiplikation
          var siffra5 = parseFloat(document.getElementById("num5").value);
          var siffra6 =parseFloat(document.getElementById("num6").value);
          var summa = 0;
          summa = siffra5 * siffra6;
          myButton = document.getElementById("svar3");
          myButton.value = summa;
         }

   function dela(){                                                                     //divison
           var siffra7 = parseFloat(document.getElementById("num7").value);
           var siffra8 =parseFloat(document.getElementById("num8").value);
           summa = 0;
           summa = siffra7 / siffra8;
           myButton = document.getElementById("svar4");
           myButton.value = summa;
         }
