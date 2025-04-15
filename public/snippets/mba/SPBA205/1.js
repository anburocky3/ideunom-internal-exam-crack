(function () {
  // Map of questions to answers
  const answers = {
    // 1. Why should an entrepreneur do a feasibility study for starting a new venture
    m1: "b", // To see if there are possible barriers to success

    // 2. Information regarding all of the following is related to operations, EXCEPT
    m2: "b", // Promotion

    // 3. A performance and credit rating scheme has been launched by the MSME Ministry to assess creditworthiness and capabilities of industries in the sector. What is it called?
    m3: "a", // Performance and Credit Rating Scheme

    // 4. A Micro Enterprise is an enterprise where investment in plant and machinery does not exceed (According to MSMED Act, 2006)
    m4: "c", // Rs. 25 Lakh

    // 5. EDP (Entrepreneurship Development Programmes) is required to help:
    m5: "b", // First generation entrepreneurs

    // 6. A corporate manager who starts a new initiative for their company which entails setting up a new distinct business unit and board of directors can be regarded as?
    m6: "c", // Intrapreneur

    // 7. A women entrepreneur is supposed to have a minimum financial interest in share capital of entrepreneur's enterprise
    m7: "b", // 51 per cent

    // 8. Family business always interested to handover the change of his business to:
    m8: "c", // Next generation

    // 9. A corporate manager who starts a new initiative for their company which entails setting up a new distinct business unit and board of directors can be regarded as?
    m9: "c", // Intrapreneur (same as question 6)

    // 10. Venture capital is concerned with:
    m10: "d", // All the above

    // 11. An entrepreneur is someone who assumes the major risks of a new business by committing which of the following?
    m11: "d", // all of the above

    // 12. An informal group of innovative employees who are permitted to digress temporarily from their regular tasks to develop new ideas are referred to as:
    m12: "b", // skunkworks

    // 13. It is estimated that approximately _____ percent of small businesses fail within the first five years.
    m13: "c", // 50

    // 14. Which of the following is not a personal characteristic often found in an entrepreneur?
    m14: "d", // follower

    // 15. The period of business when an entrepreneur must position the venture in a market and make necessary adjustments to assure survival is called the:
    m15: "b", // startup stage

    // 16. Which of the following is usually included in a business plan?
    m16: "d", // all of the above

    // 17. Which of the following is a reason why a person might prefer to purchase a franchise rather than open a completely new business?
    m17: "c", // ability to benefit from previous experience

    // 18. According to the textbook, which of the following management functions is the least well done?
    m18: "d", // controlling

    // 19. Which of the following is not a common motivation of an entrepreneur?
    m19: "c", // desire to maintain the status quo

    // 20. Which of the following are risks for entrepreneurs in small business?
    m20: "d", // all of the above
  };

  // Loop through answers and select them
  for (const [questionName, answerValue] of Object.entries(answers)) {
    const radioButton = document.querySelector(
      `input[name="${questionName}"][value="${answerValue}"]`
    );
    if (radioButton) {
      radioButton.checked = true;
      console.log(
        `Selected answer "${answerValue}" for question ${questionName}`
      );
    } else {
      console.warn(
        `Could not find radio button for question ${questionName} with value ${answerValue}`
      );
    }
  }

  console.log("All answers have been selected. Review before submitting!");
})();
