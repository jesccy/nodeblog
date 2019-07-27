const mongoose = require('mongoose')

const Schema = mongoose.Schema;



var blogSchema = new Schema(
    {
        title: {
            type: 'string',
            default: "Blog Title"
        },
        blogId: {
            type: 'string',
            default: "Blog Title",
            unique: true
        },
        description: {
            type: 'string',
            default: "Blog Title"
        },
        bodyHtml: {
            type: 'string',
            default: "Blog Title"
        },
        view: {
            type: 'number',
            default: "0"
        },
        isPublished: {
            type: 'Boolean',
            default: false
        },
        category: {
            type: 'string',
            default: "0"
        },
        author: {
            type: 'string',
            default: "0"
        },
        tags : [],
        created : {
            type: 'Date',
            default : Date.now
        },
        lastModified : {
            type: 'Date',
            default : Date.now 
        }
    }
);
mongoose.model('Blog',blogSchema);