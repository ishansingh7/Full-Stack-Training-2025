likecode = async () => {
    return new Promise((likePost) => {
        setTimeout(() => {
            likePost("Post liked successfully");
        }, 0); // Added a delay of 0 to fix the missing argument for setTimeout
    });
};