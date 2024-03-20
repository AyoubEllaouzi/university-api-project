const axios = require('axios');

const getUniversities = async (req, res) => {
    try {
        const response = await axios.get(process.env.DEV_URL);
        const universities = response.data;
        res.render('universitieView', { universities });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data'); // Use res object instead of req
    }
};


module.exports = getUniversities;