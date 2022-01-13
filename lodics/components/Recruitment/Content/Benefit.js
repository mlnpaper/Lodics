import React from 'react';
import { PageSemiTitle, RecruitmentCard } from 'components';
import { palette } from '@styles/color';
import { Line, Circle, WrapCirCle } from '../styles';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'img/recruitment/benefit01.png',
    title: '복지제도',
    width: '33%',
    contents: '4대보험 가입\n청년내일채움공제 가입\n경조금 및 경조 휴가 부여',
  },
  {
    url: 'img/recruitment/benefit02.png',
    title: '인재육성',
    width: '33%',
    contents: '수시교육\n도서 구입비 지원',
  },
  {
    url: 'img/recruitment/benefit03.png',
    title: '여가활동',
    width: '33%',
    contents: '주 40시간제 실시\n상시 휴가제 운영\n사원들의 여가활동 보장',
  },
];
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const benefitList = [
  {
    key: 0,
    title: '복지제도',
    content: '4대보험 가입\n청년내일채움공제 가입\n경조금 및 경조 휴가 부여',
    url: 'img/recruitment/benefit01.png',
  },
  { key: 1, title: '인재육성', content: '수시교육\n도서 구입비 지원', url: 'img/recruitment/benefit02.png' },
  {
    key: 2,
    title: '여가활동',
    content: '주 40시간제 실시\n상시 휴가제 운영\n사원들의 여가활동 보장',
    url: 'img/recruitment/benefit03.png',
  },
];

export default function Benefit() {
  const benefitContent = benefitList => {
    return (
      <WrapCirCle>
        {benefitList.map(({ key, title, content, url }) => (
          <RecruitmentCard key={key} title={title} content={content} url={url} />
        ))}
      </WrapCirCle>
    );
  };

  const Card = (key, title, content, url) => {
    <>
      <Circle $theme={'image'} $image={url} $size={'300px'}>
        <div>{title}</div>
        <hr />
        <div>{content}</div>
      </Circle>
      {title !== '여가활동' ? <div>●●●</div> : null}
    </>;
  };

  return (
    <>
      <Line />
      <PageSemiTitle title='복리후생' color={palette.themeBlack} fontWeight={400} />
      {benefitContent(benefitList)}
    </>
  );
}
