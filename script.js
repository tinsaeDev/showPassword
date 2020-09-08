			function registerEventListeners(){
						buttons = document.querySelectorAll(".button");
						buttons.forEach( button=>{
								button.addEventListener("click",buttonClick);
						} );
			}

			function buttonClick(event){

								button =  event.target;
								inputId = button.getAttribute("for");
								inputDom = document.querySelector("#"+inputId);

									inputType = inputDom.getAttribute("type");
										
										//Show password
										if (inputType=="Password") {
											//change the input type to text
											inputDom.setAttribute("type","Text");
											
											//change button classes					
											button.classList.remove("show-pwd-button");
											button.classList.add("hide-pwd-button");


											//auto hide the password after, a second
											setTimeout( buttonClick ,1000, event );

										//Hide Password
										} else{
											
											//change the input type to password
											inputDom.setAttribute("type","Password");

											//change button classes					
											button.classList.remove("hide-pwd-button");
											button.classList.add("show-pwd-button");
										}
					}
