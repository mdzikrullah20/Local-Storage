let savebtn = document.querySelector('#savebtn')
let rertbtn = document.querySelector('#retrieve')

savebtn.addEventListener('click',saveText)
rertbtn.addEventListener('click',retrieveText)

function saveText(){
    const textInput = document.getElementById('textInput').value;
    localStorage.setItem('savedText',textInput)
    document.getElementById('textInput').value = "";
}
function retrieveText(){
    const saveText = localStorage.getItem('savedText')
    if(saveText){
        document.getElementById('output').textContent = saveText;
    }
    else{
        document.getElementById('output').textContent = "No saved text"
    }
}