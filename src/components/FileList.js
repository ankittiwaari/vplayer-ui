function FileList(props) {
    let count = 0;
    let listHtmlDirs = props.list.directories.map(listItem => {
        return <li
            role="button"
            className="list-group-item"
            onClick={props.refreshList.bind(null, listItem)}
            key={++count}>
            <img src="folder.svg" alt=""/>{listItem}
        </li>
    });
    let listHtmlFiles = props.list.files.map(listItem => {
        return <li className="list-group-item"
            role="button"
            onClick={() => {
                const filePath = encodeURI(`${props.pathStack.join('/')}/${listItem}`);
                props.playFile(filePath);
                const exploded = listItem.split('.');
                const ext = exploded[exploded.length - 1];
                props.setExt(ext);
            }}
            key={++count}>
            <img src="video.svg" alt=""/>{listItem}
        </li>
    });
    return (
        <ul className="list-group file-list">
            {listHtmlDirs}
            {listHtmlFiles}
        </ul>
    );
}
export default FileList;