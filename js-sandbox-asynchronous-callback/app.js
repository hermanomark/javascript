// Callback functions
const posts = [
    {title: "Post One", body: "This is Post One"},
    {title: "Post Two", body: "This is Post Two"},
];


// function createPost(post) {
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }

// function getPosts() {
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post Three'});

// getPosts();

function createPost(post, callback) {
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post Three'}, getPosts);

// Callbacks are functions that can be pass in to another function, then called within that function