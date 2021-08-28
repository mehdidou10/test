function creatnote(){
    var title = document.getElementById('input').value
    var textContent = document.getElementById('textarea').value
   /*var title = prompt('Enter your title') /*   /* on doit changer le titre et le paragraphe*/
   /* var textContent = prompt('Enter your note content')/*
    /* pour modifier le tit et paragraphe suppliment et on enleve les ''''''' en bas*/
    
    var notes = document.getElementById('notes') /* appeler div l'element */
    /* appler un div et (on click sur +  ca depend d html) pour changer la colour de div appler*/
     /*notes.style.backgroundColor = 'red'   /*       /* on peut faire aussi alert  ....... on click et l'alert sort*/                                     

                                                     
    var card = document.createElement('div'); /* on a cree un div*/
     card.setAttribute('class', 'card');   /*on  met le div en meme style d'un div d css*/
     notes.appendChild(card); /* child le div est interieu de div avec la color beige marron*/
                         

     var cardhead = document.createElement('div')
     cardhead.setAttribute('class', 'card-head')      /*le meme principe */
     card.appendChild(cardhead)

     var titlespan = document.createElement('span')
     titlespan.innerHTML = 'title  '            /*innerhtml c'est juste pour span*/
     cardhead.appendChild(titlespan)

     var logo = document.createElement('img')
    logo.setAttribute ('src','icon.svg')  
    logo.setAttribute('onClick','deteleNote(this)')
    cardhead.appendChild(logo)
    
    
    var divv = document.createElement('div')
    divv.setAttribute('class','card-content')
    card.appendChild(divv)

    var para = document.createElement('span')
    para.innerHTML ='textContent '

    divv.appendChild(para)



    document.getElementById('input').value = ''
    document.getElementById('textarea').value = ''

    closePopup()

}
function deteleNote(img) {
    var toDelete = img
        .parentNode              /*pour supprimer */
        .parentNode;
    toDelete.remove()
}
function showPopup() {
    var popup = document.getElementById('Popup')
    popup.style.display = 'flex'
}
function closePopup() {
    var popup = document.getElementById('Popup')
    popup.style.display = 'none'
}