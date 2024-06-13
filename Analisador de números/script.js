function calc(){
    var num = document.getElementById('txtnum')
    var list = document.getElementById('list')
    if (num.value.length == 0){
        window.alert('Digite um valor válido.')
    } else {
        let item = document.createElement('option')
        item.text = String(num)
        list.appendChild(item)
    }
}