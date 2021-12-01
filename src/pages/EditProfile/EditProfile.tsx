import { useState, useEffect } from "react";
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import Header from "../../components/Header/Header";

import "./EditProfile.css";
import useUser from "../../hooks/useUser";
import { Camera, CameraResultType } from "@capacitor/core";
import useCommons from "../../hooks/useCommons";
import { uploadImage } from "../../services/image.service";
import { dataURLtoFile } from "../../utils/image";
import { update } from "../../services/auth.service";

const EditProfile = () => {
  const { profileUser, getDataOneUser } = useUser();
  const { cities, professions } = useCommons();

  useEffect(() => {
    getDataOneUser(profileUser?.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [profilePicture, setProfilePicture] = useState<any>();
  const [firstName, setFirstName] = useState(profileUser?.name);
  const [lastName, setLastName] = useState(profileUser?.last_name);
  const [email, setEmail] = useState(profileUser?.email);
  const [tel, setTel] = useState(profileUser?.phone);
  const [description, setDescription] = useState(profileUser?.description);
  const [gender, setGender] = useState(profileUser?.gender);
  const [city, setCity] = useState(profileUser?.cityId);
  const [profession, setProfession] = useState(profileUser?.profession_id);
  const [facebookUsername, setFacebookUsername] = useState(
    profileUser?.facebook
  );
  const [linkedinUsername, setLinkedinUsername] = useState(
    profileUser?.linkedin
  );

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
    });
    console.log(image);
    setProfilePicture(image ?? "");
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    let imageUrl = "";
    if (typeof profilePicture === 'object' && profilePicture.hasOwnProperty("dataUrl")) {
      const responseImage = await uploadImage(
        dataURLtoFile(profilePicture?.dataUrl, "image.png")
      );
      imageUrl = responseImage.data.data;
    }
    const { id, ...newData } = profileUser;
    console.log(newData)
    await update({
      id,
      newData: {
        ...newData,
        image_url: (imageUrl.length > 0 ) ? imageUrl : newData?.image_url,
        phone: tel,
        cityId: city,
        email,
        description,
        name: firstName,
        last_name: lastName,
        facebook: facebookUsername,
        linkedin: linkedinUsername,
        gender,
        profession_id: profession,
      },
    });
    await getDataOneUser(id)
  };

  return (
    <IonPage>
      <Header canBack={true} />
      <IonContent>
        <h1 className="ion-text-center">Editar perfil</h1>
        <form onSubmit={submitHandler}>
          <IonGrid>
            <IonRow className="ion-justify-content-center ion-align-items-center">
              <IonAvatar onClick={takePicture}>
                {profilePicture ? (
                  <img src={profilePicture?.dataUrl} alt="" />
                ): (
                  <img src={profileUser?.image_url} alt="" />
                )}
              </IonAvatar>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Nombre</IonLabel>
                  <IonInput
                    type="text"
                    autocomplete="name"
                    value={firstName}
                    onIonChange={(e) => setFirstName(e.detail.value!)}
                    required
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Apellidos</IonLabel>
                  <IonInput
                    type="text"
                    autocomplete="additional-name"
                    value={lastName}
                    onIonChange={(e) => setLastName(e.detail.value!)}
                    required
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Telefono</IonLabel>
                  <IonInput
                    autocomplete="tel"
                    value={tel}
                    onIonChange={(e) => setTel(e.detail.value!)}
                    type="tel"
                    required
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Correo Electronico</IonLabel>
                  <IonInput
                    type="email"
                    autocomplete="email"
                    value={email}
                    onIonChange={(e) => setEmail(e.detail.value!)}
                    required
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Descripción</IonLabel>
                  <IonInput
                    type="text"
                    value={description}
                    onIonChange={(e) => setDescription(e.detail.value!)}
                    required
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Genero</IonLabel>
                  <IonSelect
                    value={gender}
                    onIonChange={(e) => setGender(e.detail.value!)}
                    cancelText="Cancelar"
                    okText="Listo"
                  >
                    <IonSelectOption value="Masculino">
                      Masculino
                    </IonSelectOption>
                    <IonSelectOption value="Femenino">Femenino</IonSelectOption>
                    <IonSelectOption value="Otro">Otro</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Ciudad</IonLabel>
                  <IonSelect
                    value={city}
                    onIonChange={(e) => {
                      console.log(e.detail.value);
                      setCity(e.detail.value);
                    }}
                    cancelText="Cancelar"
                    okText="Listo"
                  >
                    {cities.map(({ _id, name }) => (
                      <IonSelectOption key={_id} value={_id}>
                        {name}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Profesión</IonLabel>
                  <IonSelect
                    value={profession}
                    onIonChange={(e) => setProfession(e.detail.value!)}
                    cancelText="Cancelar"
                    okText="Listo"
                  >
                    {professions.map(({ _id, name }) => (
                      <IonSelectOption key={_id} value={_id}>
                        {name}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Facebook</IonLabel>
                  <IonInput
                    type="text"
                    value={facebookUsername}
                    onIonChange={(e) => setFacebookUsername(e.detail.value!)}
                    required
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Linkedin</IonLabel>
                  <IonInput
                    type="text"
                    value={linkedinUsername}
                    onIonChange={(e) => setLinkedinUsername(e.detail.value!)}
                    required
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonButton type="submit" expand="block">
              Actualizar perfil
            </IonButton>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default EditProfile;
