import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CertificationTest() {

    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(300);
    let timer;

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            clearInterval(timer);
            // Faire quelque chose lorsque le compte à rebours est terminé
        }
    }, [countdown]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <div>
                <div className="_215b15" style={{ marginTop: -30 }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title126">
                                    <h2>Formation En Developpement Personnel</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq1256" style={{ marginBottom: 200 }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="certi_form rght1528">
                                    <div className="test_timer_bg">
                                        <ul className="test_timer_left">
                                            <li>
                                                <div className="timer_time">
                                                    <h4>04</h4>
                                                    <p>Questions</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="timer_time">
                                                    <h4 id="timer">{formatTime(countdown)}</h4>
                                                    <p>Minutes</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="certi_form">
                                    <div className="all_ques_lest">
                                        <div className="ques_item">
                                            <div className="ques_title">
                                                <span>Question 1 :-</span>
                                                What is the name of the first page you encounter after logging into your web page?
                                            </div>
                                            <div className="ui form">
                                                <div className="grouped fields">
                                                    <div className="field fltr-radio">
                                                        <div className="ui radio checkbox">
                                                            <input type="radio" name="example1" tabIndex={0} className="hidden" />
                                                            <label>Dashboard</label>
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <div className="ui radio checkbox">
                                                            <input type="radio" name="example1" tabIndex={0} className="hidden" />
                                                            <label>Security question page</label>
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <div className="ui radio checkbox">
                                                            <input type="radio" name="example1" tabIndex={0} className="hidden" />
                                                            <label>WP upgrade option</label>
                                                        </div>
                                                    </div>
                                                    <div className="field fltr-radio">
                                                        <div className="ui radio checkbox">
                                                            <input type="radio" name="example1" tabIndex={0} className="hidden" />
                                                            <label>WPAdmin</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ques_item">
                                            <div className="ques_title">
                                                <span>Question 2 :-</span>
                                                what is Wordpress?
                                            </div>
                                            <div className="ui search focus mt-15">
                                                <div className="ui form swdh30">
                                                    <div className="field">
                                                        <textarea rows={5} name="answer" id="id_answer" placeholder="Pls explain" defaultValue={""} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ques_item">
                                            <div className="ques_title">
                                                <span>Question 3 :-</span>
                                                How can you get involved with WordPress?
                                            </div>
                                            <div className="ui form">
                                                <div className="grouped fields">
                                                    <div className="field fltr-radio">
                                                        <div className="ui radio checkbox">
                                                            <input type="radio" name="example2" tabIndex={0} className="hidden" />
                                                            <label>Attend Word Camp</label>
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <div className="ui radio checkbox">
                                                            <input type="radio" name="example2" tabIndex={0} className="hidden" />
                                                            <label>Edit the Codex (documentation)</label>
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <div className="ui radio checkbox">
                                                            <input type="radio" name="example2" tabIndex={0} className="hidden" />
                                                            <label>Help in the Forums</label>
                                                        </div>
                                                    </div>
                                                    <div className="field fltr-radio">
                                                        <div className="ui radio checkbox">
                                                            <input type="radio" name="example2" tabIndex={0} className="hidden" />
                                                            <label>All of these</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ques_item">
                                            <div className="ques_title">
                                                <span>Question 4 :-</span>
                                                What ways to use WordPress?
                                            </div>
                                            <div className="ui form">
                                                <div className="grouped fields">
                                                    <div className="field fltr-radio">
                                                        <div className="ui radio checkbox">
                                                            <input type="radio" name="example3" tabIndex={0} className="hidden" />
                                                            <label>Arcade</label>
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <div className="ui radio checkbox">
                                                            <input type="radio" name="example3" tabIndex={0} className="hidden" />
                                                            <label>Blog</label>
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <div className="ui radio checkbox">
                                                            <input type="radio" name="example3" tabIndex={0} className="hidden" />
                                                            <label>Content Management System (CMS)</label>
                                                        </div>
                                                    </div>
                                                    <div className="field fltr-radio">
                                                        <div className="ui radio checkbox">
                                                            <input type="radio" name="example3" tabIndex={0} className="hidden" />
                                                            <label>All of the above</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="test_submit_btn" type="submit"
                                        onClick={() => {
                                            navigate("/certification-test-result")
                                        }}>Soumettre</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CertificationTest;