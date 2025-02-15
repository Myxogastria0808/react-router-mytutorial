import { useLocation } from 'react-router-dom';

function Query() {
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>Query</h1>
      <p>Param: {query.get('param') ?? 'Default Value'}</p>
    </div>
  );
}

export default Query;
