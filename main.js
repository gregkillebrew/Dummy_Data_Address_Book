let arrayOfPosts;

// This function waits for the web page to be loaded, when it does it will run the code inside of it 
window.onload = function() {
  getPosts()

}

// This function is going to make a fetch request to the URL inside its parameter brackets then it will turn the response 
const getPosts = () => {
  fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts.results)
}

// This function logs the results
let consolePosts = () => {
  console.log("predisplay", arrayOfPosts)
}

// this function creates elements inside the all-posts ul
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`${post.name.title}: ${post.name.first}, ${post.name.last}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

const displayInfo = () => {
  const allPosts = document.getElementById('users-info')
  arrayOfPosts.map((post) => {
    const li = document.createElement('li')
    const text = document.createTextNode(` ${post.dob.date}, ${post.location.city}: ${post.location.state}, ${post.location.country}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}