import React from 'react'
import { PageSemiTitle } from 'components'
import { palette } from '@styles/color'
import { Line, ProcessTable, Circle, WrapCirCle } from '../styles'
import { BsPencilFill, BsPeopleFill, BsArrowRight } from 'react-icons/bs'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { FaHandsHelping } from 'react-icons/fa'

const processList = [
  {
    title: '지원서 접수',
    icon: <BsPencilFill />,
    url: 'img/basic_bg.jpg',
  },
  {
    title: '서류전형',
    icon: <AiOutlineFileSearch />,
    url: 'img/basic_bg.jpg',
  },
  {
    title: '면접전형',
    icon: <BsPeopleFill />,
    url: 'img/basic_bg.jpg',
  },
  {
    title: '최종합격 통보',
    icon: <FaHandsHelping />,
    url: 'img/basic_bg.jpg',
  },
]

const processDetailList = [
  {
    index: '01',
    title: '지원서 접수',
    content: [
      '채용분야: 전략기획직, 연구개발직, GIS 기반 소프트웨어개발, 웹/서버개발 (신입 및 경력)',
      '채용일정: 상시모집',
      '지원방법: E-mail 제출 (lodics_recruit@lodics.com)',
    ],
  },
  {
    index: '02',
    title: '서류전형',
    content: [
      '지원자의 지원서(이력서, 자기소개서)를 중심으로 서류전형을 실시하며 개발 직군은 기술 테스트가 진행될 수 있습니다.',
      '지원자의 역량, 경험 등이 제대로 표현되지 않는 이력서는 검토 되지 않으며 이력서에 희망 연봉 기재 및 사진 등재는 필수 사항입니다.',
    ],
  },
  {
    index: '03',
    title: '면접',
    content: [
      '지원자 직무 분야의 필수 역량 및 능력을 평가하며 올바른 인성과 조직에 어울리는 자질을 종합적으로 평가하여 합격자를 선정합니다.',
    ],
  },
  {
    index: '04',
    title: '최종합격통보',
    content: ['최종합격 통보 후 채용일정에 따라 입사를 진행합니다.'],
  },
]

export default function Process() {
  const processContent = processList => {
    return processList.map(({ title, icon }) => (
      <>
        <div>
          <Circle $theme={'image'} $image={'img/basic_bg.jpg'} $size={'150px'}>
            {icon}
          </Circle>
          <span>{title}</span>
        </div>

        {title !== '최종합격 통보' ? <BsArrowRight /> : null}
      </>
    ))
  }

  const processDetailContent = processDetailList => {
    return processDetailList.map(({ index, title, content }) => (
      <>
        <tr>
          <th>
            <div>{index}</div>
            <div>{title}</div>
          </th>
          <td>
            <ul>
              {content.map(content => (
                <li>{content}</li>
              ))}
            </ul>
          </td>
        </tr>
      </>
    ))
  }

  return (
    <>
      <Line />
      <PageSemiTitle
        title="모집분야 및 자격요건"
        color={palette.themeBlack}
        fontWeight={400}
      />
      <WrapCirCle>{processContent(processList)}</WrapCirCle>

      <ProcessTable>
        <tbody>{processDetailContent(processDetailList)}</tbody>
      </ProcessTable>
    </>
  )
}
