import TitleBottom from '../assets/images/others/title-bottom.png';

const About = () => {
    return (
        <div className="section about container">
            <h2 className="section__title">About Contest</h2>
            <img className="section__title__img" src={TitleBottom} alt="" />
            <p className="section__title__details">Some words about the contest</p>
            <div data-aos="fade-up" className="about__details">
                <h3>WIZ National Spell Bee is our effort to ensure Extra Learning, Extra Knowledge and Extra Vocabulary for your children through proven and effective methods. The Best for your Child, always!</h3>
                <br />
                <p>The exciting competition starts at the school level and progresses to the national level, through the inter-school and state-level competitions.</p>
                <br />
                <p>What's new?
                    This is the first spelling competition of its kind in India for school children with an innovative approach that combines learning with fun and competition.

                    More importantly, it's also a convenient and comprehensive language development programme for elementary and middle school children. Through this contest, students compete, learn and develop their language skills. They progress at their own pace and imbibe elements necessary for academic success.

                    Our main objective is to enhance the spelling, vocabulary and literary skills of children.

                    They are encouraged to explore the English language, expand their vocabulary and improve their communication and comprehension skills.

                    This helps students to improve their spelling skills, word usage, sentence construction, pronunciation and ultimately over all use of language that will aid early years of growth and development and empower them with skills necessary for their future careers.

                    The key thought was to engage the students through a different route, thereby engaging them in the practice of English language.

                    Bonus: Every participant receives a “WORD BANK” preparatory booklet , prepared by a panel of English teachers and academicians. The words are graded according to their age and class.</p>
            </div>
            <butoon data-aos="fade-up" className="top-banner__button top-banner__button--about rainbow rainbow-1">Check Result</butoon>
        </div>
    )
}

export default About;
