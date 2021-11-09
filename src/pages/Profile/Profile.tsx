import {
  IonBadge,
  IonButton,
  IonCard,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonText,
} from "@ionic/react";
import {
  logoFacebook,
  logoLinkedin,
  globe,
  heartOutline,
  heart,
} from "ionicons/icons";
import React, { useState } from "react";

import Header from "../../components/Header/Header";
import "./Profile.css";
import profilePoster from "../../assets/profile__poster.png";
import StarRating from "../../components/StarRating/StarRating";
import useUser from "../../hooks/useUser";
import { AVATAR_IMAGE } from "../../config/constants";

const mockupProps = {
  coverPhoto:
    "https://images.pexels.com/photos/3525541/pexels-photo-3525541.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  profilePhoto:
    "https://images.unsplash.com/photo-1529088746738-c4c0a152fb2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
  profileName: "Johnny Pacheco",
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
      "https://images.unsplash.com/photo-1529088746738-c4c0a152fb2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
    profileName: "Johnny Pacheco",
    profession: "Ingeniero",
    postDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit risus nec tincidunt convallis. Mauris ac massa diam. Fusce vel laoreet turpis, suscipit ultricies sem. Nulla facilisi. Donec vehicula ligula ut purus euismod cursus. Nunc euismod odio vel ipsum egestas, eu porttitor nisl pharetra. Donec eu ornare eros, ut convallis.",
    postsPhoto:
      "https://images.unsplash.com/photo-1563166423-482a8c14b2d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80 750w",

    likes: randomInt(),
    comments: randomInt(),
  },
  {
    id: 2,
    coverPhoto:
      "https://images.pexels.com/photos/3525541/pexels-photo-3525541.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    profilePhoto:
      "https://images.unsplash.com/photo-1529088746738-c4c0a152fb2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
    profileName: "Jhonny Pacheco",
    profession: "Ingeniero",
    postDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit risus nec tincidunt convallis. Mauris ac massa diam. Fusce vel laoreet turpis, suscipit ultricies sem. Nulla facilisi. Donec vehicula ligula ut purus euismod cursus. Nunc euismod odio vel ipsum egestas, eu porttitor nisl pharetra. Donec eu ornare eros, ut convallis.",
    postsPhoto:
      "https://images.unsplash.com/photo-1563166423-482a8c14b2d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80 750w",
    likes: randomInt(),
    comments: randomInt(),
  },
  {
    id: 3,
    coverPhoto:
      "https://images.pexels.com/photos/3525541/pexels-photo-3525541.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    profilePhoto:
      "https://images.unsplash.com/photo-1529088746738-c4c0a152fb2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80",
    profileName: "Johnny Pacheco",
    profession: "Ingeniero",
    postDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit risus nec tincidunt convallis. Mauris ac massa diam. Fusce vel laoreet turpis, suscipit ultricies sem. Nulla facilisi. Donec vehicula ligula ut purus euismod cursus. Nunc euismod odio vel ipsum egestas, eu porttitor nisl pharetra. Donec eu ornare eros, ut convallis.",
    postsPhoto:
      "https://images.unsplash.com/photo-1563166423-482a8c14b2d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80 750w",
    likes: randomInt(),
    comments: randomInt(),
  },
];

const polishPostDescription = (text: string) => {
  let newText = text;
  let newTextArray = newText
    .match(/[a-zA-Z]+/g)
    ?.slice(0, 23)
    .join(" ");
  return newTextArray + "...";
};

const ProfilePosts: React.FC = () => {
  const [posts, setPosts] = useState(mockupPost);
  

  return (
    <>
      {posts.map((post, index) => (
        <IonCard key={post.id} mode="md" className="ion-margin">
          <IonItem lines="none" className="ion-margin-top">
            <img
              src={post.profilePhoto}
              className="profile_posts_img"
              slot="start"
            />
            <span className="profile-nameProfession">
              <strong>{post.profileName}</strong>
              <IonText>{post.profession}</IonText>
            </span>
            <IonText mode="md" className="profile-post__followers">
              300 seguidores
            </IonText>
          </IonItem>
          <IonItem lines="none" className="ion-margin-top">
            <img className="profile-post__image" src={post.postsPhoto} />
          </IonItem>
          <IonItem lines="none">
            <p className="profile-post__description ion-text-justify">
              {polishPostDescription(post.postDescription)}
            </p>
          </IonItem>
          <IonItem>
            <PostsLikes post={post} />
          </IonItem>
        </IonCard>
      ))}
    </>
  );
};

