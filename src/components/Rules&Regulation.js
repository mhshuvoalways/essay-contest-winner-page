import React, { useRef } from 'react';
import TitleBottom from '../assets/images/others/title-bottom.png';

const RulesRegulation = ({ goTo }) => {
    const rulesRef = useRef(null)

    if (goTo) {
        rulesRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    return (
        <div ref={rulesRef} className="section container">
            <h2 className="section__title">Rules & Regulations</h2>
            <img className="section__title__img" src={TitleBottom} alt="" />
            <p className="section__title__details">Please don't violate any restrictions
            </p>
            <div data-aos="fade-up">
                <p>
                    * This competition is only for students studying in classes 1 to 12.<br />

                    *There will be a nominal registration fee for each level towards the cost of study materials & conduction. The fees paid is non refundable.<br />

                    * WIZ National Spell Bee is a Progressive Learning methodology, comprising School level, Inter-school, State level and National Mega Finals.<br />

                    * This competition starts at the school level simultaneously in all the cities throughout India. It progresses from the School level to the Interschool, leading to the State level and culminating in the National Mega Final.<br />

                    * School Level Competition:<br />

                    * Students have to prepare from the school-level preparatory booklet WORD BANK, comprising 1,500 words and exercises provided. Students who qualify in the School level will be eligible for the Inter-school competition<br />

                    * Schools may opt for Online/Offline competition as per their convenience. In cases of bulk enrolment, study materials can be availed online or hard copy can also be sent to the school for each participant.<br />

                    * Inter-school Competition:<br />

                    * Inter-school contestants are requested to practise from WORD BANK of the school and Inter-school levels. The Inter-school preparatory booklet comprises 1,250 words and exercises. Seventy percent questions will be from these books. To answer the remaining thirty percent questions, participants must inculcate the habit of regularly reading books and English newspapers. They also need to watch the news and movies. Students who qualify in the Inter-school level will be eligible for the state level<br />

                    * State Level Competition:<br />

                    * State Level contestants are requested to practise from WORD BANK of the school, Inter-school and State levels. The State Level preparatory booklet comprises 1,250 words and exercises. Seventy percent questions will be from these books. To answer the remaining thirty percent questions, participants must inculcate the habit of regularly reading books and English newspapers. They also need to watch the news and movies. Students who qualify in the State level will be eligible for the National level. Toppers are selected from each State for the National Level Mega Final.<br />

                    * The State Level rank holders are decided based on the oral score only .It will be conducted along with National mega final Oral<br />

                    * National Mega Final:<br />

                    State-level toppers of each class are eligible for the National Mega Final. Study materials and instructions for National Mega Final will be provided<br />

                    * Any incorrect/fraudulent entries will be disqualified<br />

                    * Results will be updated on the website and can be accessed using the personal login id, which is your registered mobile number<br />

                    * Prizes will be sent to the respective schools<br />

                    * The amount of the cash award depends on the sponsors and number of participants for the contest<br />

                    * If the name of your school doesn't appear in the drop down list please email us at info@wizspellbee.com<br />

                    * The organisers reserve the right to alter the terms and conditions of the competition at their discretion without any notice<br />
                </p>
            </div>
        </div>
    )
}

export default RulesRegulation;
