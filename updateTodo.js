const summaryList=
[
	{
    title:"Meeting Ramaings",
    isDone:false,
	},
	{
    title:"Meeting Done",
    isDone:false,
	},
	{
    title:"New DAY",
    isDone:true,
	}
]
/*
const index=summaryList.findIndex(function(todo,index)
{
   console.log(todo);
   console.log(index);
   return todo.title === "New DAY"
})
console.log(index);
*/
const findElement =function (summaryList,title)
{
  const index=summaryList.findIndex(function(todo,index)
   {
    return todo.title.toLowerCase() === title.toLowerCase()
   })
  return (summaryList[index]) 
}
let Print=findElement(summaryList,"New DaY")
console.log(Print)