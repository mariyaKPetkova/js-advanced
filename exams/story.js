class Story {
    constructor(title, creator) {
        this.title = title
        this.creator = creator
        this.comments = []
        this._likes = []
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`
        }
        if (this._likes.length == 1) {
            return `${this._likes} likes this story!`
        }
        if (this._likes.length > 1) {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }
    }
    like(username) {
        if (this._likes.includes(username)) {
            throw  Error`You can't like the same story twice!`
        }
        if (this.creator == username) {
            throw  Error`You can't like your own story!`
        }
        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }
    dislike(username) {
        if (!this._likes.includes(username)) {
            throw  Error`You can't dislike this story!`
        }
        this._likes.splice(this._likes.indexOf(username), 1)
        return `${username} disliked ${this.title}`
    }
    comment(username, content, id) {
        if (id == undefined || !this.comments[id]) {
            id = this.comments.length + 1
            let newComm = {
                id,
                username,
                content,
                replies: []
            }
            this.comments.push(newComm)
            return `${username} commented on ${this.title}`
        }
        let obj = Object.values(this.comments).filter(el => el.id == id)
        if (obj.length) {
            let newRepl = {
                idR: `${id}.${obj[0].replies.length + 1}`,
                username,
                content
            }
            obj[0].replies.push(newRepl)
            return "You replied successfully"
        }
    }
    toString(sortingType) {
        let result = ''
        const sortFn = {
            asc: (a, b) => a.id - b.id,
            desc: (a, b) => b.id - a.id,
            username: (a, b) => a.username.localeCompare(b.username),
        }
        const sortedComm = Array.from(this.comments).sort(sortFn[sortingType])
        result += `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`
        Array.from(sortedComm).forEach(el => {
            result += `-- ${el.id}. ${el.username}: ${el.content}\n`
            if (el.replies.length) {
                el.replies.sort(sortFn[sortingType]).forEach(el => {
                    result+= `--- ${el.idR}. ${el.username}: ${el.content}\n`
                })
            }
        })
        return result.trim()
    }
}
let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
