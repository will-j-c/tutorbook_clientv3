import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import UserProfileCard from '../cards/UserProfileCard';

function UserProfile() {
  const [cookies] = useCookies();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const { uuid } = useParams();

  const callUserDetailRoute = async (route) => {

    axios.get(route, {headers: {Authorization: `Bearer ${cookies.idToken}`}}).then(
      (response) => {
        setData(response.data);
        return;
      },
      (error) => {
        toast.error(error.message);
        navigate('/login');
        return;
      }
    );
  };

  useEffect(() => {
    callUserDetailRoute(`users/${uuid}`);
  }, []);

  return data ? (
    <div className="container flex justify-center">
      <UserProfileCard data={data} />
    </div>
  ) : (
    ''
  );
}

export default UserProfile;