var fs = require('fs');


var walk = function(dir) //return tout les fichiers avec des routes dans api/modules
{
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory())
          results = results.concat(walk(file)) ;
        else
        results.push(file);
    });
    return results ;
};

exports.walk = walk;