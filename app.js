
    //variables  
    
    let pronoun = ['the','our'];
    let adj = ['great', 'big' ];
    let noun = ['jogger','racoon'];
    let extension = ['.com','.net'];

    let pronounRandom = Math.floor(Math.random()*pronoun.length);
    let adjRandom = Math.floor(Math.random()*adj.length);
    let nounRandom = Math.floor(Math.random()*noun.length);
    let extensionRandom = Math.floor(Math.random()*extension.length);

    
    for (pronouns of pronoun) {
        for (adjs of adj){
            for (nouns of noun){
                for (extensions of extension) {
               console.log([pronouns]+[adjs]+[nouns]+[extensions]);
           }
       }
   }
   }

   console.log(`${pronoun[pronounRandom]}${adj[adjRandom]}${noun[nounRandom]}${extension[extensionRandom]}`);
    