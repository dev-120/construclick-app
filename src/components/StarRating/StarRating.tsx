import { IonIcon } from "@ionic/react";
import {
  starHalfSharp,
  starSharp,
  starOutline
} from "ionicons/icons";

interface ratingStar {
  rating: number;
  size?: string;
  color?: string;
}

const StarRating: React.FC<ratingStar> = ({ rating, size="small", color="primary" }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <IonIcon size={size} icon={starSharp} color={color} id="stars" key={i} />
      );
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(
        <IonIcon size={size} icon={starHalfSharp} color={color} id="stars" key={i} />
      );
    } else {
      stars.push(
        <IonIcon size={size} icon={starOutline} color={color} id="stars" key={i} />
      );
    }
  }
  return <>{stars}</>;
};


export default StarRating