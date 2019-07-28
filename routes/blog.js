 const express = require('express')
 const mongoose = require('mongoose')
 const blogController = require('./../controllers/blogController')
 var appConfig = require('./../config/appConfig')
// const app = express()
// var router = express.Router()  
let setRouter = (app) => {
    app.get('/hello', function (req, res) {
        res.send('Hello World!');
    });

    

   // app.get('/print_example',print_example2);
   app.get('/print_example',blogController.printnum);

   app.get('/test/route/:param1/:param2',blogController.testRoute);
   app.get('/test/query',blogController.testQuery);
   app.get('/test/body',blogController.testBody);


let baseURL = appConfig.apiversion+'/blogs';

  
app.get(baseURL+'/all',blogController.getAllBlog);
app.get(baseURL+'/view/:blogId',blogController.viewByBlogId);
app.get(baseURL+'/view/by/author/:author',blogController.viewByAuthor);
app.get(baseURL+'/view/by/category/:category',blogController.viewByCategory); 
app.post(baseURL+'/:blogId/delete',blogController.deleteBlog); 
app.put(baseURL+'/:blogId/edit',blogController.editBlog);
app.post(baseURL+'/create',blogController.createBlog);
app.get(baseURL+'/:blogId/count/view',blogController.increaseBlogView);
}

module.exports = {
    setRouter: setRouter
}
// app.get('/hello', function (req, res) {
//     res.send('Hello World!');
// });
// app.get('/print_example', function (req, res) {
//     res.send('print example!');
// }); 

// module.exports = {
//     getMovie : function(req, res){
//         console.log('Model Loaded');
//     },
//     getMovies : function(req, res){
//         console.log('Model Loaded');
//     },
//     postMovie : function(req, res){
//         console.log('Model Loaded');
//     }
// }

