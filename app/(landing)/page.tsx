import Image from "next/image";
import LandingProbImg from "@/public/images/landing/landing_prob_image.png";
import LandingRankImg from "@/public/images/landing/landing_rank_image.png";
import LandingIdeImg from "@/public/images/landing/landing_ide_image.png";
import LandingTestImg from "@/public/images/landing/landing_test_image.png";
import LandingMonitoringImg from "@/public/images/landing/landing_monitoring_image.png";

export default function page() {
  return (
    <div className="flex flex-col mt-[25vh] mb-[15vh] space-y-[25vh]">
      <div className="flex w-[58vw] justify-between items-center">
        <div>
          <p className="font-PretendardBold text-[1vw] text-primaryBlue tracking-wide">
            알고리즘 문제 학습
          </p>
          <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
            다양한 문제를 풀고
          </p>
          <p>
            <span className="font-PretendardExtraBold text-[2.5vw] text-primaryBlue tracking-wide">
              AI 피드백
            </span>
            <span className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
              으로
            </span>
          </p>
          <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
            확실하게 마무리
          </p>
        </div>
        <div className="w-[35vw]">
          <Image src={LandingProbImg} alt="landing_prob_image" />
        </div>
      </div>
      <div className="flex w-[58vw] justify-between items-center">
        <div className="w-[25vw]">
          <Image src={LandingRankImg} alt="landing_prob_image" />
        </div>
        <div className="flex flex-col items-end">
          <p className="font-PretendardBold text-[1vw] text-primaryBlue tracking-wide">
            문제 해결 티어와 랭킹, 코드 비교
          </p>
          <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
            우리 학교 학생들과 함께
          </p>
          <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
            알고리즘 문제풀이
          </p>
        </div>
      </div>
      <div className="flex w-[58vw] justify-between items-center">
        <div>
          <p className="font-PretendardBold text-[1vw] text-primaryBlue tracking-wide">
            웹 IDE
          </p>
          <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
            코드 실행이 가능한
          </p>
          <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
            웹 IDE 환경 제공
          </p>
          <p className="font-PretendardSemiBold text-[1.1vw] text-realGrey tracking-wider">
            다크 모드 지원
          </p>
          <p className="font-PretendardSemiBold text-[1.1vw] text-realGrey tracking-wider">
            별도의 시험, 대회용 IDE 추가 제공
          </p>
        </div>
        <div className="w-[35vw]">
          <Image src={LandingIdeImg} alt="landing_prob_image" />
        </div>
      </div>
      <div className="flex w-[58vw] justify-between items-center">
        <div className="w-[20vw]">
          <Image src={LandingTestImg} alt="landing_prob_image" />
        </div>
        <div className="flex flex-col items-end">
          <p className="font-PretendardBold text-[1vw] text-primaryBlue tracking-wide">
            시험과 대회
          </p>
          <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
            교내 프로그래밍 정기고사,
          </p>
          <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
            교내 알고리즘 콘테스트 지원
          </p>
        </div>
      </div>
      <div className="flex w-[58vw] justify-between items-center">
        <div>
          <p className="font-PretendardBold text-[1vw] text-primaryBlue tracking-wide">
            문제 해결 랭킹, 코드 비교
          </p>
          <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
            직관적이고 편리한
          </p>
          <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
            시험 기능
          </p>
          <p className="font-PretendardSemiBold text-[1.1vw] text-realGrey tracking-wider">
            시험 생성부터 학생 관리,
          </p>
          <p className="font-PretendardSemiBold text-[1.1vw] text-realGrey tracking-wider">
            시험 결과 확인부터 모니터링까지
          </p>
        </div>
        <div className="w-[27vw]">
          <Image src={LandingMonitoringImg} alt="landing_prob_image" />
        </div>
      </div>
    </div>
  );
}
