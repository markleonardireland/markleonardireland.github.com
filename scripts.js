var myList = document.getElementsByTagName("li");
		var index;

		for(index = 0; index < myList.lenght; index++)
		{
			var aSpanTag = document.createElement("Span");
			var someTxt = document.createTextNode("\u00D7");
			aSpanTag.className = "close";
			aSpanTag.appendChild(someTxt);
			myList[index].appendChild(aSpanTag);
		}

		

		//Creating 'check' to do list
		var ulList = document.querySelector('ul');
		ulList.addEventListener('click', function(event){
			console.log(event)
			if(event.target.tagName === "LI"){
				event.target.classList.toggle('checked');
			}

		});

		//Creating 'to do' function
		function createNewElement(){
			var li = document.createElement('li');
			var inputValue = document.getElementById("input").value;
			var textNode = document.createTextNode(inputValue);
			li.appendChild(textNode);



			if(inputValue === ''){
				alert("Please enter an item to add to your 'To Do' list")
			} else {
				document.getElementById("ul").appendChild(li);
			}

			document.getElementById("input").value = "";

			var theSpanTag = document.createElement("Span");
			var txt = document.createTextNode("\u00D7");
			theSpanTag.className = "close";
			theSpanTag.appendChild(txt);
			li.appendChild(theSpanTag);

			theSpanTag.onclick = function(){
				var theDiv = this.parentElement;
				theDiv.style.display = "none";
			}
		}