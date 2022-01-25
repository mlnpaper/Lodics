import React, { useContext } from 'react';
import { PageTitle } from 'components';
import { WrapContents, SingleContents, MultipleContents } from './styles';
import GlobalStateContext from '@context/globalStateContext';
import { KeyTechnologyKorean, KeyTechnologyEnglish } from '@data/language/keyTechnology';

export default function KeyTechnology() {
  //useContext를 통해 전역적으로 관리하고 있는 value를 가져와서 사용
  const { language } = useContext(GlobalStateContext);

  //현재 언어 Check
  const currentLanguage = language === 'korea' ? KeyTechnologyKorean : KeyTechnologyEnglish;

  // table 구성을 고려하여 hard cording 진행
  return (
    <>
      <PageTitle title={currentLanguage.pagetitle} />
      <WrapContents>
        <SingleContents>
          <span>{currentLanguage.firstList[0]}</span>
          <ul>
            <li>{currentLanguage.firstList[1]}</li>
            <li>{currentLanguage.firstList[2]}</li>
            <li>{currentLanguage.firstList[3]}</li>
            <li>{currentLanguage.firstList[4]}</li>
          </ul>
        </SingleContents>
        <MultipleContents>
          <span>{currentLanguage.secondList[0]}</span>
          <div>
            <ul>
              <li>
                {currentLanguage.secondList[1]}
                <table>
                  <tbody>
                    <tr>
                      <td>{currentLanguage.secondList[2]}</td>
                      <td>{currentLanguage.secondList[3]}</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>{currentLanguage.secondList[4]}</li>
              <li>
                {currentLanguage.secondList[5]}
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={2}>{currentLanguage.secondList[6]}</td>
                    </tr>
                    <tr>
                      <td>{currentLanguage.secondList[7]}</td>
                      <td>{currentLanguage.secondList[8]}</td>
                    </tr>
                    <tr>
                      <td>{currentLanguage.secondList[9]}</td>
                      <td>{currentLanguage.secondList[10]}</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                {currentLanguage.secondList[11]}
                <table>
                  <tbody>
                    <tr>
                      <td>{currentLanguage.secondList[12]}</td>
                      <td>{currentLanguage.secondList[13]}</td>
                    </tr>
                    <tr>
                      <td>{currentLanguage.secondList[14]}</td>
                      <td>{currentLanguage.secondList[15]}</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>{currentLanguage.secondList[16]}</li>
            </ul>
            <ul>
              <li>
                {currentLanguage.secondList[17]}
                <table>
                  <tbody>
                    <tr>
                      <td>{currentLanguage.secondList[18]}</td>
                      <td>{currentLanguage.secondList[19]}</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                {currentLanguage.secondList[20]}
                <table>
                  <tbody>
                    <tr>
                      <td style={{ width: 250 }}>{currentLanguage.secondList[21]}</td>
                    </tr>
                    <tr>
                      <td>{currentLanguage.secondList[22]}</td>
                    </tr>
                    <tr>
                      <td>{currentLanguage.secondList[23]}</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                {currentLanguage.secondList[24]}
                <table>
                  <tbody>
                    <tr>
                      <td>{currentLanguage.secondList[25]}</td>
                      <td>{currentLanguage.secondList[26]}</td>
                    </tr>
                    <tr>
                      <td>{currentLanguage.secondList[27]}</td>
                      <td>{currentLanguage.secondList[28]}</td>
                    </tr>
                    <tr>
                      <td>{currentLanguage.secondList[29]}</td>
                      <td>{currentLanguage.secondList[30]}</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>{currentLanguage.secondList[31]}</li>
            </ul>
          </div>
        </MultipleContents>
        <SingleContents>
          <span>{currentLanguage.thirdList[0]}</span>
          <ul>
            <li>{currentLanguage.thirdList[1]}</li>
            <li>{currentLanguage.thirdList[2]}</li>
            <li>{currentLanguage.thirdList[3]}</li>
            <li>{currentLanguage.thirdList[4]}</li>
            <li>{currentLanguage.thirdList[5]}</li>
          </ul>
        </SingleContents>
      </WrapContents>
    </>
  );
}
