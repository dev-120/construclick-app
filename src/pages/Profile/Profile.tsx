import {
  IonButton,
  IonCard,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonPage,
  IonText,
} from "@ionic/react";
import { logoFacebook, logoLinkedin, logoWordpress, thumbsUp, shareSocial, chatbox } from "ionicons/icons";

import Header from "../../components/Header/Header";
import "./Profile.css";

const mockupProps = {
  coverPhoto:
    "https://images.pexels.com/photos/3525541/pexels-photo-3525541.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  profilePhoto:
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  profileName: "JANTH KOHEMAN",
};

const randomInt = () => {
  return Math.floor(Math.random() * (100 - 1) + 5);
};

const mockupPost = [
  {
    id: 1,
    coverPhoto:
      "https://images.pexels.com/photos/3525541/pexels-photo-3525541.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    profilePhoto:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    profileName: "JANTH KOHEMAN",
    postDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit risus nec tincidunt convallis. Mauris ac massa diam. Fusce vel laoreet turpis, suscipit ultricies sem. Nulla facilisi. Donec vehicula ligula ut purus euismod cursus. Nunc euismod odio vel ipsum egestas, eu porttitor nisl pharetra. Donec eu ornare eros, ut convallis.",
    likes: randomInt(),
    comments: randomInt(),
  },
  {
    id: 2,
    coverPhoto:
      "https://images.pexels.com/photos/3525541/pexels-photo-3525541.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    profilePhoto:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    profileName: "JANTH KOHEMAN",
    postDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit risus nec tincidunt convallis. Mauris ac massa diam. Fusce vel laoreet turpis, suscipit ultricies sem. Nulla facilisi. Donec vehicula ligula ut purus euismod cursus. Nunc euismod odio vel ipsum egestas, eu porttitor nisl pharetra. Donec eu ornare eros, ut convallis.",
    likes: randomInt(),
    comments: randomInt(),
  },
  {
    id: 3,
    coverPhoto:
      "https://images.pexels.com/photos/3525541/pexels-photo-3525541.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    profilePhoto:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    profileName: "JANTH KOHEMAN",
    postDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit risus nec tincidunt convallis. Mauris ac massa diam. Fusce vel laoreet turpis, suscipit ultricies sem. Nulla facilisi. Donec vehicula ligula ut purus euismod cursus. Nunc euismod odio vel ipsum egestas, eu porttitor nisl pharetra. Donec eu ornare eros, ut convallis.",
    likes: randomInt(),
    comments: randomInt(),
  },
];

const ProfilePosts = () => {
  return(
    <>
    {mockupPost.map((post) => (
      <IonCard mode="md" className="ion-margin">
        <IonItem lines="none">
          <img src={post.profilePhoto} className="profile_posts_img" slot="start"/>
          <span><strong>{post.profileName}</strong></span>
          <IonButton slot="end">Seguir</IonButton>
        </IonItem>
        <IonItem lines="none">
          <p>
            {post.postDescription}
          </p>
        </IonItem>
        <IonItem>
          <IonButton color="primary" fill="clear" slot="start" ><IonIcon icon={thumbsUp} slot="start" /><strong>{post.likes}</strong></IonButton>
          <IonButton color="primary" fill="clear" ><IonIcon icon={chatbox} slot="start" /><strong>{post.comments}</strong></IonButton>
          <IonButton color="primary" fill="clear" slot="end"><IonIcon icon={shareSocial} slot="icon-only" /></IonButton>
        </IonItem>
      </IonCard>
    ))}
    </>
  )
}

const Profile = () => {
  return (
    <IonPage>
      <IonContent>
        <Header canBack={true} title="Perfil" />
        <div className="cover_menu_profileDetail">
          <IonImg
            className="cover_menu_profileDetail_img"
            src="https://images.pexels.com/photos/3525541/pexels-photo-3525541.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          />
          <div className="cover_menu_gradient" />
          <div className="data_profile_menu_middle ion-margin-horizontal">
            <IonIcon color="primary" icon={logoFacebook} />
            <IonIcon color="primary" icon={logoLinkedin} />
            <IonIcon color="primary" icon={logoWordpress} />
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
            <div className="data_button_profileDetail_menu">
              <IonButton color="primary" className="follow_button">
                Seguir
              </IonButton>
            </div>
          </div>
        </div>
        <div className="ion-text-center ion-margin-top">
          <IonText className="user_name">JANTH KOHEMAN</IonText>
        </div>
        <IonItem className="ion-margin">
          <IonText color="primary" className="ion-text-right" slot="start">
            <span>Publicaciones</span>
          </IonText>
          <IonText color="primary" className="ion-text-right" slot="end">
            <span>100K Seguidores</span>
          </IonText>
        </IonItem>
        <IonItem className="ion-margin">
          <p className="description_profileDetail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
            nulla consequat, malesuada lacus a, feugiat lectus. Nam luctus metus
            ullamcorper libero accumsan bibendum. Nunc facilisis sapien tempor
            feugiat tincidunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. In hac habitasse platea dictumst. Duis turpis
            ipsum, aliquam a ornare eget, pretium id diam. Fusce elit risus,
            malesuada vitae mi sit amet, mattis elementum nulla. Maecenas non
            porta odio. Curabitur id fermentum tellus.
          </p>
        </IonItem>
        <ProfilePosts />
      </IonContent>
    </IonPage>
  );
};

export default Profile;

// https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260
// https://images.pexels.com/photos/3525541/pexels-photo-3525541.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260
