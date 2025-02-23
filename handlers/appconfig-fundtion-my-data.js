const axios = require('axios');

exports.handler =  async (event, context) => {
    const baseUrl = `http://localhost:2772/applications/appconfig-meetup-demo-application/environments/${process.env.STAGE}`
    const configDataResponse = await axios.get(`${baseUrl}/configurations/FeatureFlags`);
    const configData = configDataResponse.data;
    const enabledFlag = Object.keys(configData.flags).filter(key => configData.flags[key].enabled);
    const valuesData = configData.values[enabledFlag[0]];
    return {
        statusCode: 200,
        body: JSON.stringify(valuesData)
    }
}
