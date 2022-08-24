import { FC, useState } from 'react';
import { Button, Window } from 'react-windows-xp';
import Draggable from 'react-draggable';
import './App.css';
import Desktop from './components/Desktop';

interface Window1StylingProps {
  position: string;
  top: string;
  left: string;
  width: string;
  height: string;
}

const App: FC = () => {
  const [shouldDisplayWindow, setShouldDisplayWindow] =
    useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [window1Styling, setWindowStyling] = useState<any>();

  const windowHandler = (value: boolean) => {
    setShouldDisplayWindow(value);
  };

  return (
    <div className="screen">
      <Desktop windowHandler={windowHandler} />
      {shouldDisplayWindow && !isFullscreen && (
        <Draggable>
          <Window
            showClose
            showMaximize
            showMinimize
            style={{
              position: 'absolute',
              top: '50px',
              left: '50px',
              width: '250px',
              height: '150px',
            }}
            title="Title"
            onMaximize={() => {
              setShouldDisplayWindow(false);
              setIsFullscreen(true);
            }}
            onClose={() => {
              setShouldDisplayWindow(false);
              setIsFullscreen(false);
            }}
          >
            Content
          </Window>
        </Draggable>
      )}
      {isFullscreen && !shouldDisplayWindow && (
        <Window
          showClose
          showMaximize
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100vh',
          }}
          title="Title"
          onMaximize={() => {
            setIsFullscreen(false);
            setShouldDisplayWindow(true);
          }}
          onClose={() => {
            setIsFullscreen(false);
            setShouldDisplayWindow(false);
          }}
        >
          Content
        </Window>
      )}
    </div>
  );
};

export default App;
