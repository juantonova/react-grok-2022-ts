import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Page({ state, dispatch }) {
  const { page } = useParams()

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/pages/${page}?limit=${state.limit}`)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'GET_CITIES', payload: data })
      })
  }, [page])
}

export default Page;