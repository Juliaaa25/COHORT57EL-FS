type ProfileCardProps = {
  avatar: string;
  name: string;
  description: string;
};

function ProfileCard({ avatar, name, description }: ProfileCardProps) {
  return (
    <div className="profile-card">
      <img src={avatar} alt="User avatar" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;
