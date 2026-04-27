
{/* 1. Traditional API call */ }
//a. GET
fetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=2')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

//b. POST
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Hello',
        body: 'World',
        userId: 1
    })
}).then(response => response.json())
    .then(data => console.log("POST resp:", data))

//c. Sequential API call
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(post => {
        console.log("Post:", post);

        //2nd API call
        return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
    })
    .then(res => res.json())
    .then(user => {
        console.log("User:", user);
    })
    .catch(err => console.error(err));

{/* 2. async-await */ }
//a.GET
const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1');
        const data = await response.json();
        console.log("data:", data);
        return data
    } catch (error) {
        console.log("Error:", error);
        //Promise.reject('Error', error)
    }
}
const result = await fetchData();
console.log("result:", result);

//b.POST
const createPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Hello',
            body: 'World',
            userId: 1
        })
    });

    const data = await response.json();
    console.log(data);
};

createPost();

{/* 3. Return data from function */ }
const fetchData2 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
};
fetchData2().then((data) => console.log("data>>", data))

/***************************************************************/

{/* 4. Parallel API call */ }

const p1 = fetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1')
    .then(res => res.json());
const p2 = fetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=2')
    .then(res => res.json());

Promise.all([p1, p2])
    .then(data => {
        console.log("SUCCESS", data);
        //if you want data in next .then, tar return it
        return data
    })
    .then(data => {
        console.log("Hello----", data)
    })


{/* 4. Sequential API call */ }

const p3 = fetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1')
    .then(res => res.json());

p3.then((result) => {
    return result
})
    .then(data => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${data[0].userId}`)
    })
    .then(res2 => res2.json())
    .then(res2 => {
        console.log(res2)
    })