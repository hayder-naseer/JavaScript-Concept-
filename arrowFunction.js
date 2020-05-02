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
const findElement =function (summaryList,title)
{
  const index=summaryList.findIndex((todo,index)=> todo.title.toLowerCase() === title.toLowerCase())
  return (summaryList[index]) 
}
let Print=findElement(summaryList,"New DaY")
console.log(Print)