let model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]

const set = new Set() // Коллекция для хранения уникальных id пользователей
let newModel = [] // Итоговый массив для хранения отсортированной коллекции

uniqueUserId(model)

for (let key of set.values()) {
    let user = {} 
    user.id = key
    user.name = searchUserName(key, model)
    user.post = searchUserPost(key, model)
    newModel.push(user)
}


// Поиск уникальных ID пользователей (arr - коллекция для поиска)
function uniqueUserId(arr) {
    for(let key of arr) {
        set.add(key.user.id)
    }
}

// Поиск постов пользователя (searchId - ID пользователя, arr - коллекция для поиска)
function searchUserPost(searchId, arr){
    let arrayWithPost = []
    for(let key of arr) {
        if (searchId == key.user.id) {
            let post = {}
            post.id = key.id
            post.title = key.title
            post.text = key.text
            arrayWithPost.push(post)
        }
    }
    return arrayWithPost
}

// Поиск имени пользователя (searchId - ID пользователя, arr - коллекция для поиска)
function searchUserName(searchId,arr) {
    for(let key of arr) {
        if (searchId == key.user.id) return key.user.name
    }
}

