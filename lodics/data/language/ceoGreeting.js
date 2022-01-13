export const ceoGreetingKorean = {
  pageTitle: 'CEO 인사말',
  headLind: isMobile => (
    <p>
      "고객 가치를 최우선으로 하며, GIS 및 IT 관련 분야의 경험을 바탕으로
      {isMobile || <br />}
      새로운 미래기술 혁신을 목표로 하는
      <em> '융합기술 전문기업'</em>이 되겠습니다."
    </p>
  ),
  content: isMobile => (
    <>
      <p>
        로딕스는 2007년 “Leaders of Digital Convergence Systems”이라는 이름으로 설립하여
        {isMobile || <br />}
        독자적 전문기술을 보유한 기업으로 성장해왔습니다.
      </p>
      <br />
      <p>
        GIS, IT 관련 분야에서의 기술 융합을 시작으로 이 분야에서 타의 추종을 불허하는 전문 기술 기업으로
        자리매김하였으며
        {isMobile || <br />}
        IoT, ICT, Big Data, Cloud System 등 새로운 기술분야의 융합 기술 전문 기업으로써의 면모를 갖추어가고 있습니다.
      </p>
      <br />
      <p>
        누구나 할 수 있을 것 같지만 아무나 할 수 없는 기술을 확보하고 융합·발전시키고 있는
        {isMobile || <br />}
        작지만 결코 작지 않은 강한 기업임을 자랑스럽게 말씀드리고 싶습니다.
      </p>
      <br />
      <p>앞으로도 로딕스의 멈추지 않는 발전과 성장을 통해 고객과 함께 큰 꿈을 이루어 가겠습니다.</p>
    </>
  ),

  ceo: ['대표이사', '이 승 우'],
};

export const ceoGreetingEnglish = {
  pageTitle: 'Greetings from CEO',
  headLind: () => (
    <p>
      "We give our customer the highest value, and on the basis of our experience in GIS and IT-related fields we will
      become
      <em> 'a company specialized in fusion technology' </em>aiming at the innovation of new future technology."
    </p>
  ),
  content: () => (
    <>
      <p>
        Founded in 2007 under the name "Leaders of Digital Convergence System", LoDiCS has grown into a company owning
        proprietary expertise.
      </p>
      <br />
      <p>
        Starting with technological fusion in GIS and IT-related fields, it has become an unrivalled corporation
        specialized in this field, and we have been also taking on the aspect of a corporation specializing in
        convergence technology in new technology fields such as IOT, ICT, big data, cloud system, and so on.
      </p>
      <br />
      <p>
        We would like to proudly say that we are a small but strong company that is never too small and is in possession
        of technologies that anyone may think they can develop, but can hardly develop successfully, and that we have
        been developing them through convergence.
      </p>
      <br />
      <p>
        Based on the knowledge, experience and know-how of our chairman, who has been involved in the development of
        e-government and the promotion of information communication industry over the last 45 years, from the year of
        2013 we have also been providing a comprehensive consultancy related to pursuance ofthe projects in said fields
        at the level of a government.
      </p>
      <br />
      <p>
        In the future we will continue to realize big dreams together with our customers through sustained development
        and growth of LoDiCS.
      </p>
    </>
  ),
  ceo: ['President/CEO', 'James Lee Seung Woo/PhD.'],
};
