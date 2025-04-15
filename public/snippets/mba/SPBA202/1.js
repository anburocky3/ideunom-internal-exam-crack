(function () {
  // Define the answers based on marketing knowledge
  const answers = {
    // 1. _____ consists of all the potential customers sharing a particular need or want.
    m1: "b", // Market

    // 2. Marketing is the process of planning and executing the ____ of goods.
    m2: "d", // All these above (Conception, Pricing, Promotion)

    // 3. Marketing Concept holds that the key to achieving ____ goods consists in determining the needs and wants of target markets.
    m3: "c", // Organizational

    // 4. Marketing function(s) consists of ____
    m4: "d", // All these above (Sales force, advertising, Product Management)

    // 5. ______ Constis of people, equipment and procedures to gather, sort, analyse, evaluate and distribute needed
    m5: "a", // MIS (Marketing Information System)

    // 6. A marketing intelligence system is a set of procedures and Sources used by managers to obtain their ____ about potential development
    m6: "c", // every day information

    // 7. Marketing Research is the systematic design ____ of data.
    m7: "d", // All these above (Collection, Analysis, Reporting)

    // 8. A population can be subdivided into age group(s) of __________
    m8: "d", // All these above (Pre School, School age Children, Young adults)

    // 9. Cultural factors exert the broadast and deepest influence on ______
    m9: "a", // Consumer behaviour

    // 10. The level of reference group influence varies among ____
    m10: "b", // Products and brands

    // 11. _____ is also shaped the stage of the family life cyle
    m11: "c", // Consumption

    // 12. Consumer information Sources fall into ____
    m12: "d", // All these above (Personal Sources, Commercial Sources, Experiential Source)

    // 13. The main product differentiation(s) relates to ____
    m13: "d", // All these above (Features, Performance, Durability)

    // 14. A Strategy of ___ aims at increaseing the aesthetic appeal of the product
    m14: "a", // Style improvement

    // 15. Manufacturers react by spending substantial amounts of money on Consumer - directed ____ to maintain Strong brand preference.
    m15: "c", // Advertising and Promotion

    // 16. A Company will often introduce additional brands in the same category is called ____
    m16: "c", // Multibrands

    // 17. A marketing _____ performs the work of moving goods from producers to Consumers
    m17: "a", // Channel

    // 18. _____ consists of a manufacturer Selling directly to the final Customer
    m18: "b", // Zero - level Channel

    // 19. Sales Personnel service as the Company's personal link to the ____
    m19: "a", // Client

    // 20. To attract Sales representatives, the Company has to develop an attractive _____
    m20: "a", // Compensation Package
  };

  // Function to select the answers
  function selectAnswers() {
    let count = 0;
    // Loop through each answer and select the corresponding radio button
    for (const [questionName, answer] of Object.entries(answers)) {
      const selector = `input[name="${questionName}"][value="${answer}"]`;
      const radioButton = document.querySelector(selector);

      if (radioButton) {
        radioButton.checked = true;
        count++;
        console.log(`Selected answer for question ${questionName}: ${answer}`);
      } else {
        console.warn(
          `Could not find radio button for ${questionName} with value ${answer}`
        );
      }
    }

    console.log(
      `✅ Selected ${count} answers out of ${
        Object.keys(answers).length
      } questions`
    );
    console.log("You can now click the SAVE button to submit your answers.");
  }

  // Execute the function
  selectAnswers();
})();
