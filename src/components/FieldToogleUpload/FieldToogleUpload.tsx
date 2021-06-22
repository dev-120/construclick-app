import React from "react";
import { cloudUpload } from 'ionicons/icons';
import { IonToggle, IonIcon, IonButton } from "@ionic/react";

import './FieldToogleUpload.css';

type Props = {
    label: string;
    value?: boolean;
    setChecked?: Function;
    withButton?: boolean;
}

const FieldToogleUpload : React.FC<Props> = ({ label, value = false, setChecked = () => {}, withButton = false}) => {
    return (
        <div className="field_toggle_upload" >
            {!withButton && <span>{label}</span>}
            {withButton && <IonButton size="small" fill="outline" >{label}</IonButton>}
            <IonToggle checked={value} onIonChange={e => setChecked(e.detail.checked)} />
            <hr/>
            <IonIcon icon={cloudUpload} />
        </div>
    )
};

export default FieldToogleUpload;
