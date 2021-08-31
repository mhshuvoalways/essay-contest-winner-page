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
          <li>
            The essay should be{" "}
            <strong>
              MINIMUM 750 WORDS for senior category and 500 words for junior
              category. There is no maximum word count.
            </strong>
          </li>
          <li>
            The submitted essay should be{" "}
            <strong>
              plagiarism free/no copy from internet/unique writing.{" "}
            </strong>
            Please check your essay in this link&nbsp;
            <strong>
              <a href="https://smallseotools.com/plagiarism-checker/">
                plagiarism checking tool
              </a>
            </strong>{" "}
            before sending to us and{" "}
            <strong>submit the screenshot of the plagiarism report.</strong>{" "}
            Plagiarized essay will not be accepted for the contest.&nbsp; This
            is to encourage participants to write their own essay. We highly
            discourage copying.{" "}
            <strong>SO NO CERTIFICATE FOR COPIED ESSAYS.&nbsp;</strong>
          </li>
          <li>
            {" "}
            <strong>Age proof </strong>is must <strong>only </strong>for junior
            category participants. Name of school, school website or email is{" "}
            <strong>not mandatory</strong> but you are encouraged to provide
            email address of principal/administration. Our team will inform the
            school authorities about the result if the participant is judged
            winner or did outstanding in the contest.{" "}
          </li>
          <li>
            You should write your{" "}
            <strong>name, age, city, phone number, email</strong>, photo (
            <strong>optional</strong>) in your entry in the very beginning
            before you start writing essay.
          </li>
          <li>You can participate every month.</li>
          <li>
            {" "}
            Participants are encouraged to write in such a way to avoid writing
            “I” or personal experiences unless the topic is such that you are
            compelled to write your experience.{" "}
          </li>
          <li>
            If any participants wish to send pictures, they should attach the
            images separately as jpg. Sending pictures is{" "}
            <strong>not mandatory.</strong>
          </li>
          <li>
            The decision of Jury member is the <strong>FINAL</strong> and{" "}
            <strong>no queries</strong> related to result will be entertained
          </li>
          <li>
            Deadline for submission is <strong>25th of every month</strong>
          </li>
          <li>
            For those participants, who (<strong>only those</strong>) does not
            have access of computer/laptop, they can <strong>EMAIL </strong>
            (essay.monomousumi@gmail.com) hand written essays following all the
            rules mentioned above.&nbsp; Hand written essays will{" "}
            <strong>not </strong>be published, but will be eligible for contest.
            They are equally eligible but the essay will not be published.&nbsp;
            So, if you do not have computer or laptop, you can just type in
            mobile in part wise. Hand written essay should be considered as the{" "}
            <strong>LAST OPTION.</strong>&nbsp;
          </li>
          <li>
            Selected essays will be published in the website with the{" "}
            <strong>name, photo and bio</strong> of the participants without the
            need of prior permission. Sending your essay to us itself gives us
            the authority to publish it from our side anywhere, online or in
            digital magazines. However, participant can tell in the very
            beginning that they are not interested in publishing the article
            anywhere.&nbsp;
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RulesRegulation;
