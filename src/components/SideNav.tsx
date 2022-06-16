import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useEffect } from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

const SideNavContainer = styled.div``;
const SideNavInner = styled.div`
  width: 250px;
  height: 100vh;
  padding: 30px 20px;
  background: #121212;

  &.has-focused-child {
    background-color: #59b94a;
  }
`;

const SideNav = () => {
  const { ref, focusSelf, focusKey, hasFocusedChild } = useFocusable({
    trackChildren: true,
  });

  useEffect(() => {
    focusSelf();
  }, []);

  const items = new Array(5).fill('');

  return (
    <FocusContext.Provider value={focusKey}>
      <SideNavContainer ref={ref}>
        <SideNavInner className={hasFocusedChild ? 'has-focused-child' : ''}>
          {items.map((item, i) => (
            <NavItem key={i} />
          ))}
        </SideNavInner>
      </SideNavContainer>
    </FocusContext.Provider>
  );
};

export default SideNav;
