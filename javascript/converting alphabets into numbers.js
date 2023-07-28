


  const alphabets = {A : "1", B : "2", C : "3", D : "4", E : "5", F : "6", G : "7",  H : "8", I : "9", J : "10", K : "11", L : "12", M : "13", N : "14", O : "15", P : "16", Q : "17", R : "18", S : "19", T : "20", U : "21", V : "22", W : "23", X : "24", Y : "25", Z : "26"};  
  let text = "MANISHA";
  const text1 = text.split('');
  const result = [];

for (let i = 0; i < text1.length;i++){
       if(alphabets[text1[i]]){
          let text2 = alphabets[text1[i]];
          result.push(text2);
           
       }
   }   
   let final = result.join("");
 console.log(final);





