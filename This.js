let myTodos =
{
	day:'Monday',
	meetings: 10,
	meetDone: 5,
	Summary:function()
	{
		console.log(`Number of meeting: ${this.meetings}`)
	}
}

let myTodosTwo ={
	day:'Tuesday',
	meetings:10,
	meetDone:6,
	addMeeting:function(num)
	{
		this.meetings=this.meetings-this.meetDone
	},
	Summary:function()
	{
		return `number of Meeting Remanings: ${this.meetings}`
	}

}
myTodosTwo.addMeeting(this.meetDone)
myTodos.Summary()
console.log(myTodosTwo.Summary())
