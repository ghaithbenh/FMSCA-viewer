import Papa from 'papaparse';

const fetchCSVData = async (url) => {
  const response = await fetch(url);
  const text = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse(text, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        const cleanedData = results.data.map(row => {
          return Object.fromEntries(Object.entries(row).map(([key, value]) => [key.trim(), value]));
        });
        console.log("Parsed CSV Data:", cleanedData); // Log cleaned data for debugging
        resolve(cleanedData);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
        reject(error);
      },
    });
  });
};

export default fetchCSVData;
