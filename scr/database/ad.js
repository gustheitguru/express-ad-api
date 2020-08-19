const {getDatabase}  = require('./mongo');
const collectionName = 'ads';

async insertAd(ad) => {
	const database = await getDatabase();
	const {insertedId} = await database.collection(collectionName).insertOne(ad);
	return insertedId;
};

async getAds() => {
	const database = await getDatabase();
	return await database.collection(collectionName).find({}).toArray();
};

module.exports = {
	insertAd,
	getAds,
};