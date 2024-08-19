import Post from './post.model'

export const createPost = async (body, user) => {
    return await Post.create({
        text: body.text,
        createdDate: new Date(),
        createdBy: user.id
    })
}

export const getPosts = async (Limit = 10) => {
    return await Post.find()
    .populate('createdBy', 'user')
    .sort( { createdDate: -1 })
    .limit(Limit)
}


export const deletePost = async (id, user) => {
    return await Post.findeOneAndDelete({
        _id: id,
        createdBy: user.id
    })
} 


