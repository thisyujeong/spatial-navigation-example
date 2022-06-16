import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useEffect } from 'react';
import styled from 'styled-components';

const NavItemContainer = styled.div<{ focused: boolean }>`
  font-size: 14px;
  border-radius: 4px;
  margin-bottom: 30px;
  padding: 12px;
  background: ${({ focused }) => (focused ? '#ff9c45' : '#ffffff')};
  outline: ${({ focused }) => (focused ? '2px solid #fff' : '')};
`;

const NavItem = () => {
  const { ref, focusKey, focusSelf, focused } = useFocusable();

  useEffect(() => {
    focusSelf();
  }, []);

  return (
    <FocusContext.Provider value={focusKey}>
      <NavItemContainer ref={ref} focused={focused}>
        <div>Nav Item</div>
      </NavItemContainer>
    </FocusContext.Provider>
  );
};

export default NavItem;
