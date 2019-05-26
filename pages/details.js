import {withRouter} from 'next/router';

const Details = withRouter(props => (
    <h1>
        {props.router.query.objectId}
    </h1>
));

export default Details;