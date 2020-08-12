module.exports = {
    Query: {
        quake: (_, __, { dataSources }) =>
            dataSources.quakeAPI.getAllQuakes(),
        quakes: (_, { id }, { dataSources }) =>
             dataSources.quakeAPI.getQuakeById({ quakeId: id }),
             users: (_, _, { dataSources }) =>
             dataSources.userAPI.getUsers()
    }
};