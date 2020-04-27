const axios = require('axios');

const sonarResponse = async () => {
  const { SONAR_HOST } = process.env;
  try {
    const { data: { projectStatus: { status } } } = await axios.get(`${SONAR_HOST}/api/qualitygates/project_status?projectKey=sonar`);
    process.exit(status === 'OK' ? 0 : 1);
  } catch (error) {
    process.exit(1);
  }
};

sonarResponse();
