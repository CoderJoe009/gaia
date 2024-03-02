import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import PredictionDisplay from './PredictionDisplay';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const handlePrediction = async (imageData) => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/predict', { image: imageData });
      setPrediction(response.data);
    } catch (error) {
      console.error(error);
      setPrediction('Error: Could not predict species.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Species Identification AI</h1>
      <ImageUpload onSubmit={handlePrediction} />
      {isLoading && (
        <p>Analyzing image... Please wait.</p>
      )}
      {prediction && <PredictionDisplay prediction={prediction} />}
    </div>
  );
}

export default App;
