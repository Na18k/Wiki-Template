	function modificarCod() {

		for(i = 0; i < cods.length; i++) {

			document.getElementById("cod" + `${i}`).innerHTML = `${cods[i]}`;

		}
	}

	// Códigos dinamicos
	var cods = [
	`.codigo {
		padding: 10px;
		border-radius: 5px;
		background: #363636;
		font-size: 80%;
		color: #808080;
		width: 98%;
		/*height: 120px;*/
		margin: 10px 0px 10px 0px;
		text-align: left;
		resize: vertical;
		word-wrap: break-word;
		overflow: auto;
	}`,
	`/* https://www.digitalocean.com/community/tutorials/css-scrollbars-pt */

	/* Works on Firefox */
	* {
	  scrollbar-width: thin;
	  scrollbar-color: #682ae9 rgba(0,0,0,0.5);
	}

	/* Works on Chrome, Edge, and Safari */
	*::-webkit-scrollbar {
	  width: 16px;
	}

	*::-webkit-scrollbar-track {
	  background: rgba(0,0,0,0.5);
	}

	*::-webkit-scrollbar-thumb {
	  background-color: #682ae9;
	  border-radius: 20px;
	  border: 3px solid rgba(0,0,0,0.5);
	}
	.scrollbar {
	  display: block;
	  width: 10em;
	  overflow: auto;
	}`,
	]

	modificarCod();