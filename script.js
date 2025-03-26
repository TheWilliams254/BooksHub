async function fetchBooks(){
    try{
        const response = await fetch("https://simple-books-api.glitch.me/books");
         if(!response.ok){
            throw new Error("Could not fetch resource")
         }
         const data = await response.json();
         console.log(data)
    }
    catch(error){
        console.error(error)
    }
}
