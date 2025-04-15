(function () {
  // Answer mapping based on financial management principles
  const answers = {
    // 1. Degree of operating leverage can be computed by
    m21: "a", // % change in Operating Income/% change in sales

    // 2. Which formula may be used for 'EPS'?
    m22: "c", // Net Income - Dividend on Preferred Stock/Average outstanding Shares

    // 3. If cash inflows are not uniform, the calculation of pay-back period takes a
    m23: "c", // Cumulative Form

    // 4. The "information effect" refers to the notion that
    m24: "a", // a corporation's actions may convey information about its future prospects

    // 5. Return on assets can be computed by
    m25: "a", // Annual Net Income/Average total Assets

    // 6. Capital Employed is
    m26: "b", // Shareholders Funds + Long Funds

    // 7. Which is a capital expenditure?
    m27: "d", // All of the above (Research and Development Project, Project Generation, Project Expansion)

    // 8. Price Ratio Method is
    m28: "a", // Earning Yield Method

    // 9. Which is Walter formula, for dividend policy?
    m29: "a", // Vc = D + Ra/Rc (E - D)/Rc

    // 10. _______ is concerned with the maximization of a firm's stock price.
    m30: "a", // Shareholder wealth maximization

    // 11. In weighted average cost of capital, a company can affect its capital cost through
    m31: "d", // all of the above (policy of capital structure, policy of dividends, policy of investment)

    // 12. Stock selling price is Rs.45, an expected dividend is Rs.10 and an expected growth rate is 8% then cost of common stock would be
    m32: "d", // 30.22% [calculation: (10/45) + 0.08 = 0.2222 + 0.08 = 0.3022 or 30.22%]

    // 13. The Modigliani-Miller Proposition I without taxes states:
    m33: "a", // a firm cannot change the total value of its outstanding securities by changing its capital structure proportions

    // 14. Capital budgeting is related to _______
    m34: "a", // long term assets

    // 15. Financial leverage impacts the performance of the firm by
    m35: "d", // Increasing the volatility of the firm's net income

    // 16. What is the value of the tax shield if the value of the firm is Rs.5 million, its value if unlevered would be Rs.4.78 million, and the present value of bankruptcy and agency costs is Rs.360,000?
    m36: "d", // Rs.580,000 [calculation: 5,000,000 - 4,780,000 + 360,000 = 580,000]

    // 17. If a firm's EBIT changes by 20% and it has a degree of financial leverage (DFL) of 2.5, what is the expected change in earnings per share (EPS)?
    m37: "c", // 50% [calculation: 20% × 2.5 = 50%]

    // 18. Which of the following would not be financed from working capital?
    m38: "d", // A new personal computer for the office (capital expenditure, not working capital)

    // 19. Current ratio is 4:1. Net Working Capital is Rs.30,000. Find the amount of current Assets
    m39: "b", // Rs.40,000 [If CA/CL = 4, and CA-CL = 30,000, then CA = 4CL and 4CL-CL = 30,000, so 3CL = 30,000, CL = 10,000, and CA = 40,000]

    // 20. ___________ is the length of time between the firm's actual cash expenditure and its own cash receipt.
    m40: "b", // Cash conversion cycle
  };

  // Apply answers to the form
  console.log("Applying answers to Financial Management quiz...");

  for (const [questionId, answerValue] of Object.entries(answers)) {
    const radioSelector = `input[name="${questionId}"][value="${answerValue}"]`;
    const radioButton = document.querySelector(radioSelector);

    if (radioButton) {
      radioButton.checked = true;
      console.log(`Selected answer ${answerValue} for question ${questionId}`);
    } else {
      console.error(
        `Could not find radio button for question ${questionId}, answer ${answerValue}`
      );
    }
  }

  console.log("All answers applied! Review before submitting.");
})();
