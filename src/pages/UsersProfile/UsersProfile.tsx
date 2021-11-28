import {
  IonAvatar,
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonSlide,
  IonSlides,
  IonText,
  useIonModal,
} from "@ionic/react";
import {
  logoFacebook,
  logoLinkedin,
  globe,
  heartOutline,
  heart,
  timeOutline,
  closeCircle,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { Browser } from "@capacitor/core";

import Header from "../../components/Header/Header";
import "./UsersProfile.css";
import { AVATAR_IMAGE } from "../../config/constants";
import { dateFormatter } from "../../utils/dateFormatter";
import { loadDataUserBasic } from "../../services/auth.service";
import { fetchAllPostByUserId } from "../../services/posts.service";
import useCommons from "../../hooks/useCommons";

interface postInterface {
  attributes: {
    postDescription?: string;
    _id: string;
  }[];
  createdAt: string;
  imagesUrl: string[];
  title: string;
  type: string;
  updatedAt: string;
  userId: string;
  _id: string;
}

const ViewPosts: React.FC<{
  posts: postInterface[];
  profileImage: string;
  profileFullName: string;
}> = ({ posts, profileImage, profileFullName }) => {
  const [post, setPostToSend] = useState({});
  const [present, dismiss] = useIonModal(ViewPostInProfile, {
    post,
    profileImage,
    profileFullName,
    onDismiss: () => dismiss(),
  });

  const handleOpenModal = (post: postInterface) => {
    setPostToSend(post);
    present({
      cssClass: "modal-view__post",
    });
  };

  return (
    <>
      {posts.length === 0 ? (
        <IonItem className="ion-text-center">
          <IonLabel className="ion-text-center">Sin Posts</IonLabel>
        </IonItem>
      ) : (
        <>
          {posts.map((post) => (
            <IonCard
              key={post?._id}
              mode="md"
              className="ion-margin"
              onClick={() => handleOpenModal(post)}
            >
              <IonItem lines="none" className="ion-margin-top">
                <img
                  src={profileImage}
                  className="profile_posts_img"
                  slot="start"
                  alt="profile"
                />
                <span className="profile-nameProfession">
                  <strong>{profileFullName}</strong>
                  <IonText>Ingeniero</IonText>
                </span>
                <IonText mode="md" className="profile-post__followers">
                  300 seguidores
                </IonText>
              </IonItem>
              <div className="ion-margin-top profile-image__container">
                <img
                  className="profile-post__image"
                  src={post?.imagesUrl[0]}
                  alt="post"
                />
              </div>
              <IonItem lines="none">
                <p className="profile-post__description ion-text-justify">
                  {post?.attributes[0]?.postDescription
                    ? post?.attributes[0]?.postDescription
                    : "Sin descripción"}
                </p>
              </IonItem>
            </IonCard>
          ))}
        </>
      )}
    </>
  );
};

const ViewPostInProfile: React.FC<{
  post: postInterface;
  onDismiss: () => void;
  profileFullName: string;
  profileImage: string;
}> = ({ post, onDismiss, profileFullName, profileImage }) => {
  const getDate = (date: string) => {
    let currentDate = new Date(date);
    return `${currentDate.getDay()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
  };

  return (
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>
            <IonItem lines="none" className="ion-no-margin ion-no-padding">
              <IonChip slot="start">
                <IonAvatar>
                  <img
                    src={profileImage ? profileImage : AVATAR_IMAGE}
                    alt="profile"
                  />
                </IonAvatar>
                <IonLabel>{profileFullName}</IonLabel>
              </IonChip>
              <IonButton
                slot="end"
                onClick={() => onDismiss()}
                color="primary"
                fill="clear"
                size="large"
              >
                <IonIcon slot="icon-only" icon={closeCircle} />
              </IonButton>
            </IonItem>
          </IonCardSubtitle>
          <IonCardTitle>{post?.title}</IonCardTitle>
          <IonBadge color="primary">
            {post?.createdAt && getDate(post?.createdAt)}
          </IonBadge>
        </IonCardHeader>
        {post && (
          <IonSlides>
            {post?.imagesUrl?.map((image: string) => (
              <IonSlide key={image}>
                <img src={image} alt="" />
              </IonSlide>
            ))}
          </IonSlides>
        )}
        {post?.attributes[0] ? (
          <IonCardContent>
            {post?.attributes[0]?.postDescription}
          </IonCardContent>
        ) : (
          <IonCardContent>Sin Descripción</IonCardContent>
        )}
        <IonFooter>
          <IonGrid>
            <IonRow>
              <IonCol size="4" className="btn_footer_card">
                <IonIcon icon={timeOutline} />
                <IonLabel className="ion-text-center">
                  {post?.createdAt && dateFormatter(post?.createdAt)}
                </IonLabel>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonFooter>
      </IonCard>
    </IonContent>
  );
};

interface userProfileProps {
  match: {
    params: {
      userId: string;
    };
  };
}

interface profileUserInterface {
  birthDate: string;
  cityId: string;
  description: string;
  email: string;
  facebook: string;
  featured: Boolean;
  gender: string;
  id: string;
  last_name: string;
  linkedin: string;
  name: string;
  phone: string;
  profession_id: string;
  type: string;
  image_url?: string;
}

const UsersProfile: React.FC<userProfileProps> = ({ match }) => {
  const [like, setLiked] = useState(false);
  const { professions } = useCommons();
  const [toggleOptions, setToggleOptions] = useState("posts");
  const [profileUser, setProfileUser] = useState<profileUserInterface>();
  const [allPosts, setAllPosts] = useState<Array<any>>([]);

  const OpenApp = async (type: string, username: string) => {
    type === "facebook"
      ? await Browser.open({ url: `https://www.facebook.com/${username}/` })
      : await Browser.open({ url: `https://www.linkedin.com/in/${username}/` });
  };

  useEffect(() => {
    const getProfileUser = async () => {
      const response = await loadDataUserBasic(match.params.userId);
      setProfileUser(response.data.data);
      const { data } = await fetchAllPostByUserId(match.params.userId);
      setAllPosts(data.data);
    };
    getProfileUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.userId]);

  return (
    <IonPage>
      <IonContent id="dark-content__profile">
        <Header canBack={true} title="Perfil" />
        <div className="cover_menu_profileDetail">
          <IonImg
            className="cover_menu_profileDetail_img"
            src="https://images.pexels.com/photos/3525541/pexels-photo-3525541.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          />
          <div className="cover_menu_profileDetail-gradient" />
          <div className="data_profile_menu_middle ion-margin-horizontal">
            <IonIcon
              onClick={() => {
                if (profileUser?.facebook)
                  OpenApp("facebook", profileUser?.facebook);
              }}
              color="light"
              icon={logoFacebook}
            />
            <IonIcon
              onClick={() => {
                if (profileUser?.linkedin)
                  OpenApp("linkedin", profileUser?.linkedin);
              }}
              color="light"
              icon={logoLinkedin}
            />
            <img
              src={
                profileUser?.image_url ? profileUser?.image_url : AVATAR_IMAGE
              }
              alt=""
            />
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
          <IonText className="user_name">
            {profileUser?.name} {profileUser?.last_name}
          </IonText>
          <IonText className="profession">
            {
              professions.find(
                (profession) => profession._id === profileUser?.profession_id
              )?.name
            }
          </IonText>
        </div>
        <IonItem className="ion-margin-horizontal profile-description">
          <IonLabel className="description_profileDetail ion-text-center">
            {profileUser?.description}
          </IonLabel>
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
        {toggleOptions === "posts" ? (
          <ViewPosts
            posts={allPosts?.filter((post) => post.type !== "Project")}
            profileFullName={`${profileUser?.name} ${profileUser?.last_name}`}
            profileImage={profileUser?.image_url || ""}
          />
        ) : (
          <ViewPosts
            posts={allPosts?.filter((post) => post.type === "Project")}
            profileFullName={`${profileUser?.name} ${profileUser?.last_name}`}
            profileImage={profileUser?.image_url || ""}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default UsersProfile;
