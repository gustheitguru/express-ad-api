const {MongoMemoryServer} = require('mongodb-memory-server');
const {MongoClient} 	  = require('mongodb');

let database = null;

async startDatabase() => {
	const mongo 	 = new MongoMemoryServer();
	const mongoDBURL = await mongo.getConnectionString();
	const connection = await MongoClient.connect(mongoDBURL, {useNewUrlParser: true});
		  database   = connection.db();
};

async getDatabase() => {
	if (!database) await startDatabase();
	return database;
};

module.exports = {
	getDatabase,
	startDatabase,
};