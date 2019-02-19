const BaseRoute = require('./base/baseRoute')
const {join} = require('path')

class UtilRoutes extends BaseRoute {
    coverage(){
        return{
            path:'/coverage/{param*}',
            method:'GET',
            config:{
                tags: ['api'],
                description: 'Coverage',
                notes: 'ver cobertura do codigo',
                auth:false
            },
            handler:{
                directory:{
                    path:join(__dirname,'../../coverage'),
                    redirectToSlash:true,
                    index:true
                }
            }
        }
    }
}

module.exports = UtilRoutes;