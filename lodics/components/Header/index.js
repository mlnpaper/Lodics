import React from 'react'
import Link from 'next/link'
import { WapContent, Content, WrapNav, Ul, Li } from './styles'

export default function Header({}) {
  return (
    <>
      <WapContent>
        <Content>
          <Link href={'/'}>
            <a>
              <img
                src="img/LoDiCS logo_W.png"
                style={{ width: '200px', height: '39px', cursor: 'pointer' }}
              />
            </a>
          </Link>
          <WrapNav>
            <nav>
              <ul>
                <Link href={'/company'}>
                  <a>
                    <li>
                      <div>Company</div>
                      <div>회사소개</div>
                    </li>
                  </a>
                </Link>
                <Link href={'/business'}>
                  <a>
                    <li>
                      <div>Business</div>
                      <div>비즈니스</div>
                    </li>
                  </a>
                </Link>
                <Link href={'/productsServices'}>
                  <a>
                    <li>
                      <div>{'Products & Service'}</div>
                      <div>{'제품 & 서비스'}</div>
                    </li>
                  </a>
                </Link>
                <Link href={'/recruitment'}>
                  <a>
                    <li>
                      <div>Recruitment</div>
                      <div>채용정보</div>
                    </li>
                  </a>
                </Link>
              </ul>
            </nav>
          </WrapNav>
          <select
            style={{ backgroundColor: 'black', color: 'white', padding: 5 }}
          >
            <option value={''} disabled selected hidden>
              Language
            </option>
            <option>Korea / 한국</option>
            <option>Global / English</option>
          </select>
        </Content>
      </WapContent>
    </>
  )
}
