const signInForm = document.getElementById("sign-in-form");

function checkUser(e){
	e.preventDefault();
	const idNumber = document.getElementById("id-number").value;
	const password = document.getElementById("password").value;
	console.log(idNumber, password);

	$.ajax({type: "post", url: 'db/check_user.php', data: {idNumber, password},
			error: e => alert(e.responseText),
			// complete: () => button.done(document.querySelector('.clicked')),
			success: e => {
				if(e) {
					alert(e);
					return;
				}
				alert('ok');
			}	
		})
}

signInForm.addEventListener('submit', checkUser);