module.exports = function (model) {
    var name = model.sharedClass.name;
    
    model.get = function () {
        model['get_' + name].apply(null, arguments);
    };
};
