async function csvField(url, campo){
    let list = [];
    let a ;
     return await axios.get(url).then( function(response){   
        let obj = $.csv.toObjects(response.data);
        for(var i=0; i< obj.length;i++){
            for(var aux in obj[i]){
                if(aux == campo)
                    list.push(obj[i][aux]);         
            }
        }
                     
    }).then(res => list);   
}

async function main (){
    
    const list1 = await csvField('https://raw.githubusercontent.com/UserZeca/Enxurrada-de-Bits-Exercicios/master/docs/Characters.csv', 'Character');
    const list2 = await csvField('https://raw.githubusercontent.com/UserZeca/Enxurrada-de-Bits-Exercicios/master/docs/Characters.csv', 'Description/role');
    
}

window.onload = () => {
    main()
    let nomes = ['Homer Simpson', 'Marge Simpson', 'Bart Simpson', 'Lisa Simpson', 'Maggie Simpson'];  
    let turmas = ['father of Bart, Lisa, and Maggie.', 'mother of Bart, Lisa, and Maggie.', 'Oldest child and only son of Homer and Marge; brother of Lisa and Maggie.', 'Middle child and oldest daughter of Homer and Marge; sister of Bart and Maggie.', 'Youngest child (the baby) and daughter of Homer and Marge; sister of Bart and Lisa.'];

   for(let i = 0; i < nomes.length; i++){
      let lista = document.createElement('ul'); 
      let elementoLista = document.createElement('li'); 
      let conteudoElementoLista = document.createTextNode(nomes[i]);

      elementoLista.appendChild(conteudoElementoLista);
      lista.appendChild(elementoLista);

      let subLista = document.createElement('ul'); 
      let elementoSubLista = document.createElement('li'); 
      let conteudoElementoSubLista = document.createTextNode(turmas[i]);

      elementoSubLista.appendChild(conteudoElementoSubLista);
      subLista.appendChild(elementoSubLista);

      lista.appendChild(subLista);

      let estilo1 = document.createAttribute('class');
      estilo1.value = "lista";
      elementoLista.setAttributeNode(estilo1);
      
      let estilo2 = document.createAttribute('class');
      estilo2.value = "sub-lista";
      elementoSubLista.setAttributeNode(estilo2);

      document.getElementById('caixa').insertAdjacentElement('beforeend', lista);

   } 
}



    