import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import styled from 'styled-components';
import GalleryItem from './GalleryItem';

const GalleryContainer = styled.div`
  width: 100%;
  padding: 10px;
  overflow: hidden;
`;

const GalleryInner = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Gallery = () => {
  const { ref, focusKey } = useFocusable();
  const items = new Array(50).fill('');

  return (
    <FocusContext.Provider value={focusKey}>
      <GalleryContainer ref={ref}>
        <GalleryInner>
          {items.map((item, i) => (
            <GalleryItem key={i} />
          ))}
        </GalleryInner>
      </GalleryContainer>
    </FocusContext.Provider>
  );
};

export default Gallery;
