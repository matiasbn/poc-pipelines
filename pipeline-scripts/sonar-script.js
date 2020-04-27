const axios = require('axios');

const sonarResponse = async () => {
  try {
    const { data: { projectStatus: { conditions } } } = await axios.get('http://54.174.170.210:9000/api/qualitygates/project_status?projectKey=sonar');
    const accepted = conditions.every((condition) => condition.status === 'OK');
    console.log(accepted);
    process.exit(1);
  } catch (error) {
    process.exit(1);
  }
};

sonarResponse();
