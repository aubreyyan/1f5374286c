import React from 'react';
import {connectInfiniteHits} from 'react-instantsearch-dom';
import Hit from '../components/Hit';
import '../static/default.css';

class InfiniteHits extends React.Component {
    onSentinelIntersection = entries => {
        const {hasMore, refine} = this.props;

        entries.forEach(entry => {
            if (entry.isIntersecting && hasMore) {
                refine();
            }
        });
    };

    componentDidMount() {
        this.observer = new IntersectionObserver(this.onSentinelIntersection);
    }

    componentWillUnmount(){
        this.observer.disconnect();
    }

    render() {
        const { hits} = this.props;

        return (
            <div className="ais-InfiniteHits">
                <ul className="ais-InfiniteHits-list">
                    {hits.map(hit => (
                        <li key={hit.objectID} className="ais-InfiniteHits-item">
                            <Hit hit={hit} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default connectInfiniteHits(InfiniteHits);