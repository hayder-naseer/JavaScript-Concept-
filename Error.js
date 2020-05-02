const converttoRs=(dollar)=>
{
    if(typeof dollar === "number")
    {
    	return dollar*156;
    }
    else
    {
    	throw Error('Enter in Amount')
    }
}
try
{
   const myValue=converttoRs(1)
   console.log(myValue)
}
catch(e)
{
   console.log(e)
}