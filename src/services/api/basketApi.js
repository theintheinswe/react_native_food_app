import {useState} from 'react';
import {api} from '../../hooks/useApi';
import qs from 'qs';

const basketApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBasketDataApi = async () => {
    try {
      const response = await api.post(
        '/get_bag_products_by_user.php',
        qs.stringify({
          user: 'asgeriFood',
        }),
      );
      if (response.ok) {
        setData(response.data);
        setLoading(false);
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    getBasketDataApi,
  };
};

export default basketApi;
