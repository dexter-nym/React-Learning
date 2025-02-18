const ApiCard = ({ user }) => {
  return (
    <div className="card">
      <img src={user.download_url} alt="Profile" className="profile-photo" />
      <h2>{user.author}</h2>
    </div>
  );
};

export default ApiCard;
