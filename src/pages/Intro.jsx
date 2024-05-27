import React, { useEffect } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Container id="Intro" data-aos="fade-left" data-aos-duration="1000">
      <MainIntro>
        <Text1>안녕하세요</Text1>
        <Text1>
          <StyledTypewriterWrapper>
            <StyledTypewriter
              options={{
                strings: ["Front-end", "프론트엔드"],
                autoStart: true,
                loop: true,
              }}
            />
          </StyledTypewriterWrapper>
          개발자
        </Text1>
        <Text1>
          <Text2>'송유정'</Text2> 입니다.
        </Text1>
      </MainIntro>
      <SubIntro>
        <Br>
          코드 리뷰와 팀원과의 회의를 통해 다양한 개발자들의 시각을 이해하고
          소통하는 것을 즐깁니다.
        </Br>
        <Br>
          도전적이고 흥미로운 일에 대해 두려움 없이 실행해나가며, 항상 새로운
          것을 배우고자 하는 열정을 가지고 있습니다.
        </Br>
        <Br>
          “긍정은 부정을 이긴다.” 항상 긍정적인 마인드와 에너지로 팀에 가치있는
          개발자가 되겠습니다.
        </Br>
      </SubIntro>
    </Container>
  );
};
export default Intro;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 9rem 0;
  @media (max-width: 1400px) {
    padding: 0;
  }
`;

const MainIntro = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

const Text1 = styled.div`
  font-size: 48px;
  display: flex;
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const Text2 = styled.div`
  color: #f3b95f;
  font-weight: bold;
`;

const StyledTypewriterWrapper = styled.div`
  .Typewriter {
    display: inline-block;
  }

  .Typewriter__cursor {
    display: inline-block;
    margin-left: 3px;
    vertical-align: middle;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

const StyledTypewriter = styled(Typewriter)``;

const SubIntro = styled.div`
  height: 100%;
  @media (max-width: 1400px) {
    font-size: 20px;
  }
`;

const Br = styled.div`
  margin-bottom: 1rem;
`;
