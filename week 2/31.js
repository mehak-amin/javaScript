function myName(firstName)
		{
			function SayHello() {
				console.log("Hello " + firstName);
			}

			return SayHello();
		}

		myName("mehak")