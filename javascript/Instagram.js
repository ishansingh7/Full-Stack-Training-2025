async function createPost() {
    var post = new Promise((cpost) => { 
        setTimeout(() => {
            cpost("Post created successfully")
        }, 1000);
    });
    console.log(await post); 
}
createPost();

likecode = async () => {
    return new Promise((likePost) => {
        setTimeout(() => {
            likePost("Post liked successfully");
        }, 0); 
    });
};
