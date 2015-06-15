module.exports = function(Users) {

    Users.get = function(user, callback) {
        Users.users(user, callback);
    };

};
