import React, { useRef } from "react";

const RulesRegulation = ({ goTo }) => {
  const rulesRef = useRef(null);

  if (goTo) {
    rulesRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  return (
    <div ref={rulesRef} className="section container">
      <h2 className="section__title">Rules & Regulations</h2>
      <p className="section__title__border"></p>
      <p className="section__title__details">
        Please don't violate any restrictions
      </p>
      <div data-aos="fade-up">
        <ul>
          <li>There is no Registration FEE.</li>
          <li>
            The essay should be submitted by this
            <a href="https://weavermag.com/essay-contest/public"> link.</a>
          </li>
          <li>The essay should be <b>MINIMUM 750 WORDS for senior category and 500 words for junior category. There is no maximum word count.</b></li>
          <li>The submitted essay should be <b>plagiarism free/no copy from the internet/unique writing.</b> Please check your essay in this link plagiarism checking tool before sending to us. Plagiarized essays will not be accepted for the contest.  This is to encourage participants to write their own essay. </li>
          <li><b>Age proof</b> is must only for junior category participants. Name of the school, school website or email is not mandatory but you are encouraged to provide the email address of the principal/administration. Our team will inform the school authorities about the result if the participant is judged winner or did outstanding in the contest.</li>
          <li>You can participate every month.</li>
          <li>The decision of the Jury member is the <b>FINAL</b> and <b>no queries</b> related to the result will be entertained.</li>
          <li>Deadline for submission is <b>25th of every month.</b> The result can be checked and the certificate can be downloaded by this <a href="https://weavermag.com/essay-contest/public"> link.</a> in the first week of the next month. </li>
          <li>For those participants, who (only those) do not have access to a computer/laptop, they can EMAIL (<a href="essay.monomousumi@gmail.com"> essay.monomousumi@gmail.com</a> ) handwritten essays following all the rules mentioned above.  Hand written essays will not be published, but will be eligible for the contest. They are equally eligible to win. So, if you do not have a computer or laptop, you can just type in mobile part wise. Hand written essay should be considered as the <b>LAST OPTION.</b> </li>
          <li>Selected essays will be published on the website with the <b>name, photo and bio</b> of the participants without the need of prior permission. Sending your essay to us itself gives us the authority to publish it from our side anywhere, online or in digital magazines. </li>
        </ul>
      </div>
    </div>
  );
};

export default RulesRegulation;
