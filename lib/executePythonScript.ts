import extractTextFromPythonScript from './extractTextFromPythonScript';

// Example usage
const scriptPath = "app\\python\\text_extractor.py";

async function extractText() {
  try {
    const extractedText = await extractTextFromPythonScript(scriptPath);
    console.log('Extracted data:', extractedText);
    // Process the extracted data as needed
  } catch (error) {
    console.error('Error extracting data:', error);
  }

}


// Call the function to start extracting text
export default extractText;