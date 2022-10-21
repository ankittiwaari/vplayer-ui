import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import BreadCrumbs from './components/BreadCrumbs';
import FileList from './components/FileList';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

function App() {
  const [fileList, setFileList] = useState({ files: [], directories: [] });
  const [playerFileExt, setPlayerFileExt] = useState('.mp4');
  const [playerFile, setPlayerFile] = useState('');
  const [pathStack, setPathStack] = useState([]);

  const fetchFiles = useCallback(async () => {
    let queryString = '';
    let basePath = pathStack.join('/');
    queryString = `?path=${basePath}`
    const files = await fetch(`${process.env.REACT_APP_API_SERVER}/files/list/${queryString}`);
    setFileList(await files.json());
  }, [pathStack])

  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  const changePath = (path) => {
    setPathStack([...pathStack, path]);
  }

  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className="col-12">
            <BreadCrumbs 
            pathStack={pathStack} 
            setPathStack={setPathStack}
            setPlayerFile={setPlayerFile} 
            />
          </div>
          <div className={`col-md-8 col-sm-12 ${playerFile === '' ? 'd-none':''}`}>
            <div className='player-wrap ratio ratio-16x9'>
              {playerFile && <VideoPlayer playerFile={playerFile} playerFileExt={playerFileExt} />}
            </div>
          </div>
          <div className={`${playerFile === '' ? 'col-12':'col-md-4 col-sm-12 '}`}>
            <FileList
              list={fileList}
              refreshList={changePath}
              playFile={setPlayerFile}
              setExt={setPlayerFileExt}
              pathStack={pathStack}
              setPathStack={setPathStack}
              playerFile={playerFile}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
