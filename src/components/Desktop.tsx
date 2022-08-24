import React, { FC, useEffect } from 'react';
import styled from 'styled-components';

const DesktopContainer = styled.div`
  background-image: url(/windows-xp-desktop-background-wallpaper-azul-800x600.jpg);
  width: fit-content;
`;


interface DesktopProps {
  windowHandler: (value: boolean) => void;
}

const Desktop: FC<DesktopProps> = ({ windowHandler }) => {
  useEffect(() => {
    /* draggable element */
    const item = document.querySelector('.item');

    item?.addEventListener('dragstart', dragStart);

    function dragStart(e: any) {
      e.dataTransfer.setData('text/plain', e.target.id);
      setTimeout(() => {
        e.target.classList.add('hide');
      }, 0);
    }

    /* drop targets */
    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {
      box.addEventListener('dragenter', dragEnter);
      box.addEventListener('dragover', dragOver);
      box.addEventListener('dragleave', dragLeave);
      box.addEventListener('drop', drop);
    });

    function dragEnter(e: any) {
      e.preventDefault();
      e?.target?.classList?.add('drag-over');
    }

    function dragOver(e: any) {
      e.preventDefault();
      e.target.classList.add('drag-over');
    }

    function dragLeave(e: any) {
      e.target.classList.remove('drag-over');
    }

    function drop(e: any) {
      e.target.classList.remove('drag-over');

      // get the draggable element
      const id = e.dataTransfer.getData('text/plain');
      const draggable = document.getElementById(id);

      // add it to the drop target
      e.target.appendChild(draggable);

      // display the draggable element
      draggable?.classList.remove('hide');
    }
  });

  return (
    <DesktopContainer>
      <div className="drop-targets">
        <div className="column">
          <div className="box">
            <div>
              <div
                className="item yellow"
                id="item"
                draggable="true"
                onDoubleClick={() => windowHandler(true)}
              >
                <p className="text">Name</p>
              </div>
            </div>
          </div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="column">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="column">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="column">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="column">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="column">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="column">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="column">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="column">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    </DesktopContainer>
  );
};

export default Desktop;
