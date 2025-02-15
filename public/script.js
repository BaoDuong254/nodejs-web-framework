document.getElementById("myForm").addEventListener("submit", function (event) {
	event.preventDefault();
	const formData = new FormData(this);
	fetch("/data", {
		method: "POST",
		body: new URLSearchParams(formData),
	})
		.then((response) => response.json())
		.then((data) => {
			alert("Submit success");
			window.location.href = "/";
		})
		.catch((error) => console.error("Error:", error));
});
