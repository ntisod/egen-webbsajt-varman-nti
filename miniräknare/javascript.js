function fält(num){
    document.form.textview.value = document.form.textview.value+num
}
function blir(){
    var result = document.form.textview.value;
    if(result){
        document.form.textview.value = eval(result)
    }
}
function ränsa(){
    document.form.textview.value ="";
}
function tabort(){
    var result = document.form.textview.value;
    document.form.textview.value = result.substring(0,result.length-1)
}
