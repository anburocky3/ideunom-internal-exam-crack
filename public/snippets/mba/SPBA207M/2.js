(function () {
  // Prefill script for SPBA207M - Assignment 2 (Advertising and Sales Promotion)
  // Maps radio group names (m21..m40) to the chosen option values
  // Each mapping has a short rationale in the comment above it.
  const answers = {
    // 1. Advertisement is a type of -> indirect marketing
    m21: "b",

    // 2. Direct mail advertising is suitable in case of -> retailer
    m22: "a",

    // 3. Trade fair is which type of advertising -> display advertising
    m23: "c",

    // 4. Cigarrette warning in ads is example of -> legal environment
    m24: "c",

    // 5. Ads help customers take purchasing decisions in advance -> convenient purchasing
    m25: "d",

    // 6. Advertising creates desire/taste for -> new products
    m26: "b",

    // 7. Creating ideas, benefits, selecting appeals -> message strategy
    m27: "a",

    // 8. Irregular in nature -> sales promotion
    m28: "b",

    // 9. Income, education, occupation -> demographic
    m29: "c",

    // 10. Print media by manufacturer (reply cards, catalogues) -> direct media
    m30: "a",

    // 11. Tools planned to generate faster purchase response -> sales promotion
    m31: "c",

    // 12. Four types of POP display: window, counter, outdoor, demo van -> counter displays
    m32: "a",

    // 13. ASCI full form -> Advertising Standard Council of India
    m33: "b",

    // 14. Change of customer behaviour measured by -> customer audit
    m34: "b",

    // 15. If product is related to warranty, price is related to -> attractiveness
    m35: "d",

    // 16. Direct advertising media -> catalogues
    m36: "a",

    // 17. TV is most powerful tool because -> all of the above
    m37: "d",

    // 18. AIDA model -> Attention, Interest, Desire, Action
    m38: "a",

    // 19. Giving cash/award for regular use -> patronage reward
    m39: "d",

    // 20. Best promotional tool -> word of mouth publicity
    m40: "c",
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
    `Prefill complete. ${setCount} answers set for SPBA207M assignment 2.`
  );
})();