interface propsPostsLikes {
  post: {
    id: number;
    likes: number;
  };
}

const PostsLikes: React.FC<propsPostsLikes> = ({ post }) => {
  const [liked, setLiked] = useState<string>("black");
  const [postLikes, setPostLikes] = useState(post.likes);
  const [toggleClick, setTooggleClick] = useState(false);

  const textClickHandler: any = (e: Event) => {
    if (!toggleClick) {
      setLiked("#ef7b03");
      setPostLikes((postlikes) => postlikes + 1);
      setTooggleClick(true);
    } else {
      setLiked("black");
      setPostLikes((postlikes) => postlikes - 1);
      setTooggleClick(false);
    }
  };

  return (
    <>
      <strong slot="end" onClick={textClickHandler} style={{ color: liked }}>
        {postLikes} Me gusta
      </strong>
    </>
  );
};

const Profile = () => {
  const [like, setLiked] = useState(false);
  const [rating, setRating] = useState(3.5);
  const [toggleOptions, setToggleOptions] = useState("posts");
  const { profileUser } = useUser();
  return (
    <IonPage>
      <IonContent id="dark-content__profile">
        <Header canBack={true} title="Perfil" />
        <div className="cover_menu_profileDetail">
          <IonImg
            className="cover_menu_profileDetail_img"
            src={profilePoster}
          />
          <div className="cover_menu_profileDetail-gradient" />
          <div className="data_profile_menu_middle ion-margin-horizontal">
            <IonIcon color="light" icon={logoFacebook} />
            <IonIcon color="light" icon={logoLinkedin} />
            <img src={profileUser?.image_url ? profileUser?.image_url : AVATAR_IMAGE} alt="" />
            <div className="data_icon_profileDetail_menu-right">
              <IonBadge className="badge-like">
                <IonIcon icon={globe} />
              </IonBadge>
              {like ? (
                <IonBadge
                  onClick={() => setLiked(!like)}
                  className="badge-like"
                >
                  <IonIcon icon={heart} />
                </IonBadge>
              ) : (
                <IonBadge
                  onClick={() => setLiked(!like)}
                  className="badge-like"
                >
                  <IonIcon icon={heartOutline} />
                </IonBadge>
              )}
            </div>
          </div>
        </div>
        <div className="ion-text-center  username_title">
          <IonText className="user_name">{profileUser?.name} {profileUser.last_name}</IonText>
          <IonText className="profession">Ingeniero</IonText>
        </div>
        <IonItem className="ion-margin-top ion-margin-horizontal ratings-profile">
          <StarRating rating={rating} size="large" color="warning" />
        </IonItem>
        <IonItem className="ion-margin-horizontal profile-description">
          <p className="description_profileDetail">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five cent make a type specimen book.
          </p>
        </IonItem>
        <IonItem className="profile-followers ion-text-center">
          <IonLabel>300 Seguidores</IonLabel>
        </IonItem>
        <IonSegment
          onIonChange={(e) => setToggleOptions(e.detail.value!)}
          className="profile-options__projectsOrPosts"
          value={toggleOptions}
        >
          <IonSegmentButton value="projects" mode="md">
            <IonLabel>Projectos</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="posts">
            <IonLabel>Publicaciones</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {toggleOptions === "posts" ? <ProfilePosts /> : <ProfilePosts />}
      </IonContent>
    </IonPage>
  );
};

export default Profile;

// https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260
// https://images.pexels.com/photos/3525541/pexels-photo-3525541.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260
