
let count = 0
let b, c 
for(c = 2; c <= 100; c++)
{
for( b = 1; b <= c; b++)
{
  if(c % b == 0)
  count++ 
}
if(count == 2)
console.log(c)
count = 0
}