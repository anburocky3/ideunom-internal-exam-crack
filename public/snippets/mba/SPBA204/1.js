(function () {
  // Object containing questions and their likely correct answers
  const answers = {
    // Question 1: The only feasible purpose of financial management is
    m1: "a", // Wealth Maximization

    // Question 2: Financial management process deals with
    m2: "c", // Both a and b (Investments and Financing decisions)

    // Question 3: Agency cost consists of
    m3: "d", // All of the above (Binding, Monitoring, Opportunity and structure cost)

    // Question 4: Finance Function comprises
    m4: "d", // Procurement & effective use of funds

    // Question 5: The objective of wealth maximization takes into account
    m5: "d", // All of the above (Amount of returns expected, Timing of anticipated returns, Risk associated with uncertainty of returns)

    // Question 6: If the nominal rate of interest is 10% per annum and there is quarterly compounding, the effective rate of interest will be:
    m6: "d", // 10.38% per annum

    // Question 7: Relationship between annual nominal rate of interest and annual effective rate of interest, if frequency of compounding is greater than one:
    m7: "a", // Effective rate > Nominal rate

    // Question 8: Heterogeneous cash flows can be made comparable by
    m8: "c", // Either a or b (Discounting technique or Compounding technique)

    // Question 9: CAPM accounts for:
    m9: "b", // Systematic risk

    // Question 10: The relationship between two financial variables can be expressed in:
    m10: "d", // Either of the above (Pure ratio, Percentage, Rate or time)

    // Question 11: Net operating profit ratio determines ___________ while net profit ratio determines
    m11: "a", // Overall efficiency of the business, working efficiency of the management

    // Question 12: While calculating Earnings per share, if both equity and preference share capitals are there, then
    m12: "a", // Preference share is deducted from the net profit

    // Question 13: Collection of debtors
    m13: "c", // Has no effect on current ratio

    // Question 14: Which of the following are current assets?
    m14: "c", // Short-term loans and advances

    // Question 15: Bond, debentures and term loans falls under:
    m15: "c", // Non-current liabilities

    // Question 16: Financing activities brings changes in
    m16: "c", // Both a and b (Size and composition of owner's equities, Borrowing of the enterprise)

    // Question 17: Opportunities to achieve further growth within current businesses are:
    m17: "a", // Intensive Opportunities

    // Question 18: During trade recession, the goods are sold at
    m18: "a", // Depression price

    // Question 19: Cost of Preference Capital can be obtained by
    m19: "d", // KP = D + (M.V. - N.P./n)/(M.V. + N.P./2)

    // Question 20: Capital budgeting actually the process of making investment decisions in
    m20: "c", // Fixed Assets
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
