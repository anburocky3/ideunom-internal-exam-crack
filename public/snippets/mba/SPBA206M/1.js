(function () {
  // Prefill script for SPBA206M - Assignment 1
  // Each entry maps the radio group name (m1..m20) to the correct value
  // determined from the question text in the provided HTML.
  // Format: questionId: "value"  // brief rationale
  const answers = {
    // 1. Departmentisation of sales organisation is by -> All the three
    m1: "d",

    // 2. Departmentisation of sales organisation is by -> All the three
    m2: "d",

    // 3. Recruitment is which process -> Positive
    m3: "a",

    // 4. Selection is ____________ process -> Negative
    m4: "b",

    // 5. Sources of recruitment are -> All the three
    m5: "d",

    // 6. The other name is psychometer test is -> Mental test
    m6: "b",

    // 7. Methods of training are -> Both (On the Job & Off the Job)
    m7: "c",

    // 8. Stages in selling process is -> 7
    m8: "c",

    // 9. The first step in selling process -> Prospecting
    m9: "b",

    // 10. Completing sales process is called -> Closing Sales
    m10: "a",

    // 11. Objectives of Sales forecasting is -> All the three
    m11: "d",

    // 12. Past sales method is also called -> Historical Method
    m12: "a",

    // 13. In which method, salesmen are asked to estimate sales? -> Sales force Opinion
    m13: "a",

    // 14. Which statistical methods are used to find measures of relationship? -> Both
    m14: "c",

    // 15. Factors determining sales forecasting are -> All the three
    m15: "d",

    // 16. Which is called as the process of estimating future sales? -> Sales forecasting
    m16: "a",

    // 17. Sales unit may be -> All the three
    m17: "d",

    // 18. Which is a quantitative goal assigned to a sales unit for a specific period of time? -> Sales quota
    m18: "a",

    // 19. Sales Quota -> All the three
    m19: "d",

    // 20. Which is the other name for financial Quota? -> Budget Quota
    m20: "a",
  };

  // Select the corresponding radio for each question
  let setCount = 0;
  for (const q in answers) {
    const selector = `input[type="radio"][name="${q}"][value="${answers[q]}"]`;
    const radio = document.querySelector(selector);
    if (radio) {
      radio.checked = true;
      // Dispatch events in case the page listens for change
      radio.dispatchEvent(new Event("change", { bubbles: true }));
      setCount++;
      console.log(`Selected ${answers[q]} for ${q}`);
    } else {
      console.warn(`Could not find radio for ${q} value ${answers[q]}`);
    }
  }

  console.log(
    `Prefill complete. ${setCount} answers set for SPBA206M assignment 1.`
  );
})();
