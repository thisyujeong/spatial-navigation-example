import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import styled from 'styled-components';

const GalleryItemContainer = styled.div`
  padding: 15px;
`;
const GalleryItemBox = styled.div<{ focused: boolean }>`
  background: #187af2;
  width: 250px;
  height: 140px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #fff;
  outline: ${({ focused }) => (focused ? '6px solid #ff9c45' : 'none')};
`;

const GalleryItem = () => {
  const { ref, focused, focusKey } = useFocusable();

  return (
    <FocusContext.Provider value={focusKey}>
      <GalleryItemContainer ref={ref}>
        <GalleryItemBox focused={focused}>
          <span>item</span>
        </GalleryItemBox>
      </GalleryItemContainer>
    </FocusContext.Provider>
  );
};

export default GalleryItem;
