import React, { useEffect, useState } from 'react'
import ButtonList from './ButtonList';
import VideoPlayContainer from './VideoPlayContainer';
import { useDispatch } from 'react-redux';
import { liveChatStop, toggleMenu } from '../utils/slices';

const MainContainer = () => {

  return (
    <div>
      <ButtonList />
      <VideoPlayContainer/>
    </div>
  )
}

export default MainContainer;