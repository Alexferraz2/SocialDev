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
    return await Post.findOneAndDelete({
        _id: id,
        createdBy: user.id
    })
} 


export const editPost = async (body, user) => {
    return await Post.findOneAndUpdate({
        _id: body.id,
        createdBy: user.id
    }, {
        text: body.text
    }, {
        new: true
    })
}


