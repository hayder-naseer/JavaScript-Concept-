var mystring=["h","a","@","g","m","a","i","l",".","c","o","m"]
var condition=["@","g","m","a","i","l",".","c","o","m"]
 let count=0,j=0,i=0,save=0
 
 while(mystring[i]!=null)
   {
   count++
   i++
   }
 for( i=0 ; i<=count; ++i)
  {
    if(mystring[i]===condition[j])
      {
      save=i;
      }
  }

 i=save
  while(i<count)
   {
   	
   	if(mystring[i]==condition[j])
   	{
   		i++
   		j++
   	}
   }	
console.log(checkUsername())