import { useState } from 'react';
import dropArrow from '../assets/images/faq-arrow-down.svg'

const FAQ = ({ questions }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
        console.log(index, activeIndex)
    };

    const renderedQuestions = questions.map((question, index) => {
        const isActive = index === activeIndex;

        return (
            <div key={index} className="question">
                <div className="question-header" onClick={() => handleClick(index)}>
                    <h3>{question.title}</h3>
                    {
                        !isActive ?
                            <img src={dropArrow} alt='drop arrow' className='faq-drop-arrow' />
                            :
                            <img src={dropArrow} alt='drop arrow' className='faq-drop-arrow active' />
                    }
                </div>
                <div className={`question-content ${isActive ? 'active' : ''}`}>
                    <p>{question.answer}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="faq">
            {renderedQuestions}
        </div>
    );
};

export default FAQ;
