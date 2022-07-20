import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './UserGuide.css'
import { useEffect, useState } from "react";


export default function AlternateTimeline() {

 




  return (
    <div> 
    <h1 className='user-header'>User Guide</h1>
    <div className ='users'>
      <div className ='creators'>
      <Timeline position="alternate">
      <h2 className='creators-header'>For creators</h2>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent id='content'>Connect to metamask</TimelineContent>
      </TimelineItem>
      <TimelineItem id='content'>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent id='content' >Enter your project details</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent id='content'>Hit send</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent id='content'>Repeat</TimelineContent>
      </TimelineItem>
  
    </Timeline>
    </div>
    </div>
    
    <div className ='users'>
      <div className ='creators'>
      <Timeline position="alternate">
      <h2 className='creators-header'>For investors</h2>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent id='content'>Find a project</TimelineContent>
      </TimelineItem>
      <TimelineItem id='content'>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent id='content' >Read project details</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent id='content'>Hit fund button</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent id='content'>Repeat</TimelineContent>
      </TimelineItem>
  
    </Timeline>
    </div>
    </div>
    </div>
  );
}
