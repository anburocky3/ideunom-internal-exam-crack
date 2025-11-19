(function () {
  // Prefill script for SPBA206M - Assignment 2
  // Each entry maps the radio group name (m21..m40) to the correct value
  // determined from the question text in the provided HTML.
  // Format: questionId: "value"  // brief rationale
  const answers = {
    // 1. Sales display are of ___________ forms -> Three forms
    m21: "a",

    // 2. Sales display is -> Interior / Exterior / Display at other places -> All the three
    m22: "d",

    // 3. Examples of Exterior display -> All the three (Shop front, Shop sign, Shop window)
    m23: "d",

    // 4. Other name of window dressing is -> Shop window
    m24: "c",

    // 5. How many types of window display are there? -> 3 (common classification)
    m25: "b",

    // 6. Sales promotion are of ________ types -> 3 (consumer/trade/sales force)
    m26: "b",

    // 7. Objective of sales promotion for consumers includes -> All the three
    m27: "d",

    // 8. Objective of sales promotion for retailers includes -> All the three
    m28: "d",

    // 9. Objective of sales promotion for salesforce includes -> All the three
    m29: "d",

    // 10. Methods of sales promotion -> All the three (Gifting, Coupons, Samples)
    m30: "d",

    // 11. How many types of product buying motives are available? -> 2 (Rational & Emotional)
    m31: "a",

    // 12. Methods used to evaluate the performance of salesforce -> All the three
    m32: "d",

    // 13. Marketing intermediators include -> All the three (Agents, Wholesalers, Retailers)
    m33: "d",

    // 14. Functions of intermediaries include -> All the three (Warehousing, Transportation, Packing)
    m34: "d",

    // 15. Supply chain Management include -> All the three (Inventory, Transportation, Information)
    m35: "d",

    // 16. Modes of transport -> All the three (Road, Rail, Air)
    m36: "d",

    // 17. Inventory is -> All the three (Raw Materials, WIP, Finished goods)
    m37: "d",

    // 18. Physical distribution includes -> All the three (Transportation, Warehousing, Material Handling)
    m38: "d",

    // 19. Physical distribution helps in -> All the three
    m39: "d",

    // 20. Which mode of transport has the highest speed? -> Air
    m40: "a",
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
    `Prefill complete. ${setCount} answers set for SPBA206M assignment 2.`
  );
})();
