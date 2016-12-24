function createNewProfile() {

	var results = document.getElementById('results')

	var userFirst = document.getElementById("firstname").value
	var userLast = document.getElementById("lastname").value
	var userEmail = document.getElementById("userEmail").value
	var userPhone = document.getElementById("userTel").value
	var userBirthday = document.getElementById("userBirthday").value

	var userGender = document.getElementsByClassName("userGender")

	for (var i = 0; i < userGender.length; i++) {
		if (userGender[i].checked) {
			userGender = userGender[i].value
		}
	}

	results.className = "success"
	results.textConent = "Creating Your New Profile Now"

	var Password = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 10; i++ ) {
        Password += characters.charAt(Math.floor(Math.random() * characters.length));
    }


	 

	var userProfile = {
		name: userFirst + " " + userLast,
		loginName: userFirst.charAt(0) + userLast,
		password: Password,
		email: userEmail,
		phone: userPhone,
		birthday: userBirthday,
		gender: userGender
	}

	console.log(userProfile)

	setTimeout(function() {displayProfile(userProfile) }, 1500)
}

function displayProfile(userProfile) {
	var userName = document.getElementById("newUserName")
	var userLogin = document.getElementById("newUserLogin")
	var userPassword = document.getElementById("newUserPassword")
	var newEmail = document.getElementById("newUserEmail")
	var newPhone = document.getElementById("newUserPhone")
	var newBirth = document.getElementById("newUserBirth")
	var newGender = document.getElementById("newUserGender")

	userLogin.innerText = "Your new Username is: " + userProfile.loginName
	userPassword.innerText = "Your temporary password is: " + userProfile.password
	newEmail.innerText = "Email: " + userProfile.email
	newPhone.innerText = "Phone: " + userProfile.phone
	newBirth.innerText = "Birthday: " + userProfile.birthday
	newGender.innerText = "Gender: " + userProfile.gender


	document.getElementById("newProfile").style.display = "none"
		document.getElementById("disappear").style.display = "none"


	document.getElementById("updatedProfile").style.display = "block"

}

document.getElementById("createProfile").addEventListener("click", createNewProfile, false)




