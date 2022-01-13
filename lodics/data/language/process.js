import { BsPencilFill, BsPeopleFill } from 'react-icons/bs';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { FaHandsHelping } from 'react-icons/fa';

export const processKorean = {
  title: '채용절차',
  processList: [
    { key: 0, title: '지원서 접수', icon: <BsPencilFill />, url: 'img/recruitment/process01.png' },
    { key: 1, title: '서류전형', icon: <AiOutlineFileSearch />, url: 'img/recruitment/process02.png' },
    { key: 2, title: '면접전형', icon: <BsPeopleFill />, url: 'img/recruitment/process03.png' },
    { key: 3, title: '최종합격 통보', icon: <FaHandsHelping />, url: 'img/recruitment/process04.png' },
  ],
  processDetailList: [
    {
      num: '01',
      title: '지원서 접수',
      content: [
        '채용분야: 전략기획직, 연구개발직, GIS 기반 소프트웨어개발, 웹/서버개발 (신입 및 경력)',
        '채용일정: 상시모집',
        '지원방법: E-mail 제출 (lodics_recruit@lodics.com)',
      ],
    },
    {
      num: '02',
      title: '서류전형',
      content: [
        '지원자의 지원서(이력서, 자기소개서)를 중심으로 서류전형을 실시하며 개발 직군은 기술 테스트가 진행될 수 있습니다.',
        '지원자의 역량, 경험 등이 제대로 표현되지 않는 이력서는 검토 되지 않으며 이력서에 희망 연봉 기재 및 사진 등재는 필수 사항입니다.',
      ],
    },
    {
      num: '03',
      title: '면접',
      content: [
        '지원자 직무 분야의 필수 역량 및 능력을 평가하며 올바른 인성과 조직에 어울리는 자질을 종합적으로 평가하여 합격자를 선정합니다.',
      ],
    },
    {
      num: '04',
      title: '최종합격통보',
      content: ['최종합격 통보 후 채용일정에 따라 입사를 진행합니다.'],
    },
  ],
};
