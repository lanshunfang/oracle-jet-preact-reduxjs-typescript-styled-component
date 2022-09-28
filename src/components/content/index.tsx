import "ojs/ojdrawerlayout";
import "ojs/ojnavigationlist";

import { h } from "preact";
import { useCallback } from "preact/compat";


import { useState } from 'preact/hooks';
import styled from 'styled-components';


import Counter from '../counter/counter';


const ComponentWrapper = styled.div`
 
`;



const ContentWrapper = styled.div`
 
`;



const NavListWrapper = styled.div`
  padding: 10px;
`;



export function Content() {
  const [startOpened, setStartOpened] = useState(false);
  const [tabName, setTabName] = useState<'counter' | 'demo-2'>('counter');

  const startToggle = useCallback(() => {
    setStartOpened(!startOpened);
  }, [startOpened]);


  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">


      <ComponentWrapper>
        <oj-drawer-layout start-opened={startOpened} class="demo-full-height">
          <div class="demo-padding">
            <div class="demo-controls">
              <oj-button id="buttonOpener" display="icons" onojAction={startToggle}>
                <span slot="startIcon" class="oj-ux-ico-menu"></span>
                Start
              </oj-button>
            </div>

            <ContentWrapper>

              {tabName === 'counter' && <Counter name="Preact Function Component for Oracle JET, with Redux/Styled-Component." />}
              {tabName === 'demo-2' && <div>DEMO 2</div>}

              
            </ContentWrapper>
    
          </div>
          <NavListWrapper slot="start" class="demo-drawer-start" id="demo-drawer-start">
            <div class="demo-drawer-header">
              <div>
                <h6>Welcome</h6>
              </div>
              <oj-button
                id="buttonCloser"
                display="icons"
                chroming="borderless"
                onojAction={startToggle}>
                <span slot="startIcon" class="oj-ux-ico-close"></span>
                Close
              </oj-button>
            </div>
            <oj-navigation-list>

              <ul>
                <li id="counter"><a href="#" onClick={() => setTabName('counter')}>Counter</a></li>
                <li><a href="#" onClick={() => setTabName('demo-2')}>Demo 2</a></li>
              </ul>
            </oj-navigation-list>
          </NavListWrapper>
        </oj-drawer-layout>
      </ComponentWrapper>

    </div>
  );
};
