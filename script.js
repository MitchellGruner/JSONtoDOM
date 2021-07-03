/* Fetch the URLs for the users and posts APIs */
const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users");
const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts");

/* Concatenate the APIs for easy retrieval of data */
Promise.all([fetchUsers, fetchPosts]).then(values => {
	return Promise.all(values.map(r => r.json()));
}).then(([users, posts]) => {
	var userValues = "";

	/* Go through each and every value in our users API and store the name
	   in our first table of our HTML file */
	users.forEach((u) => {
		userValues += "<tr>";
			userValues += "<td><button id=" + u.id + " class='bg-info'>" + u.name + "</button></td>";
		userValues += "</tr>";
	});

	/* 'data' is the id of our first table */
	document.getElementById("data").innerHTML = userValues;

	/* Code for selecting each user */
	var first = document.querySelector("[id='1']");
	first.addEventListener("click", displayPost, false);

	var second = document.querySelector("[id='2']");
	second.addEventListener("click", displayPost, false);

	var third = document.querySelector("[id='3']");
	third.addEventListener("click", displayPost, false);

	var fourth = document.querySelector("[id='4']");
	fourth.addEventListener("click", displayPost, false);

	var fifth = document.querySelector("[id='5']");
	fifth.addEventListener("click", displayPost, false);

	var sixth = document.querySelector("[id='6']");
	sixth.addEventListener("click", displayPost, false);

	var seventh = document.querySelector("[id='7']");
	seventh.addEventListener("click", displayPost, false);

	var eigth = document.querySelector("[id='8']");
	eigth.addEventListener("click", displayPost, false);

	var ninth = document.querySelector("[id='9']");
	ninth.addEventListener("click", displayPost, false);

	var tenth = document.querySelector("[id='10']");
	tenth.addEventListener("click", displayPost, false);

	/* The user that is selected will be based off of the id
	   of the link (button 1 will have id of 1; this will make
	   it simple for us to determine whether the post's userId 
	   matches the button's id - if it does, we will display the
	   values to the screen.  Only the posts that have the same id
	   as the user that is selected will be displayed */
	function displayPost(e) {
		var postValues = "";

		/* Go through each and every value in our posts API and store the title
		   and body of the post in our second table of our HTML file */
		posts.forEach((u) => {
			if(u.userId == e.target.id){
				postValues += "<tr>";
					postValues += "<td>" + u.title + "</td>";
					postValues += "<td>" + u.body + "</td>";
				postValues += "</tr>";
			}
		});

		document.getElementById("data1").innerHTML = postValues;
	}
});