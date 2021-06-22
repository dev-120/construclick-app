import React from "react";
import { IonToggle } from "@ionic/react";

import './QuestionTogle.css';

type Props = {
    label: string;
    value?: boolean;
    setChecked?: Function
}

const FieldToogleUpload : React.FC<Props> = ({ label, value = false, setChecked = () => {}}) => {
    return (
        <div className="question_tootle_container" >
            <span>{label}</span>
            <IonToggle checked={value} onIonChange={e => setChecked(e.detail.checked)} />
        </div>
    )
};

export default FieldToogleUpload;
