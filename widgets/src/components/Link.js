import React from 'react';

const Link = ({ path, children }) => {
    const onClick = event => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', path);
        window.dispatchEvent(new PopStateEvent('popstate'));
    };

    return (
        <a className="item" href={path} onClick={onClick}>
            {children}
        </a>
    );
};

export default Link;
