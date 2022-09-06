var form = document.getElementById("myForm")

form.addEventListener('submit',function(e){
   e.preventDefault()

	var search = document.getElementById("search").value

	var originalName = search.split(' ').join(' ')

	document.getElementById("result").innerHTML = ""

	fetch("https://api.github.com/users/"+originalName)
	.then((result) => result.json())
	.then((data) => {
		console.log(data)

		document.getElementById("result").innerHTML = `
		<div>
		<a target="_blank" href="https://www.github.com/${originalName}"><img src="${data.avatar_url}" width="400" height="400"></a>
		</div>
		<div style="padding: 20px;">
		<h2> Name: ${data.name}</h2>
		<h2> Location: ${data.location}</h2>
		<h2> Bio: ${data.bio}</h2>
		<h2> Repositories : ${data.public_repos}</h2>
		<h2> Following: ${data.following}</h2>
		<h2> Follower: ${data.followers}</h2>
		</div>
		`
	})
})