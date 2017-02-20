const metalsmith = require('metalsmith')
const handlebars = require('handlebars')
const layouts = require('metalsmith-layouts')
const permalinks = require('metalsmith-permalinks')

handlebars.registerHelper('pretty', function (context) {
    return JSON.stringify(context);
});

metalsmith(__dirname)
    .source('./source/')
    .destination('./public/')
    .clean(true)
    .use(layouts({
        engine: 'handlebars',
        default: 'default.hbs',
        directory: './template/',
        partials: './template/partial/'
    }))
    .use(permalinks({relative: false}))
    .build(err =>{
        if(err) throw err
    })
