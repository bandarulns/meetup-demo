exports.handler = async (event) => {
    console.log('Deployment completed:', { event });
    // Your custom logic here
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Deployment complete' })
    };
  };