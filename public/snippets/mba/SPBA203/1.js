// Script to automatically select the correct answers for the Operations Management quiz
(function () {
  // Answers mapped to each question based on operations management knowledge
  const correctAnswers = {
    // Question 1: Which of the following is (are) important consideration(s) concerning activity times?
    m1: "d", // All of the above

    // Question 2: Which of the following are assignable cause?
    m2: "d", // All of the above (Large variations in hardness of material, Tool wear, Errors in setting)

    // Question 3: What is the reason of excessive friction between parts?
    m3: "c", // both (A) and (B) - Improper/lack of lubrication and Material of parts

    // Question 4: Which kind of labour force is required in case of Jobbing Production?
    m4: "a", // Highly Skilled

    // Question 5: What is the location of lower control limit in the X bar-R control chart?
    m5: "a", // 3 standard deviations below central line

    // Question 6: Which photographic technique is used to record path of motions of the members of the body during method study?
    m6: "b", // Cyclograph

    // Question 7: The term ________ implies the foregone profit due to inability of company to produce.
    m7: "a", // Opportunity cost

    // Question 8: In case of an OC curve, the risk of rejecting a good quality lot may vary between
    m8: "b", // 0.01 to 10%

    // Question 9: Objective of Work Study is to improve _______
    m9: "b", // Productivity

    // Question 10: Which of the following are activities of corrective maintenance?
    m10: "d", // All of the above (Overhauling, Emergency repairs, Modifications and improvements)

    // Question 11: Capacity decisions have a direct influence on performance of production system in respect of ________
    m11: "a", // Delivery performance

    // Question 12: Which of the following is not the characteristic of Project Production?
    m12: "d", // All of the above (Continuous flow of material, Highly mechanised material handling, Virtually zero manufacturing cycle time)

    // Question 13: Which of the following Principles of Management is not advocated by F W Taylor?
    m13: "d", // Involvement of workers in strategy planning

    // Question 14: How does 'structure' reduce external uncertainty arising out of human behaviour
    m14: "c", // both (A) and (B) - Research and planning, Forecasting

    // Question 15: The following is not a major contributor in the development of Control Charts and Sampling plan
    m15: "d", // J M Juran

    // Question 16: Limitations of Traditional cost accounting are
    m16: "c", // both (A) and (B) - Assumes factory as an isolated entity, It measures only the cost of producing

    // Question 17: Business is rated on which dimensions
    m17: "c", // both (A) and (B) - Market attractiveness, Business strength

    // Question 18: Like roots of a tree, ________of organization is hidden from direct view.
    m18: "b", // core competence

    // Question 19: OC curve of ideal sampling plan suggests that all lots less than 3% defectives have the probability of acceptance of ________.
    m19: "d", // 1

    // Question 20: Inadequate production capacity ultimately leads to
    m20: "d", // All of the above (Poor quality, Poor Customer Service, Poor inventory control)
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

  // Optional: Auto-click the save button
  const saveButton = document.getElementById("save");
  if (saveButton) {
    console.log(
      "Quiz answers selected. Click the 'SAVE' button to submit, or uncomment the next line to auto-submit"
    );
    // saveButton.click(); // Uncomment this line if you want to automatically submit the form
  } else {
    console.log("Save button not found");
  }
})();
