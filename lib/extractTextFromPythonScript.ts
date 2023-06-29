import { exec } from 'child_process';

function extractTextFromPythonScript(scriptPath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(`python ${scriptPath}`, (error, stdout, stderr) => {
      if (error) {
        console.error('Error executing Python script:', error);
        reject(error);
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

export default extractTextFromPythonScript;
