async function fetcher() {
    let title = document.getElementById("title")
    let authors = document.getElementById("authors") 
    try {
        //fetch users and posts
        let urlUsers = "https://jsonplaceholder.typicode.com/users"
        let urlPosts = "https://jsonplaceholder.typicode.com/posts"
        
        let resUsers = await fetch(urlUsers)
        let resPosts = await fetch(urlPosts)
        //display fetched data on page elements
        if (!resUsers.ok && !resPosts.ok) {
            throw Error("AAAAAAAAAA IM AN ERROR HELP ME")
        } else {
        console.log('HELLO FUCKER')
        let authorText = await resUsers
        authorsArray = Array.from(authorText)
        console.log(authorsArray)
        
    }
    
    
    
    
} catch(error) {
    console.log("KILL ME AAAA")
}
}
fetcher()