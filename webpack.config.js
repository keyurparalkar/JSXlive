var path= require ('path');

var config= {
    entry:['./src/main.js',],

    output:{
        filename: 'bundle.js',
    },

    devServer:{
        inline:true,
        port:3333,
    },

    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loaders:['babel'],
            },
        ],
    },

    resolveLoader:{
        root:[
                path.join(__dirname , 'node_modules'),
        ],
    },

    resolve:{
        root:[ path.join( __dirname , 'node_modules')],
    },
};

module.exports=config;