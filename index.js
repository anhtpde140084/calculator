function gethistory(){// lấy text từ history
    return document.getElementById("history-value").innerText;
}

function printOutHistory(num){ // in ra num truyền vào
    document.getElementById("history-value").innerText = num;
}
function getOutput(){ // kết quả cũng tương tự history
return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText= num;
    }
    else {
         document.getElementById("output-value").innerText =  getFormattedNumber(num);
         }
}
// 
function getFormattedNumber(num){
    if(num=="-"){return "";}
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
// 
function reverseNumber(num){
    return Number(num.replace(/,/g,''));
}
// tính toán
var pheptinh = document.getElementsByClassName("operator");
for(var i = 0;i<pheptinh.length; i++){
    pheptinh[i].addEventListener('click',function(){ // click vào clear C thì in ra trống
        if(this.id == "clear"){
            printOutHistory("");
            printOutput("");
        }
        else if(this.id =="backspace"){ // click vào back thì -1
            var output = reverseNumber(getOutput()).toString();
            if(output){
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        } 
        else {
            var output = getOutput();
            var history = gethistory();
            if(output =="" && history!=""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1);
                }
            }
            if(output!="" || history != ""){
                output = output ==""?
                output: reverseNumber(output);
                history+=output;
                if(this.id =="="){
                   var ketqua = eval(history)
                   printOutput(ketqua);
                   printOutHistory("");
                }
                else
                {
                    history = history+this.id;
                    printOutHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for(var i = 0;i<number.length; i++){
    number[i].addEventListener('click',function(){
        var output = reverseNumber(getOutput());
        // nếu đầu ra là 1 số thì.
        if(output!= NaN){
            output+= this.id;
            printOutput(output);
        }
    });
}