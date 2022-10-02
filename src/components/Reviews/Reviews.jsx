import { useState } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import * as S from './Reviews.styled';
import { Box } from '../Box';

const Reviews = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = reviews.length;
  const { name, job, text, image } = reviews[currentIndex];

  const nextReview = () => {
    if (currentIndex === totalReviews - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  const prevReview = () => {
    if (currentIndex === 0) {
      setCurrentIndex(totalReviews - 1);
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <>
      <Box
        as={S.Card}
        display='flex'
        justifyContent='center'
        alignItems='center'
        p={6}
        ml='auto'
        mr='auto'
        width={[1, 1 / 2]}>
        <S.Article>
          <Box py={4}>
            <S.ImageContainer>
              <S.Image
                src={image}
                alt={name}
              />
            </S.ImageContainer>
            <h2 className='name'>{name}</h2>
            <h3 className='job'>{job}</h3>
            <p className='reviewText'>{text}</p>
          </Box>
          <Box textAlign='center'>
            <S.Button
              type='button'
              bg='none'
              onClick={prevReview}>
              <BsFillCaretLeftFill />
            </S.Button>
            <S.Button
              type='button'
              onClick={nextReview}>
              <BsFillCaretRightFill />
            </S.Button>
          </Box>
        </S.Article>
      </Box>
    </>
  );
};

export default Reviews;
