import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import PropTypes from 'prop-types';

export default function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATH" className="text-right">
      <Button type="primary">Make priority </Button>;
    </fetcher.Form>
  );
}

UpdateOrder.propTypes = {
  order: PropTypes.object.isRequired,
};
async function action({ request,params }) {
    return null;
}
