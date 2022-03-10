function findcookie(type, str="", ifstat = true) {
	if (type==="all") {
		return (document.cookie);
	} else {
		if (ifstat) {
			document.cookie = str;
		}
	}
}
let cookies = findcookie("all");