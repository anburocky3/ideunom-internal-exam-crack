(function () {
  // Prefill script for SPBA207M - Assignment 1 (Advertising and Sales Promotion)
  // Each mapping sets the radio group name (m1..m20) to the chosen value
  // with a short rationale in comments.
  const answers = {
    // 1. Definition quoted is from American Marketing Association
    m1: "b",

    // 2. Main goal to introduce new products to consumers -> advertising
    m2: "b",

    // 3. Most popular print media available to advertiser -> newspaper
    m3: "c",

    // 4. Comparing past sales and advertisement, trying experiments -> evaluation of advertising
    m4: "c",

    // 5. Selecting style, tone, words for making ads -> message execution
    m5: "b",

    // 6. Digital marketing includes email, Facebook, Twitter -> all of the above
    m6: "d",

    // 7. Advertisement is mass communication -> non-personal
    m7: "b",

    // 8. Example of pride appeal -> 5-star (status/pride)
    m8: "c",

    // 9. Socioeconomic classification, lifestyle, personality -> psychographic
    m9: "d",

    // 10. Generates message not directed at any one person -> radio advertising (broadcast)
    m10: "a",

    // 11. Basket of various sales promotion methods -> sales promotion mix
    m11: "a",

    // 12. Effective point-of-purchase display guides customer at decision point
    m12: "a",

    // 13. Generate quick response, offers extra value -> price offers
    m13: "b",

    // 14. Ethical issues in marketing communication -> marketing perpetuates stereotyping
    m14: "a",

    // 15. On-pack coupons are example of consumer-targeted sales promotion
    m15: "b",

    // 16. Which is not outdoor media -> television
    m16: "c",

    // 17. Rational/logical appeal -> feature (product attribute)
    m17: "d",

    // 18. DAGMAR is a marketing communication model
    m18: "a",

    // 19. TRPs -> Target Rating Points
    m19: "a",

    // 20. Cost of printing, media support, artwork, distribution -> communication cost
    m20: "b",
  };

  let setCount = 0;
  for (const q in answers) {
    const selector = `input[type="radio"][name="${q}"][value="${answers[q]}"]`;
    const radio = document.querySelector(selector);
    if (radio) {
      radio.checked = true;
      radio.dispatchEvent(new Event("change", { bubbles: true }));
      setCount++;
      console.log(`Selected ${answers[q]} for ${q}`);
    } else {
      console.warn(`Could not find radio for ${q} value ${answers[q]}`);
    }
  }

  console.log(
    `Prefill complete. ${setCount} answers set for SPBA207M assignment 1.`
  );
})();
