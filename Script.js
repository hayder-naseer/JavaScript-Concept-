function validate(){
  username=(event.target.username.value);
	password=(event.target.password.value);
	Confirm_password=(event.target.Confirm_password.value);
	if (password == Confirm_password && username!="" )
	{
    alert("yes");
	window.location = "success.html";
    }
}