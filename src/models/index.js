const Actor = require('./Actor');
const Director = require('./Director');
const Genre = require('./Genre');
const Movie = require('./Movie');

Movie.belongsToMany(Actor, { through: 'movieActor' });
Actor.belongsToMany(Movie, { through: 'movieActor' });

Movie.belongsToMany(Director, { through: 'movieDirector' });
Director.belongsToMany(Movie, { through: 'movieDirector' });

Movie.belongsToMany(Genre, { through: 'movieGender' });
Genre.belongsToMany(Movie, { through: 'movieGender' });
