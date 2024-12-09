import { useAppStore } from "@/store";

const Profile = () => {
  const { userInfo } = useAppStore();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState(null);
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      Profile
      <div>Email:{userInfo.email}</div>
    </div>
  );
};

export default Profile;
