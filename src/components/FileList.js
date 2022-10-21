function FileList(props) {
    const listClass = props.playerFile === '' ? 'file-list_item col-md-4 col-sm-3' : 'col-12';
    let listInnerClass = 'file-list_inner-wrap p-2 mt-3 d-flex file-list_inner-wrap m-2 align-items-center justify-content-center';
    let count = 0;
    const listHtmlDirs = props.list.directories.map(listItem => {
        return <div
            role="button"
            className={listClass}
            onClick={props.refreshList.bind(null, listItem)}
            key={++count}>
            <div className={listInnerClass}>
                {listItem}
            </div>
        </div>
    });
    const listHtmlFiles = props.list.files.map(listItem => {
        return <div className={listClass}
            role="button"
            onClick={() => {
                const filePath = encodeURI(`${props.pathStack.join('/')}/${listItem}`);
                props.playFile(filePath);
                const exploded = listItem.split('.');
                const ext = exploded[exploded.length - 1];
                props.setExt(ext);
            }}
            key={++count}>
            <div className={listInnerClass}>
                {listItem}
            </div>
        </div>
    });
    return (
        <div className="row">
            {listHtmlDirs}
            {listHtmlFiles}
        </div>
    );
}
export default FileList;