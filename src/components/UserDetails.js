import { useParams, useSearchParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  //params of routing

  return (
    <>
      <div>Details about user {userId}</div>
    </>
  );
};

export default UserDetails;
