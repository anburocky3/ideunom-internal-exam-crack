// Script to automatically select the correct answers for the marketing quiz
(function () {
  // Answers mapped to each question based on marketing knowledge
  const correctAnswers = {
    m21: "a", // Non Profit Sector
    m22: "c", // Satisfaction
    m23: "a", // Customer delivered Value
    m24: "d", // All these above (Person, Household, Company)
    m25: "a", // Retailing
    m26: "d", // All these above (Analyzing opportunities, Researching markets, Designing strategies)
    m27: "d", // Marketing Mix
    m28: "b", // Buyers
    m29: "c", // Sales history
    m30: "a", // High price (for Rapid-Skimming)
    m31: "c", // Geographic
    m32: "a", // Market
    m33: "a", // Packaging
    m34: "b", // Fixed
    m35: "d", // Mark up Pricing
    m36: "d", // All these above (Customers, Scientists, Competitors)
    m37: "d", // All these above (Company history, Products, Sales presentations)
    m38: "c", // Budget
    m39: "a", // Target Customers
    m40: "b", // Sales Promotion
  };

  // Select each answer
  for (const [questionName, answerValue] of Object.entries(correctAnswers)) {
    const radioButton = document.querySelector(
      `input[name="${questionName}"][value="${answerValue}"]`
    );
    if (radioButton) {
      radioButton.checked = true;
      console.log(
        `Selected answer ${answerValue} for question ${questionName}`
      );
    } else {
      console.log(
        `Could not find element for question ${questionName} with answer ${answerValue}`
      );
    }
  }
})();
