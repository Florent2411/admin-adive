import React, { useState } from "react";
import { Avatar } from 'antd';

const Training = ({ training, onClick }) => {

    return (
        <>
            <div className="col-md-4">
                <div className="stream_1 mb-30">
                    <a style={{ cursor: "pointer" }}
                        //onClick={() => handleTrainingClick(props.training.id)}
                        onClick={onClick}
                        className="stream_bg">
                        <Avatar style={{ backgroundColor: 'aquamarine' }}>
                            <strong style={{ color: "#000" }}>{training.attributes.Theme.charAt(0)}</strong>
                        </Avatar>
                        <h4>{training.attributes.Theme}</h4>
                        <p>{training.attributes.description.slice(0, 100)}...<span /></p>
                    </a>
                </div>
            </div>

        </>
    );
};

export default Training;