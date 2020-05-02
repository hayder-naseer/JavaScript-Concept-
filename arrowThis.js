let myTodos =
{
	day:'Monday',
	meetings: 10,
	meetDone: 5,
	Summary:()=>
	{
		console.log(`Number of meeting: ${this.meetings}`)
	}
}
console.log(myTodos.Summary)