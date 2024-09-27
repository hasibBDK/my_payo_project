document.getElementById('btn-add-money').addEventListener('click',function(event)
{
    event.preventDefault();


    const addMoney = document.getElementById('add-money').value;
    
    const addPin = document.getElementById('input-pin').value;
    console.log(addMoney,addPin)
})