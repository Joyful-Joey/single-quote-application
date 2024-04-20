export const convertString = (type: string, inputString: string) => {
  switch (type) {
    case 'title':
      // Converts the first letter of each word to uppercase and the rest to lowercase.
      // Example: "hello world" becomes "Hello World"
      return inputString.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
      );
    case 'underscore_to_title':
      // Replaces underscores with spaces and converts to title case
      // Example: "current_quote" becomes "Current Quote"
      return inputString
        .replace(/_/g, ' ') // Replace all underscores with spaces
        .replace(
          /\w\S*/g,
          (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        );
  }
};
