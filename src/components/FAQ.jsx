import { FAQS } from '../config/contact';

const FAQ = () => {
    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Questions</span>
                    <h2>Frequently asked questions</h2>
                    <p>Everything you need to know before booking your appointment.</p>
                </div>

                <div className="faq-list">
                    {FAQS.map(({ question, answer }) => (
                        <details key={question} className="faq-item">
                            <summary>{question}</summary>
                            <div className="faq-answer">{answer}</div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
