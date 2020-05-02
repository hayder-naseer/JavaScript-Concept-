let myTodos =
{
	day:'Monday',
	meetings: 0,
	meetDone: 0,
}
let addMeeting = function(identity , meetAdd=0)
{
	identity.meetings=identity.meetings+meetAdd
}
let meetingDone = function(identity , meetDone=0)
{
	identity.meetDone=identity.meetings-meetDone
}
let SummaryOfSchedule=function(identity)
{
	let meetleft = identity.meetings - identity.meetDone
	return `you have ${meetleft} meetings today!`
}

var identity = myTodos;
addMeeting(identity,4);
addMeeting(identity,2);
meetingDone(identity,5);
console.log(identity);
console.log(SummaryOfSchedule(identity));