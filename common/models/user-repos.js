module.exports = function(UserRepos) {

    UserRepos.get = function(user, callback) {
        UserRepos.userRepos(user, callback);
    };

};
