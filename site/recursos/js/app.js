function forgotPasswordModal(){
	let fade = document.querySelector('#fade')
	let modal_card = document.querySelector('#modal_card')
	
	fade.classList.toggle('hide')
	modal_card.classList.toggle('hide')
}


function registerlogin(){
	
	let login = localStorage.getItem("login")
	if(login === null){
		localStorage.setItem("login","icet2024")
		localStorage.setItem("Password","icet2024")
	}	
}	
