// Defines the `reportWebVitals` function that takes a callback function `onPerfEntry` as its argument.
const reportWebVitals = onPerfEntry => {
  // Checks if `onPerfEntry` is provided and is a function.
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically imports the `web-vitals` library which provides access to web performance metrics.
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Once the library is loaded, it calls the following methods with `onPerfEntry` as the callback function:
      getCLS(onPerfEntry); 
      getFID(onPerfEntry); 
      getFCP(onPerfEntry); 
      getLCP(onPerfEntry); 
      getTTFB(onPerfEntry);  
            // These metrics help in understanding the real-world user experience of a web application.
    });
  }
};

// Exports the `reportWebVitals` function for use elsewhere in the application.
export default reportWebVitals;