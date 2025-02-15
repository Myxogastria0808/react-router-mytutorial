import { useParams } from 'react-router-dom';

function PathParam() {
  const { id } = useParams<{ id: string }>();
  return <div>Path param: {id}</div>;
}

export default PathParam;
