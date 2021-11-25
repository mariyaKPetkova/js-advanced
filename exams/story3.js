class Story {
    constructor(title, creator) {
        this.title = title
        this.creator = creator
        this.comments = []
        this._likes = []
    }
    get likes() {
        if (this._likes.length == 0) return `${this.title} has 0 likes`
        if (this._likes.length == 1) return `${this._likes} likes this story!`
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
    }
    like(username) {
        if (this._likes.includes(username)) throw new Error("You can't like the same story twice!")
        if (username == this.creator) throw new Error("You can't like your own story!")
        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }
    dislike(username) {
        if (!this._likes.includes(username)) throw new Error(`You can't dislike this story!`)
        this._likes.splice(this._likes.indexOf(username), 1)
        return `${username} disliked ${this.title}`
    }
    comment(username, content, id) {
        if (id == undefined ) {
            //|| this.comments.some(c=>c.id === id)
            let newId = this.comments.length + 1
            let comment = {
                id: newId,
                username,
                content,
                replies: []
            }
            this.comments.push(comment)
            return `${username} commented on ${this.title}`
        }
        const comm = this.comments.filter(el => el.id == id)
        if (!comm.length) {
            let comment = {
                id,
                username,
                content,
                replies: []
            }
            this.comments.push(comment)
            return `${username} commented on ${this.title}`
        }
        //let commRep = this.comments.find(c=>c.id === id)
        if (comm.length) {
            const obj = this.comments.find(el => el == comm[0])
            const newId = `${id}.${obj.replies.length + 1}`
            const newRepies = {
                id: newId,
                username,
                content
            }
            obj.replies.push(newRepies)
            return "You replied successfully"
        }
    }
    toString(sortingType) {
        // let result = ''
        // if (sortingType == 'username') {
        //     this.comments.map(comm => {
        //         comm.replies.sort((a, b) => a.username.localeCompare(b.username))
        //     }).sort((a, b) => a.username.localeCompare(b.username))
        // }
        // if (sortingType == 'asc') {
        //     this.comments.map(comm => {
        //         comm.replies.sort((a, b) => a.id - b.id)
        //     }).sort((a, b) => a.id - b.id)
        // }
        // if (sortingType == 'desc') {
        //     this.comments.map(comm => {
        //         comm.replies.sort((a, b) => b.id - a.id)
        //     }).sort((a, b) => b.id - a.id)
        // }
        // result += `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`
        // this.comments.forEach(c => {
        //     result += `--${c.id}. ${c.username}: ${c.content}\n`
        //         c.replies.forEach(r => {
        //             result += `---${r.id}. ${r.username}: ${r.content}\n`
        //         })
        // })
        // return result
        const sortFn = {
            asc: (a, b) => a.id - b.id,
            desc: (a, b) => b.id - a.id,
            username: (a, b) => a.username.localeCompare(b.username),
        }
        let commm = this.comments.sort(sortFn[sortingType])
        commm.forEach(c=> replies.sort(sortFn[sortingType]))
        result += `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`
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