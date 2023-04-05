var x='';
function a(id){
    return document.getElementById(id);
}
function set_num(num){
    x+= num;
    a('kq').value=x;
}

function xoa(){
    x='';
    a('kq').value=x;
}

function ketqua(){
    a('kq').value = eval(a('kq').value);
    x= a('kq').value;
}
