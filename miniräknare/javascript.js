function visa(val)
{
   document.getElementById("fält").value+=val
}
function tabort(val)
{
   document.getElementById("fält").value(txt.value().slice(0, -1));

}
function räkna()
{
    let x = document.getElementById("fält").value
    let y = eval(x)
    document.getElementById("fält").value = y
}

//function that clear the display
function ränsa()
{
    document.getElementById("fält").value = ""
}
