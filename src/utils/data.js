export const getAvatar = (username) => {
    const url = "https://api.github.com/users/"+ username;

    return fetch(url)
            .then(res => {
                if (!res.status) {
                    console.log(`Error with the request! ${res.status}`)
                } else {
                    return res.json();
                }
            })
            .catch(err => { throw new Error(`GitHub profile not fetched: ${err}`)})
}

