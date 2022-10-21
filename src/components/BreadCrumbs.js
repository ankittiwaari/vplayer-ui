const BreadCrumbs = (props) => {
    let counter = 0;
    const html = props.pathStack.map(item => {
        counter++;
        return (<li
            role="button"
            key={`bl-${counter}`}
            index={counter}
            className="breadcrumb-item"
            aria-current="page"
            onClick={(e) => {
                const end = e.target.getAttribute('index');
                const pathStackNew = props.pathStack.slice(0, end);
                props.setPathStack([...pathStackNew])
                props.setPlayerFile('')
            }}
        >
            {item}
        </li>)
    });
    return (<nav aria-label="breadcrumb">
        <ol className="breadcrumb mt-3">
        <li
            role="button"
            className="breadcrumb-item"
            aria-current="page"
            onClick={(e) => {
                props.setPathStack([])
            }}
        >
            <img className="home-breadcrumb" src="home.svg" alt="Home"/>
        </li>
            {html}
        </ol>
    </nav>);
}
export default BreadCrumbs;