(function () {
  // Object containing questions and their likely correct answers
  const answers = {
    // Question 1: Which of the following shows the process of creating something new?
    m21: "d", // Innovation

    // Question 2: Which one of the following gives suggestions for new product and also help to market new products?
    m22: "d", // Consumers

    // Question 3: Which of the following is used by entrepreneurs to acquire experience in an international market before making a major commitment?
    m23: "c", // Joint venture

    // Question 4: GATT is established in 1947, under
    m24: "b", // U.S. leadership

    // Question 5: The entrepreneur was distinguished from capital provider in
    m25: "c", // 18th century

    // Question 6: A person who managed large project was termed as the entrepreneur in the
    m26: "b", // Middle ages

    // Question 7: What is the process by which individuals pursue opportunities without regard to resources they currently control?
    m27: "b", // Entrepreneurship

    // Question 8: Having less than 50 percent of equity share in an international venture is called
    m28: "c", // Minority interest

    // Question 9: Having more than 50% ownership position that provides the entrepreneur with managerial control is called
    m29: "b", // Majority interest

    // Question 10: Which one of the following is the process of entrepreneurs developing new products that over time make current products obsolete?
    m30: "d", // Creative destruction

    // Question 11: Which of the following factors is the most important in forcing U.S companies to focus on new product development and increased productivity?
    m31: "b", // Hyper competition

    // Question 12: Which of the following is alternatively called corporate venturing?
    m32: "b", // Intrapreneurship

    // Question 13: Individuals influencing an entrepreneur's career choice and style are known as which of the following?
    m33: "b", // Role model

    // Question 14: The activity which occurs when the new venture is started is called:
    m34: "c", // Departure point

    // Question 15: The level at which an individual is viewed by society is called
    m35: "c", // Social status

    // Question 16: Which one of the following is an important source of idea generation due to their familiarity with the needs of market?
    m36: "d", // Consumers

    // Question 17: Members of distribution channels are excellent sources for new ideas because
    m37: "b", // They are familiar with the needs of the market

    // Question 18: Which one of the following is the most important characteristic of a successful business website?
    m38: "a", // Innovation

    // Question 19: Which one of the following is the next stage to the Concept Stage of Product Planning and Development Process?
    m39: "c", // Product Development Stage

    // Question 20: SBA stands for
    m40: "b", // Small business administration
  };

  // Function to select the answers
  for (const questionId in answers) {
    const selector = `input[name="${questionId}"][value="${answers[questionId]}"]`;
    const radioButton = document.querySelector(selector);

    if (radioButton) {
      radioButton.checked = true;
      console.log(
        `Selected answer ${answers[questionId]} for question ${questionId}`
      );
    } else {
      console.log(`Could not find radio button for question ${questionId}`);
    }
  }

  console.log(
    "All answers have been selected. Please review before submitting."
  );
})();
